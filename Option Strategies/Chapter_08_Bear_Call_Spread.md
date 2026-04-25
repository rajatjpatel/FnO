# Option Strategies Strategy 8: The Ceiling - Bear Call Spread

The **Bear Call Spread** is the "mirror image" of the Bull Put Spread. It is a **Credit Spread**, meaning you get paid upfront to take the trade. It is the perfect strategy when you believe a stock has rallied too far and is likely to cool off or trade sideways.

---

## 1. The Setup

| Leg | Action | Strike |
| :--- | :--- | :--- |
| **Leg 1** | **Sell 1 Call** | ITM (In-the-Money) |
| **Leg 2** | **Buy 1 Call** | OTM (Out-of-the-Money) |

**The Logic:** You sell a high-premium call because you don't think the stock will go much higher. To protect yourself from a "short squeeze" or a sudden rally, you buy a cheaper OTM call that caps your loss.

---

## 2. The Payoff Math

Let's use **Zenith Power (ZNP)** as our example.
- **Spot Price:** $7,222
- **Sell $7,100 Call (ITM):** Receive $136
- **Buy $7,400 Call (OTM):** Pay $38
- **Net Credit Received (Max Profit):** $136 - $38 = **$98**

### Key Numbers:
- **Max Profit:** $98 (The credit you keep if ZNP stays below $7,100).
- **Max Loss:** (Spread - Net Credit) = (300 - 98) = **$202**.
- **Breakeven:** Lower Strike + Net Credit = 7,100 + 98 = **$7,198**.

---

## 3. Payoff Visualization

<div style="text-align: center; margin: 30px 0;">
  <svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
    <!-- X-Axis (Price) -->
    <line x1="50" y1="150" x2="550" y2="150" stroke="#34495e" stroke-width="2" />
    <text x="550" y="170" font-family="Arial" font-size="12" text-anchor="end">ZNP Price at Expiry</text>

    <!-- Y-Axis (P&L) -->
    <line x1="50" y1="50" x2="50" y2="250" stroke="#34495e" stroke-width="2" />
    <text x="40" y="50" font-family="Arial" font-size="12" transform="rotate(-90 40,50)" text-anchor="end">Profit / Loss</text>

    <!-- The Payoff Line -->
    <!-- Capped Profit (below 7100) -->
    <line x1="50" y1="80" x2="150" y2="80" stroke="#27ae60" stroke-width="3" />
    <!-- Falling Profit (7100 to 7400) -->
    <line x1="150" y1="80" x2="350" y2="230" stroke="#e74c3c" stroke-width="3" />
    <!-- Capped Loss (above 7400) -->
    <line x1="350" y1="230" x2="550" y2="230" stroke="#c0392b" stroke-width="3" />

    <!-- Labels -->
    <circle cx="150" cy="80" r="5" fill="#34495e" /> <!-- Lower Strike (Sell) -->
    <text x="150" y="70" font-family="Arial" font-size="11" text-anchor="middle">7,100 Strike (Sell)</text>
    
    <circle cx="230" cy="150" r="4" fill="#f1c40f" /> <!-- Breakeven -->
    <text x="230" y="140" font-family="Arial" font-size="10" fill="#f39c12" text-anchor="middle">B.E.P (7,198)</text>

    <circle cx="350" cy="230" r="5" fill="#34495e" /> <!-- Higher Strike (Buy) -->
    <text x="350" y="250" font-family="Arial" font-size="11" text-anchor="middle">7,400 Strike (Buy)</text>

    <text x="100" y="70" font-family="Arial" font-size="10" fill="#27ae60" text-anchor="middle">Max Profit: $98</text>
    <text x="480" y="245" font-family="Arial" font-size="10" fill="#e74c3c" text-anchor="middle">Max Loss: $202</text>
  </svg>
</div>

---

## 4. When to choose Bear Call over Bear Put?

1.  **Call Premiums are High:** If the market just had a massive "blow-off top," Call options will be very expensive. Selling them is more profitable than buying puts.
2.  **Flat to Bearish View:** If the stock goes nowhere, the Bear Put Spread (debit) loses money. The Bear Call Spread (credit) **makes money**.
3.  **Theta Decay:** You are a net seller of options. Every day that goes by is money in your pocket.

---

## Chapter Summary

- **Bear Call Spread** = Sell ITM Call + Buy OTM Call.
- **Outcome:** Net Credit, capped risk.
- **The Ceiling:** You are betting that the stock has hit its limit.

Next Strategy: **Strategy 9 - The Put Ratio Back spread.**
