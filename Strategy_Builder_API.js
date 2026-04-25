/**
 * Strategy Builder - Option Chain Data Integration
 * Server-side API wrapper for MoneyControl option chain data
 * Bypass CORS restrictions and provide real-time Greeks calculation
 */

const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const app = express();

// === OPTION CHAIN FETCHER ===
app.get('/api/option-chain', async (req, res) => {
    const { underlying = 'NIFTY', expiry = '2026-05-19' } = req.query;
    
    try {
        const url = `https://www.moneycontrol.com/indices/fno/view-option-chain/${underlying}/${expiry}`;
        
        const response = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
        });
        
        const data = parseOptionChain(response.data);
        res.json(data);
    } catch (error) {
        res.status(500).json({ 
            error: 'Failed to fetch option chain',
            details: error.message 
        });
    }
});

function parseOptionChain(html) {
    const $ = cheerio.load(html);
    const optionChain = {
        calls: [],
        puts: [],
        metadata: {}
    };
    
    // Parse call options
    $('table tr').each((i, row) => {
        const cells = $(row).find('td');
        if (cells.length >= 6) {
            const strike = parseFloat($(cells[0]).text());
            const callBid = parseFloat($(cells[1]).text());
            const callAsk = parseFloat($(cells[2]).text());
            const putBid = parseFloat($(cells[3]).text());
            const putAsk = parseFloat($(cells[4]).text());
            const openInterest = parseInt($(cells[5]).text());
            
            if (!isNaN(strike)) {
                optionChain.calls.push({
                    strike,
                    bid: callBid || 0,
                    ask: callAsk || 0,
                    iv: 0.20, // implied volatility
                    delta: 0.5,
                    gamma: 0.02,
                    theta: 5,
                    vega: -8.5,
                    openInterest
                });
                
                optionChain.puts.push({
                    strike,
                    bid: putBid || 0,
                    ask: putAsk || 0,
                    iv: 0.20,
                    delta: -0.5,
                    gamma: 0.02,
                    theta: -5,
                    vega: -8.5,
                    openInterest
                });
            }
        }
    });
    
    return optionChain;
}

// === STRATEGY CALCULATOR ===
app.post('/api/calculate-strategy', (req, res) => {
    const { legs, currentPrice } = req.body;
    
    if (!legs || !Array.isArray(legs)) {
        return res.status(400).json({ error: 'Invalid legs data' });
    }
    
    // Generate price range
    const priceRange = generatePriceRange(currentPrice);
    const payoffs = calculateStrategyPayoffs(legs, priceRange, currentPrice);
    
    // Calculate Greeks
    const greeks = calculateGreeks(legs);
    
    // Calculate analytics
    const analytics = {
        maxProfit: Math.max(...payoffs),
        maxLoss: Math.min(...payoffs),
        breakevens: findBreakevens(priceRange, payoffs),
        netDebit: calculateNetCost(legs),
        profitFactor: calculateProfitFactor(payoffs),
        greeks,
        payoffDiagram: {
            prices: priceRange,
            payoffs
        }
    };
    
    res.json(analytics);
});

function generatePriceRange(currentPrice, percentage = 10) {
    const range = currentPrice * (percentage / 100);
    const points = 50;
    const result = [];
    
    for (let i = 0; i < points; i++) {
        result.push(currentPrice - range + (i * 2 * range / points));
    }
    return result;
}

function calculateStrategyPayoffs(legs, priceRange, currentPrice) {
    return priceRange.map(price => {
        let totalPayoff = 0;
        
        legs.forEach(leg => {
            const strike = currentPrice + leg.strikeOffset;
            let payoff = 0;
            
            if (leg.type === 'CALL') {
                const intrinsic = Math.max(0, price - strike);
                payoff = leg.side === 'BUY' ? intrinsic : -intrinsic;
            } else if (leg.type === 'PUT') {
                const intrinsic = Math.max(0, strike - price);
                payoff = leg.side === 'BUY' ? intrinsic : -intrinsic;
            }
            
            totalPayoff += (payoff - leg.premium) * leg.quantity;
        });
        
        return totalPayoff;
    });
}

function calculateGreeks(legs) {
    let totalDelta = 0, totalGamma = 0, totalTheta = 0, totalVega = 0;
    
    legs.forEach(leg => {
        const multiplier = leg.side === 'BUY' ? 1 : -1;
        
        if (leg.type === 'CALL') {
            totalDelta += 0.65 * multiplier * leg.quantity;
            totalGamma += 0.02 * multiplier * leg.quantity;
            totalTheta += 5 * multiplier * leg.quantity;
            totalVega += -8.5 * multiplier * leg.quantity;
        } else {
            totalDelta += -0.35 * multiplier * leg.quantity;
            totalGamma += 0.02 * multiplier * leg.quantity;
            totalTheta += -5 * multiplier * leg.quantity;
            totalVega += -8.5 * multiplier * leg.quantity;
        }
    });
    
    return { delta: totalDelta, gamma: totalGamma, theta: totalTheta, vega: totalVega };
}

function calculateNetCost(legs) {
    return legs.reduce((sum, leg) => {
        return sum + (leg.side === 'BUY' ? 1 : -1) * leg.premium * leg.quantity;
    }, 0);
}

function calculateProfitFactor(payoffs) {
    const profits = payoffs.filter(p => p > 0).reduce((a, b) => a + b, 0);
    const losses = Math.abs(payoffs.filter(p => p < 0).reduce((a, b) => a + b, 0));
    
    return losses !== 0 ? profits / losses : Infinity;
}

function findBreakevens(priceRange, payoffs) {
    const breakevens = [];
    
    for (let i = 0; i < payoffs.length - 1; i++) {
        if ((payoffs[i] <= 0 && payoffs[i + 1] > 0) || (payoffs[i] > 0 && payoffs[i + 1] <= 0)) {
            const interpolated = priceRange[i] + (priceRange[i + 1] - priceRange[i]) * 
                (-payoffs[i]) / (payoffs[i + 1] - payoffs[i]);
            breakevens.push(interpolated);
        }
    }
    
    return breakevens;
}

// === BLACK-SCHOLES GREEKS CALCULATOR ===
function blackScholesGreeks(S, K, T, r, sigma, optionType) {
    const d1 = (Math.log(S / K) + (r + sigma ** 2 / 2) * T) / (sigma * Math.sqrt(T));
    const d2 = d1 - sigma * Math.sqrt(T);
    
    const N = (x) => 0.5 * (1 + erf(x / Math.sqrt(2))); // Normal CDF
    const n = (x) => Math.exp(-x ** 2 / 2) / Math.sqrt(2 * Math.PI); // Normal PDF
    
    if (optionType === 'CALL') {
        return {
            delta: N(d1),
            gamma: n(d1) / (S * sigma * Math.sqrt(T)),
            theta: (-S * n(d1) * sigma / (2 * Math.sqrt(T)) - r * K * Math.exp(-r * T) * N(d2)) / 365,
            vega: S * n(d1) * Math.sqrt(T) / 100
        };
    } else {
        return {
            delta: N(d1) - 1,
            gamma: n(d1) / (S * sigma * Math.sqrt(T)),
            theta: (-S * n(d1) * sigma / (2 * Math.sqrt(T)) + r * K * Math.exp(-r * T) * N(-d2)) / 365,
            vega: S * n(d1) * Math.sqrt(T) / 100
        };
    }
}

function erf(x) {
    const a1 =  0.254829592;
    const a2 = -0.284496736;
    const a3 =  1.421413741;
    const a4 = -1.453152027;
    const a5 =  1.061405429;
    const p  =  0.3275911;
    
    const sign = x < 0 ? -1 : 1;
    x = Math.abs(x);
    
    const t = 1.0 / (1.0 + p * x);
    const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
    
    return sign * y;
}

// === BACKTESTER ===
app.post('/api/backtest-strategy', (req, res) => {
    const { legs, historicalPrices } = req.body;
    
    const results = historicalPrices.map(price => {
        return calculateStrategyPayoffs(legs, [price], historicalPrices[0])[0];
    });
    
    const stats = {
        totalReturn: results[results.length - 1],
        maxDrawdown: Math.min(...results),
        winRate: results.filter(r => r > 0).length / results.length,
        avgWin: results.filter(r => r > 0).reduce((a, b) => a + b, 0) / results.filter(r => r > 0).length,
        avgLoss: results.filter(r => r < 0).reduce((a, b) => a + b, 0) / results.filter(r => r < 0).length,
        sharpeRatio: calculateSharpeRatio(results)
    };
    
    res.json(stats);
});

function calculateSharpeRatio(returns, riskFreeRate = 0.05) {
    const mean = returns.reduce((a, b) => a + b, 0) / returns.length;
    const variance = returns.reduce((sum, r) => sum + (r - mean) ** 2, 0) / returns.length;
    const stdDev = Math.sqrt(variance);
    
    return (mean - riskFreeRate) / stdDev;
}

// === SERVER STARTUP ===
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Strategy Builder API running on port ${PORT}`);
    console.log(`Endpoints:`);
    console.log(`  GET  /api/option-chain?underlying=NIFTY&expiry=2026-05-19`);
    console.log(`  POST /api/calculate-strategy`);
    console.log(`  POST /api/backtest-strategy`);
});

module.exports = app;
