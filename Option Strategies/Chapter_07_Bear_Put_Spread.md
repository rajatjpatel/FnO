# Option Strategies Strategy 7: The Shared Umbrella - Bear Put Spread

The **Bear Put Spread** is the go-to strategy when you are moderately bearish. It allows you to profit from a falling market while significantly reducing the cost of your "insurance" (the Put option).

---

## 1. The Setup

| Leg | Action | Strike |
| :--- | :--- | :--- |
| **Leg 1** | **Buy 1 Put** | ITM (In-the-Money) |
| **Leg 2** | **Sell 1 Put** | OTM (Out-of-the-Money) |

**The Logic:** Buying a deep ITM put is expensive because it already has intrinsic value. By selling a further OTM put, you collect a premium that "subsidizes" your main position. You are essentially sharing the cost of the trade.

---

## 2. The Payoff Math

Let's use **Nova Energy (NVE)** as our example.
- **Spot Price:** $7,485
- **Buy $7,600 Put (ITM):** Pay $165
- **Sell $7,400 Put (OTM):** Receive $73
- **Net Debit (Max Loss):** $165 - $73 = **$92**

### Key Numbers:
- **Max Profit:** (Spread - Net Debit) = (200 - 92) = **$108**.
- **Max Loss:** $92 (The net amount you paid upfront).
- **Breakeven:** Higher Strike - Net Debit = 7,600 - 92 = **$7,508**.

---

## 3. Payoff Visualization

<div style="text-align: center; margin: 30px 0;">
  <svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
    <!-- X-Axis (Price) -->
    <line x1="50" y1="150" x2="550" y2="150" stroke="#34495e" stroke-width="2" />
    <text x="550" y="170" font-family="Arial" font-size="12" text-anchor="end">NVE Price at Expiry</text>

    <!-- Y-Axis (P&L) -->
    <line x1="50" y1="50" x2="50" y2="250" stroke="#34495e" stroke-width="2" />
    <text x="40" y="50" font-family="Arial" font-size="12" transform="rotate(-90 40,50)" text-anchor="end">Profit / Loss</text>

    <!-- The Payoff Line -->
    <!-- Capped Profit (below 7400) -->
    <line x1="50" y1="80" x2="150" y2="80" stroke="#27ae60" stroke-width="3" />
    <!-- Falling Profit (7400 to 7600) -->
    <line x1="150" y1="80" x2="350" y2="210" stroke="#e74c3c" stroke-width="3" />
    <!-- Capped Loss (above 7600) -->
    <line x1="350" y1="210" x2="550" y2="210" stroke="#c0392b" stroke-width="3" />

    <!-- Labels -->
    <circle cx="150" cy="80" r="5" fill="#34495e" /> <!-- Lower Strike (Sell) -->
    <text x="150" y="70" font-family="Arial" font-size="11" text-anchor="middle">7,400 Strike (Sell)</text>
    
    <circle cx="270" cy="150" r="4" fill="#f1c40f" /> <!-- Breakeven -->
    <text x="270" y="140" font-family="Arial" font-size="10" fill="#f39c12" text-anchor="middle">B.E.P (7,508)</text>

    <circle cx="350" cy="210" r="5" fill="#34495e" /> <!-- Higher Strike (Buy) -->
    <text x="350" y="230" font-family="Arial" font-size="11" text-anchor="middle">7,600 Strike (Buy)</text>

    <text x="100" y="70" font-family="Arial" font-size="10" fill="#27ae60" text-anchor="middle">Max Profit: $108</text>
    <text x="480" y="225" font-family="Arial" font-size="10" fill="#e74c3c" text-anchor="middle">Max Loss: $92</text>
  </svg>
</div>

---

## 4. Why use this?

1.  **Risk Management:** You know exactly how much you can lose (the net debit).
2.  **Affordability:** Buying a naked ITM put can be prohibitively expensive. The spread makes it accessible.
3.  **Low IV Impact:** Unlike naked options, spreads are less sensitive to shifts in Volatility (Vega).

---

## Chapter Summary

- **Bear Put Spread** = Buy ITM Put + Sell OTM Put.
- **Outlook:** Moderately Bearish.
- **The Shared Umbrella:** Use the premium from the sold put to cover the cost of the bought put.

Next Strategy: **Strategy 8 - The Bear Call Spread.**
