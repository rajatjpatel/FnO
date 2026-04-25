# Option Strategies Strategy 19: The Tipping Point - Ratio Spreads

While the Backspread (Strategy 4 & 9) is a bet on a massive explosion, the **Ratio Spread** (or Front Spread) is a bet on a controlled move. It is a highly sophisticated strategy that often allows you to enter a trade for **Zero Cost** or even a **Credit**, provided you are willing to take on unlimited risk if the market moves too far.

---

## 1. The Setup (Call Ratio Spread)

| Leg | Action | Strike | Ratio |
| :--- | :--- | :--- | :--- |
| **Leg 1** | **Buy 1 Call** | At-the-Money (ATM) | 1 |
| **Leg 2** | **Sell 2 Calls** | Out-of-the-Money (OTM) | 2 |

**The Logic:** You are moderately bullish. You expect the stock to rise, but you don't think it will blast past the OTM strike. By selling two OTM calls for every one you buy, you finance the entire trade.

---

## 2. The Payoff Math

Let's use **Galaxy Tech (GTK)** at $7,900.
- **Buy $7,900 Call:** Pay $120
- **Sell 2x $8,100 Calls:** Receive $65 each (Total: $130)
- **Net Credit:** $130 - $120 = **$10** (You get paid to enter!)

### The Outcomes:
1.  **The Sweet Spot (Expiry at $8,100):**
    - The $7,900 Call is worth $200.
    - The $8,100 Calls expire worthless.
    - **Max Profit:** $200 (Value) + $10 (Credit) = **$210**.
2.  **The Flat Line (Below $7,900):**
    - All options expire worthless.
    - **Profit:** You keep the **$10 Credit**. (A "No-Lose" Bullish trade!)
3.  **The Cliff (Above $8,100):**
    - Your long call is working, but your two short calls are losing money twice as fast.
    - **The Risk:** After $8,310 (Breakeven), your losses become **Unlimited**.

---

## 3. Payoff Visualization

<div style="text-align: center; margin: 30px 0;">
  <svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
    <!-- X-Axis -->
    <line x1="50" y1="200" x2="550" y2="200" stroke="#34495e" stroke-width="2" />
    
    <!-- The Ratio Spread Line -->
    <!-- Flat start -->
    <line x1="50" y1="190" x2="250" y2="190" stroke="#27ae60" stroke-width="4" />
    <!-- Slope Up -->
    <line x1="250" y1="190" x2="400" y2="50" stroke="#2ecc71" stroke-width="4" />
    <!-- Slope Down (Steeper) -->
    <line x1="400" y1="50" x2="550" y2="280" stroke="#e74c3c" stroke-width="4" />

    <!-- Labels -->
    <circle cx="400" cy="50" r="6" fill="#27ae60" />
    <text x="400" y="35" font-family="Arial" font-size="12" fill="#27ae60" text-anchor="middle" font-weight="bold">MAX PROFIT ($210)</text>
    
    <text x="250" y="220" font-family="Arial" font-size="10" fill="#34495e" text-anchor="middle">Long Strike ($7,900)</text>
    <text x="400" y="220" font-family="Arial" font-size="10" fill="#34495e" text-anchor="middle">Short Strike ($8,100)</text>

    <text x="500" y="260" font-family="Arial" font-size="11" fill="#c0392b" text-anchor="middle">UNLIMITED RISK</text>
  </svg>
</div>

---

## 4. The Tipping Point Strategy

1.  **The "Free" Bet:** This is the only strategy that can be "Right even when you are Wrong." If the stock doesn't move or even falls slightly, you still keep the credit.
2.  **Pinning the Strike:** Your goal is for the stock to stop right at your short strike. This is the maximum extraction of value.
3.  **The Warning:** This is an **Expert Only** strategy. If the stock gaps up 10% overnight on news, your losses will be massive. You must have a plan to exit if the "Tipping Point" is breached.

---

## Chapter Summary

- **Ratio Spread** = Buy 1 ITM/ATM + Sell 2 OTM.
- **Goal:** Profit from a moderate move with zero upfront cost.
- **The Tipping Point:** Great rewards if you stay on the ledge, disaster if you fall off.

Next Strategy: **Strategy 20 - The Iron Butterfly.**
