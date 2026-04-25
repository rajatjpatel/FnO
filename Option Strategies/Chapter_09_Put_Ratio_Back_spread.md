# Option Strategies Strategy 9: The Avalanche - Put Ratio Back spread

The **Put Ratio Back spread** is the bearish equivalent of the Slingshot. It is the strategy you deploy when you expect a massive "blood in the streets" crash, but you still want to get paid if you are totally wrong and the market rallies instead.

---

## 1. The Setup

| Leg | Action | Strike | Ratio |
| :--- | :--- | :--- | :--- |
| **Leg 1** | **Sell 1 Put** | ITM (In-the-Money) | 1 |
| **Leg 2** | **Buy 2 Puts** | OTM (Out-of-the-Money) | 2 |

**The Logic:** You sell an expensive ITM put to fund the purchase of two cheaper OTM puts. If the market collapses, your two long puts will gain value twice as fast as your short put loses it.

---

## 2. The Payoff Math

Let's use **Zenith Power (ZNP)** as our example.
- **Spot Price:** $7,506
- **Sell $7,500 Put (ITM):** Receive $134
- **Buy 2x $7,200 Puts (OTM):** Pay $46 each ($92 total)
- **Net Credit Received:** $134 - $92 = **$42**

### The Three Outcomes:
1.  **The Bull Relief (Above $7,500):** If the market rallies, all puts expire worthless. You keep the **$42 net credit**.
2.  **The Total Collapse (Below $6,942):** Your two long puts generate profit faster than your one short put. **Unlimited Profit Potential** (down to zero).
3.  **The Valley of Death (At $7,200):** This is the point of maximum pain.
    - **Max Loss:** Spread ($300) - Net Credit ($42) = **$258**.

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
    <!-- Crash Profit (below 7200) -->
    <path d="M 50 50 L 150 150 L 250 240" stroke="#2ecc71" stroke-width="3" fill="none" />
    <!-- Recovery to Max Loss (7200 to 7500) -->
    <line x1="250" y1="240" x2="450" y2="130" stroke="#e74c3c" stroke-width="3" />
    <!-- Flat Credit (above 7500) -->
    <line x1="450" y1="130" x2="550" y2="130" stroke="#27ae60" stroke-width="3" />

    <!-- Labels -->
    <text x="250" y="260" font-family="Arial" font-size="10" fill="#e74c3c" text-anchor="middle">7,200 (Buy 2x Puts)</text>
    <text x="450" y="120" font-family="Arial" font-size="10" fill="#27ae60" text-anchor="middle">7,500 (Sell Put)</text>
    
    <text x="500" y="145" font-family="Arial" font-size="10" fill="#27ae60" text-anchor="middle">Keep $42</text>
    <text x="80" y="80" font-family="Arial" font-size="10" fill="#2ecc71" text-anchor="middle">CRASH PROFIT</text>
    <text x="250" y="225" font-family="Arial" font-size="10" fill="#e74c3c" text-anchor="middle">Max Loss: $258</text>
  </svg>
</div>

---

## 4. The Avalanche Metaphor

Think of this as a **Defensive Weapon**.
- You are mostly worried about a market crash.
- You buy two "Insurance Policies" (Puts) for the price of one.
- You pay for them by selling a "Higher Protection" to someone else.
- If the crash happens, your insurance pays out double.
- If no crash happens and the market goes up, you didn't "waste" your premium because you got a net credit.

---

## Chapter Summary

- **Put Ratio Back spread** = 1 Short ITM Put + 2 Long OTM Puts.
- **Outcome:** Unlimited downside profit, small upside credit.
- **Risk:** The gap between the strikes.

Next Strategy: **Strategy 10 - The Long Straddle.**
