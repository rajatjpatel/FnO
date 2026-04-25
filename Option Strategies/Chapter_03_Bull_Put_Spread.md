# Option Strategies Strategy 3: The Safety Net - Bull Put Spread

If the Bull Call Spread was about "funding a rally," the **Bull Put Spread** is about "collecting rent while staying safe." It is a **Credit Spread**, meaning you get paid upfront to take the trade.

---

## 1. The Setup

| Leg | Action | Strike |
| :--- | :--- | :--- |
| **Leg 1** | **Sell 1 Put** | ITM (In-the-Money) |
| **Leg 2** | **Buy 1 Put** | OTM (Out-of-the-Money) |

**The Logic:** You sell a high-premium Put because you believe the stock will stay above that level. To protect yourself from a "black swan" crash, you buy a cheaper Put at a lower strike to cap your loss.

---

## 2. The Payoff Math

Let's use **Zenith Power (ZNP)** as our example.
- **Spot Price:** $7,805
- **Sell $7,900 Put (ITM):** Receive $163
- **Buy $7,700 Put (OTM):** Pay $72
- **Net Credit Received:** $163 - $72 = **$91**

### Key Numbers:
- **Max Profit:** $91 (The net credit you keep if ZNP stays above $7,900).
- **Max Loss:** (Spread - Net Credit) = (200 - 91) = **$109**.
- **Breakeven:** Higher Strike - Net Credit = 7,900 - 91 = **$7,809**.

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
    <!-- Capped Loss (below 7700) -->
    <line x1="50" y1="230" x2="150" y2="230" stroke="#e74c3c" stroke-width="3" />
    <!-- Rising Profit (7700 to 7900) -->
    <line x1="150" y1="230" x2="350" y2="80" stroke="#2ecc71" stroke-width="3" />
    <!-- Capped Profit (above 7900) -->
    <line x1="350" y1="80" x2="550" y2="80" stroke="#27ae60" stroke-width="3" />

    <!-- Labels -->
    <circle cx="150" cy="230" r="5" fill="#34495e" /> <!-- Lower Strike (OTM) -->
    <text x="150" y="250" font-family="Arial" font-size="11" text-anchor="middle">7,700 Strike (Buy)</text>
    
    <circle cx="230" cy="150" r="4" fill="#f1c40f" /> <!-- Breakeven -->
    <text x="230" y="140" font-family="Arial" font-size="10" fill="#f39c12" text-anchor="middle">B.E.P (7,809)</text>

    <circle cx="350" cy="80" r="5" fill="#34495e" /> <!-- Higher Strike (ITM) -->
    <text x="350" y="70" font-family="Arial" font-size="11" text-anchor="middle">7,900 Strike (Sell)</text>

    <text x="100" y="245" font-family="Arial" font-size="10" fill="#e74c3c" text-anchor="middle">Max Loss: $109</text>
    <text x="480" y="70" font-family="Arial" font-size="10" fill="#27ae60" text-anchor="middle">Max Profit: $91</text>
  </svg>
</div>

---

## 4. Why use this over Bull Call?

1.  **High Volatility:** If the market just crashed and Put premiums are fat, selling them is more profitable.
2.  **Sideways Action:** In a Bull Call Spread, if the stock stays flat, you lose money. In a Bull Put Spread, if the stock stays flat (above $7,900), you keep the **full profit**.
3.  **Theta is Your Friend:** Since you are a net seller, time decay works for you, not against you.

---

## Chapter Summary

- **Bull Put Spread** = Sell ITM Put + Buy OTM Put.
- **Outcome:** Net Credit, defined risk, capped profit.
- **The "Safety Net":** The OTM Put ensures that even if the stock goes to zero, your loss is capped.

Next Strategy: **Strategy 4 - The Call Ratio Back Spread.**
