## Strategy Builder - Complete Documentation

### 📋 Overview

The **Strategy Builder** is an institutional-grade options strategy construction and analysis engine. It provides:

1. **16 Pre-built Strategies** with customizable legs
2. **Real-time Option Chain Data** integration with MoneyControl
3. **Greek Calculator** for risk assessment
4. **Payoff Diagram Generator** with SVG visualization
5. **Strategy Backtester** with performance metrics

---

## 🚀 Quick Start

### Frontend Setup

```bash
# Open in browser
open Strategy_Builder.html

# Or serve locally
python -m http.server 8000
# Visit http://localhost:8000/Strategy_Builder.html
```

### Backend Setup

```bash
# Install dependencies
npm install express axios cheerio

# Start API server
node Strategy_Builder_API.js

# Server runs on http://localhost:3000
```

### Connect Frontend to Backend

Edit `Strategy_Builder.html` line ~620 in the `fetchOptionChain()` function:

```javascript
async function fetchOptionChain() {
    const underlying = document.getElementById('underlying').value || 'NIFTY';
    const expiryDate = document.getElementById('expiryDate').value;
    
    try {
        const response = await fetch(
            `http://localhost:3000/api/option-chain?underlying=${underlying}&expiry=${expiryDate}`
        );
        const data = await response.json();
        
        optionChainData = data;
        document.getElementById('currentPrice').value = data.metadata.currentPrice;
        document.getElementById('dataStatus').value = 'Loaded ✓';
        
        renderLegs();
        calculateAnalytics();
    } catch (error) {
        showStatus('Failed to fetch option chain: ' + error.message, 'error');
    }
}
```

---

## 📊 16 Supported Strategies

### **DIRECTIONAL STRATEGIES**

#### 1. Buy Call
- **Market View**: Bullish
- **Structure**: Long 1 Call
- **Max Profit**: Unlimited
- **Max Loss**: Premium paid
- **Breakeven**: Strike + Premium
- **Use Case**: Expect upside with defined risk

#### 2. Buy Put
- **Market View**: Bearish
- **Structure**: Long 1 Put
- **Max Profit**: Strike - Premium
- **Max Loss**: Premium paid
- **Breakeven**: Strike - Premium
- **Use Case**: Expect downside with defined risk

#### 3. Sell Call
- **Market View**: Bearish/Neutral
- **Structure**: Short 1 Call
- **Max Profit**: Premium received
- **Max Loss**: Unlimited
- **Breakeven**: Strike + Premium
- **Use Case**: Generate income, expect sideways/down

#### 4. Sell Put
- **Market View**: Bullish/Neutral
- **Structure**: Short 1 Put
- **Max Profit**: Premium received
- **Max Loss**: Strike - Premium
- **Breakeven**: Strike - Premium
- **Use Case**: Generate income, expect sideways/up

---

### **SPREAD STRATEGIES**

#### 5. Bull Call Spread
- **Market View**: Bullish
- **Structure**: Buy lower call + Sell higher call
- **Max Profit**: Width - (Premium paid)
- **Max Loss**: Premium paid
- **Breakeven**: Lower strike + Premium paid
- **Use Case**: Limited profit with reduced cost

#### 6. Bull Put Spread
- **Market View**: Bullish
- **Structure**: Sell lower put + Buy higher put
- **Max Profit**: Net credit received
- **Max Loss**: Width - Credit
- **Breakeven**: Lower strike - Credit
- **Use Case**: Income from bullish bias

#### 7. Bear Call Spread
- **Market View**: Bearish
- **Structure**: Sell lower call + Buy higher call
- **Max Profit**: Net credit received
- **Max Loss**: Width - Credit
- **Breakeven**: Lower strike + Credit
- **Use Case**: Limited risk bearish play

#### 8. Bear Put Spread
- **Market View**: Bearish
- **Structure**: Buy lower put + Sell higher put
- **Max Profit**: Width - Premium
- **Max Loss**: Premium paid
- **Breakeven**: Higher strike - Premium
- **Use Case**: Income on neutral-bearish outlook

---

### **VOLATILITY STRATEGIES**

#### 9. Long Straddle
- **Market View**: High Volatility
- **Structure**: Buy ATM Call + Buy ATM Put
- **Max Profit**: Unlimited (up) / Strike - Premium (down)
- **Max Loss**: Premium paid
- **Breakeven**: Strike ± Premium
- **Use Case**: Profit from any large move

#### 10. Long Strangle
- **Market View**: High Volatility
- **Structure**: Buy OTM Call + Buy OTM Put
- **Max Profit**: Unlimited (up) / Strike - Premium (down)
- **Max Loss**: Premium paid (lower cost than straddle)
- **Breakeven**: Strike ± Premium
- **Use Case**: Cheaper volatility play

#### 11. Short Straddle
- **Market View**: Low Volatility
- **Structure**: Sell ATM Call + Sell ATM Put
- **Max Profit**: Premium received
- **Max Loss**: Unlimited (up) / Unlimited (down)
- **Breakeven**: Strike ± Premium
- **Use Case**: Profit from mean reversion

---

### **MULTI-LEG STRATEGIES**

#### 12. Iron Condor
- **Market View**: Neutral
- **Structure**: Sell Call Spread + Sell Put Spread
- **Max Profit**: Net credit received
- **Max Loss**: Width - Credit
- **Breakeven**: Boundaries
- **Use Case**: Income in low volatility environments

#### 13. Call Ratio Backspread
- **Market View**: Bullish
- **Structure**: Sell 1 Call + Buy 2 Higher Calls
- **Max Profit**: Unlimited
- **Max Loss**: Premium paid + (Width × 1)
- **Breakeven**: Strike ± Premium
- **Use Case**: Bullish with asymmetric payout

#### 14. Butterfly Spread
- **Market View**: Neutral
- **Structure**: Buy Wing Calls, Sell Body Calls
- **Max Profit**: Width/2 - Premium
- **Max Loss**: Premium paid
- **Breakeven**: Strikes ± Premium
- **Use Case**: Low risk, defined profit range

---

### **HEDGING STRATEGIES**

#### 15. Covered Call
- **Market View**: Bullish
- **Structure**: Long Stock + Short Call
- **Max Profit**: Strike + Premium
- **Max Loss**: Stock cost
- **Breakeven**: Cost - Premium
- **Use Case**: Generate income on holdings

#### 16. Protective Put
- **Market View**: Bullish (with insurance)
- **Structure**: Long Stock + Long Put
- **Max Profit**: Unlimited
- **Max Loss**: Premium + (Cost - Strike)
- **Breakeven**: Cost + Premium
- **Use Case**: Downside protection while staying long

---

## 🔧 API Endpoints

### GET /api/option-chain

Fetch live option chain data from MoneyControl

**Query Parameters:**
```
underlying: NIFTY | BANKNIFTY | FINNIFTY | etc.
expiry: 2026-05-19 (YYYY-MM-DD format)
```

**Example Request:**
```bash
curl "http://localhost:3000/api/option-chain?underlying=NIFTY&expiry=2026-05-19"
```

**Example Response:**
```json
{
  "calls": [
    {
      "strike": 23900,
      "bid": 150.25,
      "ask": 152.75,
      "iv": 0.18,
      "delta": 0.65,
      "gamma": 0.015,
      "theta": 4.5,
      "vega": -8.2,
      "openInterest": 45600
    }
  ],
  "puts": [
    {
      "strike": 23900,
      "bid": 140.50,
      "ask": 142.75,
      "iv": 0.19,
      "delta": -0.35,
      "gamma": 0.016,
      "theta": -4.5,
      "vega": -8.3,
      "openInterest": 52300
    }
  ],
  "metadata": {
    "underlying": "NIFTY",
    "currentPrice": 23897.95,
    "expiry": "2026-05-19",
    "lastUpdate": "2026-04-25T10:30:00Z"
  }
}
```

---

### POST /api/calculate-strategy

Calculate strategy analytics including Greeks and payoff

**Request Body:**
```json
{
  "legs": [
    {
      "type": "CALL",
      "side": "BUY",
      "strikeOffset": 0,
      "premium": 168.45,
      "quantity": 1
    },
    {
      "type": "CALL",
      "side": "SELL",
      "strikeOffset": 200,
      "premium": 50,
      "quantity": 1
    }
  ],
  "currentPrice": 23897.95
}
```

**Example Response:**
```json
{
  "maxProfit": 10949,
  "maxLoss": 8951,
  "breakevens": [24118, 24318],
  "netDebit": 118.45,
  "profitFactor": 1.22,
  "greeks": {
    "delta": 0.35,
    "gamma": 0.01,
    "theta": 0.5,
    "vega": -15.5
  },
  "payoffDiagram": {
    "prices": [23500, 23600, ..., 24300],
    "payoffs": [-8951, -8751, ..., 10949]
  }
}
```

---

### POST /api/backtest-strategy

Backtest strategy against historical prices

**Request Body:**
```json
{
  "legs": [...],
  "historicalPrices": [23800, 23850, 23900, 23950, 24000, ...]
}
```

**Example Response:**
```json
{
  "totalReturn": 2500,
  "maxDrawdown": -5000,
  "winRate": 0.65,
  "avgWin": 8000,
  "avgLoss": -3500,
  "sharpeRatio": 1.85
}
```

---

## 📈 Greeks Explanation

### **Delta (Δ)**
- **Range**: -1 to +1
- **Meaning**: Price sensitivity
- **Call**: +0.5 (ATM), +1 (Deep ITM), 0 (Deep OTM)
- **Put**: -0.5 (ATM), 0 (Deep OTM), -1 (Deep ITM)
- **Use**: Directional exposure indicator

### **Gamma (Γ)**
- **Range**: 0 to +0.05
- **Meaning**: Delta change rate
- **Effect**: Increases when approach expiry or ATM
- **Use**: Acceleration indicator

### **Theta (Θ)**
- **Range**: -1 to +5 per day
- **Meaning**: Time decay
- **Positive**: Short options/time premium sellers
- **Negative**: Long options/time buyers
- **Use**: Time value bleed

### **Vega (ν)**
- **Range**: -20 to +20
- **Meaning**: Volatility sensitivity
- **Effect**: Positive for long options, negative for short
- **Use**: IV crush impact indicator

---

## 🎨 UI Components

### Strategy Selector (Left Panel)
- **Filters**: Market View, Risk Profile
- **Quick Load**: Pre-configured legs
- **Visual Indicators**: Strategy type color coding

### Builder Engine (Center Panel)
- **Underlying Selection**: Any index/stock
- **Expiry Management**: Dynamic expiry dates
- **Dynamic Legs**: Add/Remove/Modify on the fly
- **Real-time Updates**: Auto-calculation

### Analytics Dashboard (Right Panel)
- **Key Metrics**: Max P/L, Breakeven, Cost
- **Greeks Table**: Delta, Gamma, Theta, Vega
- **Payoff Diagram**: SVG-rendered with price axis
- **Strategy Status**: Real-time calculations

---

## 🔌 Integration Examples

### Fetch Option Chain in Python
```python
import requests

response = requests.get(
    'http://localhost:3000/api/option-chain',
    params={'underlying': 'NIFTY', 'expiry': '2026-05-19'}
)
data = response.json()
print(f"Current Price: {data['metadata']['currentPrice']}")
```

### Calculate Strategy in JavaScript
```javascript
const strategy = {
  legs: [
    { type: 'CALL', side: 'BUY', strikeOffset: 0, premium: 168.45, quantity: 1 },
    { type: 'CALL', side: 'SELL', strikeOffset: 200, premium: 50, quantity: 1 }
  ],
  currentPrice: 23897.95
};

fetch('http://localhost:3000/api/calculate-strategy', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(strategy)
})
.then(r => r.json())
.then(data => console.log('Max Profit:', data.maxProfit));
```

---

## 📋 File Structure

```
rajatjpatel/FnO/
├── Strategy_Builder.html          # Main UI (standalone or with API)
├── Strategy_Builder_API.js        # Backend server
├── Master_Index.html              # Navigation hub
├── Option_Simulator.html          # Greeks explorer
├── Bridgewater.css                # Institutional theme
├── README.md                       # Documentation
└── package.json                   # Dependencies
```

---

## 🚨 Troubleshooting

### CORS Errors
**Solution**: Run API server on same domain or use proxy
```javascript
// Use backend proxy
fetch('/api/option-chain?underlying=NIFTY')
```

### MoneyControl Parsing Fails
**Solution**: Fallback data provided, or scrape directly:
```bash
curl 'https://www.moneycontrol.com/indices/fno/view-option-chain/NIFTY/2026-05-19'
```

### Greeks Not Showing
**Solution**: Ensure API server is running and connected
```bash
npm start  # Start Strategy_Builder_API.js
```

---

## 📚 Advanced Topics

### Custom Black-Scholes Implementation
The API includes full Black-Scholes Greeks calculation:
- Input: S (spot), K (strike), T (time), r (rate), σ (volatility)
- Output: Delta, Gamma, Theta, Vega
- Error Function: Precise normal distribution CDF

### Payoff Diagram Algorithm
1. Generate 50-point price range (±10% of current)
2. Calculate payoff for each leg at each price
3. Sum all legs to get total strategy payoff
4. Render as SVG line chart

### Backtesting Engine
- Input: Strategy + Historical prices
- Output: Returns, Drawdown, Win Rate, Sharpe Ratio
- Risk-free rate: 5% annualized

---

## 🔐 Security Notes

- **Input Validation**: All parameters validated server-side
- **CORS**: Configure for your domain
- **Rate Limiting**: Implement for production
- **Error Handling**: Graceful fallback to simulated data

---

## 📞 Support

For issues or feature requests:
1. Check troubleshooting section above
2. Review Strategy_Builder_API.js comments
3. Verify MoneyControl data availability
4. Test with sample strategies first

---

## 📄 License

Bridgewater Institutional Architecture - 2026
All rights reserved.
