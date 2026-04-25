# Option Strategies Strategy 32: The Alchemist - Synthetic Positions

In the world of options, anything can be turned into something else. **Synthetic Positions** are combinations of assets that mimic the payoff of a different asset perfectly. Understanding synthetics is the "Alchemist's Stone" for traders—it allows you to find better liquidity, lower costs, and hidden arbitrage opportunities.

---

## 1. The Core Formulas (The Put-Call Parity)

There are four primary synthetic combinations. Every trader should have these memorized:

| To Create a... | Combine These Components | Logic |
| :--- | :--- | :--- |
| **Synthetic Long Stock** | **Buy Call + Sell Put** | Mimics 100 shares of stock. |
| **Synthetic Short Stock** | **Sell Call + Buy Put** | Mimics -100 shares of stock. |
| **Synthetic Long Call** | **Long Stock + Long Put** | Mimics buying a Call (Strategy 16). |
| **Synthetic Long Put** | **Short Stock + Long Call** | Mimics buying a Put. |

---

## 2. Deep Dive: Synthetic Long Stock

**The Setup:**
- Buy 1x ATM Call
- Sell 1x ATM Put
- (Same Strike, Same Expiry)

**The Payoff:** If the stock rises $1, you make $1. If it falls $1, you lose $1. It is identical to owning the shares.

**Why do it?**
1.  **Capital Efficiency:** You don't need to pay the full price of the stock. You only need the margin for the short put.
2.  **Tax Benefits:** In some jurisdictions, holding options is taxed differently than holding stock.
3.  **Arbitrage:** If the Call and Put premiums are slightly mispriced, you can create a "Long Stock" position that is cheaper than the market price.

---

## 3. Payoff Visualization (Synthetic Long Stock)

<div style="text-align: center; margin: 30px 0;">
  <svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
    <!-- X-Axis -->
    <line x1="50" y1="200" x2="550" y2="200" stroke="#34495e" stroke-width="2" />
    
    <!-- Long Stock Slope (Mimicked) -->
    <line x1="50" y1="280" x2="550" y2="40" stroke="#8e44ad" stroke-width="4" />

    <!-- Components -->
    <!-- Long Call -->
    <polyline points="300,200 550,40" fill="none" stroke="#2ecc71" stroke-width="2" stroke-dasharray="3,3" />
    <!-- Short Put -->
    <polyline points="50,280 300,200" fill="none" stroke="#e74c3c" stroke-width="2" stroke-dasharray="3,3" />

    <!-- Labels -->
    <text x="300" y="220" font-family="Arial" font-size="10" fill="#34495e" text-anchor="middle">ATM Strike</text>
    <text x="450" y="80" font-family="Arial" font-size="12" fill="#8e44ad" text-anchor="middle" font-weight="bold">SYNTHETIC LONG</text>
    
    <text x="500" y="220" font-family="Arial" font-size="10" fill="#2ecc71" text-anchor="middle">Long Call</text>
    <text x="100" y="220" font-family="Arial" font-size="10" fill="#e74c3c" text-anchor="middle">Short Put</text>
  </svg>
</div>

---

## 4. The Alchemist's Rule

**"Price = Call - Put + Strike"**

1.  **Arbitrage:** If you see a Synthetic Long Stock trading at $99.50 while the actual stock is at $100.00, you have found a "Risk-Free" $0.50. You buy the synthetic and short the stock.
2.  **No Dividends:** Remember, synthetic stock does **not** collect dividends. You must subtract the expected dividend from your calculations.
3.  **Pin Risk:** If the stock expires exactly at the strike, you might end up with shares you didn't intend to hold. Always close your synthetics before the final hour of expiry.

---

## Chapter Summary

- **Synthetics** use Put-Call Parity to mimic other assets.
- **Synthetic Long** = Buy Call + Sell Put.
- **Goal:** Capital efficiency and arbitrage.
- **The Alchemist:** Turning paper contracts into digital gold.

Next Strategy: **Strategy 33 - The Double Threat - Long & Short Guts.**
