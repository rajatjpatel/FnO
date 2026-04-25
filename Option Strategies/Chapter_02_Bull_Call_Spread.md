# Option Strategies Strategy 2: The Funded Rally - Bull Call Spread

The Bull Call Spread is the "budget-friendly" version of a Long Call. It is the perfect strategy when you think a stock like **Nova Energy (NVE)** will go up, but you don't think it will go to the moon.

---

## 1. The Setup

| Leg | Action | Strike |
| :--- | :--- | :--- |
| **Leg 1** | **Buy 1 Call** | ATM (At-the-Money) |
| **Leg 2** | **Sell 1 Call** | OTM (Out-of-the-Money) |

**The Logic:** You buy the ATM Call to profit from the upward move. To pay for this ticket, you sell an OTM Call at a higher price level that you don't expect the stock to reach.

---

## 2. The Payoff Math

Let's use **Nova Energy (NVE)** as our example.
- **Spot Price:** $7,846
- **Buy $7,800 Call (ATM):** Cost $79
- **Sell $7,900 Call (OTM):** Receive $25
- **Net Cost (Debit):** $79 - $25 = **$54**

### Key Numbers:
- **Max Loss:** $54 (The Net Debit paid).
- **Max Profit:** (Spread - Net Debit) = (100 - 54) = **$46**.
- **Breakeven:** Lower Strike + Net Debit = 7,800 + 54 = **$7,854**.

---

## 3. Payoff Visualization

<div style="text-align: center; margin: 30px 0;">
  <svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
    <!-- X-Axis (Price) -->
    <line x1="50" y1="200" x2="550" y2="200" stroke="#34495e" stroke-width="2" />
    <text x="550" y="220" font-family="Arial" font-size="12" text-anchor="end">NVE Price at Expiry</text>

    <!-- Y-Axis (P&L) -->
    <line x1="50" y1="50" x2="50" y2="250" stroke="#34495e" stroke-width="2" />
    <text x="40" y="50" font-family="Arial" font-size="12" transform="rotate(-90 40,50)" text-anchor="end">Profit / Loss</text>

    <!-- The Payoff Line -->
    <!-- Flat Loss (below 7800) -->
    <line x1="50" y1="230" x2="200" y2="230" stroke="#e74c3c" stroke-width="3" />
    <!-- Diagonal Move (7800 to 7900) -->
    <line x1="200" y1="230" x2="400" y2="130" stroke="#2ecc71" stroke-width="3" />
    <!-- Capped Profit (above 7900) -->
    <line x1="400" y1="130" x2="550" y2="130" stroke="#27ae60" stroke-width="3" />

    <!-- Labels -->
    <circle cx="200" cy="230" r="5" fill="#34495e" /> <!-- Lower Strike -->
    <text x="200" y="250" font-family="Arial" font-size="11" text-anchor="middle">7,800 Strike</text>
    
    <circle cx="280" cy="190" r="4" fill="#f1c40f" /> <!-- Breakeven -->
    <text x="280" y="215" font-family="Arial" font-size="10" fill="#f39c12" text-anchor="middle">Breakeven (7,854)</text>

    <circle cx="400" cy="130" r="5" fill="#34495e" /> <!-- Upper Strike -->
    <text x="400" y="120" font-family="Arial" font-size="11" text-anchor="middle">7,900 Strike</text>

    <text x="100" y="245" font-family="Arial" font-size="10" fill="#e74c3c" text-anchor="middle">Max Loss: $54</text>
    <text x="480" y="115" font-family="Arial" font-size="10" fill="#27ae60" text-anchor="middle">Max Profit: $46</text>
  </svg>
</div>

---

## 4. When to Use This?

1.  **Moderately Bullish:** You expect a 2-4% move, not a 10% explosion.
2.  **High Premium Environments:** When ATM calls are too expensive, selling an OTM call makes the trade affordable.
3.  **Low Volatility Preferred:** You want the stock to drift up steadily.

---

## Chapter Summary

- **Bull Call Spread** = Long Call + Short OTM Call.
- **Outcome:** Lower cost, defined risk, and capped profit.
- **The Trade-off:** You give up the "lottery ticket" upside for a cheaper entry fee.

Next Strategy: **Strategy 3 - The Bull Put Spread.**
