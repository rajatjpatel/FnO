# Option Strategies Strategy 22: The Moving Staircase - The Diagonal Spread

The **Diagonal Spread** is the ultimate hybrid strategy. It combines the directional bet of a Vertical Spread with the time-decay benefits of a Calendar Spread. It is "diagonal" because it moves across both dimensions: **Price (Strikes)** and **Time (Expirations)**.

---

## 1. The Setup

| Leg | Action | Expiration | Strike |
| :--- | :--- | :--- | :--- |
| **Leg 1** | **Buy Call** | Long-Term | In-the-Money (ITM) |
| **Leg 2** | **Sell Call** | Short-Term | Out-of-the-Money (OTM) |

**The Logic:** You are bullish on the stock. You buy a deep ITM call (which acts like owning the stock) and sell an OTM call against it. This is essentially a "Leveraged Covered Call."

---

## 2. The Payoff Math

Let's use **Galaxy Tech (GTK)** at $7,900.
- **Buy $7,700 Call (Expiring in 60 days):** Pay $350
- **Sell $8,100 Call (Expiring in 15 days):** Receive $60
- **Net Debit (Max Risk):** $350 - $60 = **$290**

### The Three Outcomes:
1.  **The Perfect Ascent (Expiry at $8,100):**
    - The short-term $8,100 call expires worthless. You keep the $60.
    - The $7,700 call is now worth $400+ because the stock rose.
    - **Estimated Profit:** ($400 + $60) - $350 = **$110**.
2.  **The Over-Rally (Above $8,200):**
    - Your short call is ITM. You may have to roll the position or close it for a capped profit.
3.  **The Tumble (Below $7,700):**
    - Both options lose value. Your maximum risk is the **$290 Debit** you paid.

---

## 3. Payoff Visualization

The Diagonal Spread has an asymmetrical "Staircase" payoff. The peak is at the short strike, but it has a wider range of profitability than a calendar spread.

<div style="text-align: center; margin: 30px 0;">
  <svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
    <!-- X-Axis -->
    <line x1="50" y1="200" x2="550" y2="200" stroke="#34495e" stroke-width="2" />
    
    <!-- The Diagonal Spread Curve -->
    <path d="M 100 280 Q 200 150 350 50 Q 450 150 500 280" fill="none" stroke="#2980b9" stroke-width="4" />

    <!-- Labels -->
    <circle cx="350" cy="50" r="6" fill="#27ae60" />
    <text x="350" y="35" font-family="Arial" font-size="12" fill="#27ae60" text-anchor="middle" font-weight="bold">MAX PROFIT ($110) @ 8,100</text>
    
    <text x="200" y="220" font-family="Arial" font-size="10" fill="#34495e" text-anchor="middle">Long Strike ($7,700)</text>
    <text x="350" y="220" font-family="Arial" font-size="10" fill="#34495e" text-anchor="middle">Short Strike ($8,100)</text>

    <text x="50" y="150" font-family="Arial" font-size="12" fill="#34495e" transform="rotate(-90 50,150)" text-anchor="middle">Profit / Loss</text>
  </svg>
</div>

---

## 4. The Moving Staircase Strategy

1.  **Lower Capital Requirement:** Instead of buying 100 shares of GTK (which would cost $790,000), you use a deep ITM call for $350. This is massive leverage.
2.  **Two Ways to Win:** You win if the stock goes up (Price) and you win as the days go by (Time).
3.  **Managing the Position:** Like the Calendar Spread, once the first short call expires, you can sell **another** one for the next cycle, effectively getting "paid" multiple times while holding your long position.

---

## Chapter Summary

- **Diagonal Spread** = Long-Term ITM Call + Short-Term OTM Call.
- **Goal:** Profit from price appreciation AND time decay.
- **The Moving Staircase:** Efficient, leveraged, and multi-dimensional.

Next Strategy: **Strategy 23 - Case Studies.**
