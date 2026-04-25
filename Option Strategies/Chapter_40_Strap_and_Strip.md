# Option Strategies Strategy 40: The Weighted Scale - Strap & Strip

The **Strap** and the **Strip** are asymmetrical versions of the Straddle. While a Straddle (Strategy 10) is indifferent to direction, these strategies express a **Bias**. They are for the trader who says: "I know the market is going to move, but I'm 70% sure it's going UP."

---

## 1. The Setup

| Strategy | Component A | Component B | Outlook |
| :--- | :--- | :--- | :--- |
| **The Strap** | **Buy 2 Calls** | **Buy 1 Put** | Bullish Bias + High Volatility |
| **The Strip** | **Buy 1 Call** | **Buy 2 Puts** | Bearish Bias + High Volatility |

**The Logic:** You are paying more for the side you believe in. If the stock moves in your biased direction, the two options will double your profits. If it moves the other way, your single option still protects you from loss and can even lead to a profit if the move is large enough.

---

## 2. The Payoff Math (The Strap)

Let's use **Zenith Power (ZNP)** at $7,500.
- **Buy 2x $7,500 Calls:** Pay $150 total ($75 each)
- **Buy 1x $7,500 Put:** Pay $75
- **Total Initial Cost:** **$225**

### The Outcomes (Strap):
1.  **The Bull Run (Stock to $8,000):**
    - Your 2 Calls are worth $1,000.
    - **Net Profit:** $1,000 - $225 = **$775**.
2.  **The Bear Crash (Stock to $7,000):**
    - Your 1 Put is worth $500.
    - **Net Profit:** $500 - $225 = **$275**.
3.  **The Trap (Stock at $7,500):**
    - All options expire worthless.
    - **Max Loss:** Your entire **$225** investment.

---

## 3. Payoff Visualization (The Strap)

The Strap creates a "Lopsided V" where the right side (the Calls) is much steeper than the left.

<div style="text-align: center; margin: 30px 0;">
  <svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
    <!-- X-Axis -->
    <line x1="50" y1="200" x2="550" y2="200" stroke="#34495e" stroke-width="2" />
    
    <!-- The Strap Line (Asymmetrical V) -->
    <!-- Put Side (Slope 1) -->
    <line x1="50" y1="50" x2="300" y2="250" stroke="#3498db" stroke-width="4" />
    <!-- Call Side (Slope 2 - Steeper) -->
    <line x1="300" y1="250" x2="550" y2="0" stroke="#2ecc71" stroke-width="6" />

    <!-- Labels -->
    <circle cx="300" cy="250" r="6" fill="#c0392b" />
    <text x="300" y="275" font-family="Arial" font-size="12" fill="#c0392b" text-anchor="middle" font-weight="bold">MAX LOSS ($225)</text>
    
    <text x="100" y="80" font-family="Arial" font-size="10" fill="#3498db" text-anchor="middle">Put Profit (1x)</text>
    <text x="450" y="30" font-family="Arial" font-size="10" fill="#27ae60" text-anchor="middle" font-weight="bold">CALL PROFIT (2x)</text>

    <text x="300" y="220" font-family="Arial" font-size="10" fill="#34495e" text-anchor="middle">ATM Strike ($7,500)</text>
  </svg>
</div>

---

## 4. The Weighted Scale Strategy

1.  **Earnings Plays:** If you expect good news but are worried about a "sell-the-news" reaction, a Strap is the perfect way to capture the upside while keeping a foot in the door for a crash.
2.  **Gamma Scaling:** Because you have twice as many options on one side, your **Delta** increases twice as fast. This means you reach massive profitability much earlier in the biased direction.
3.  **Cost vs Reward:** You are paying 50% more than a standard Straddle, so your "Breakeven" points are further away. You need a bigger move to win.

---

## Chapter Summary

- **Strap** = 2 Long Calls + 1 Long Put. (Bullish Bias)
- **Strip** = 1 Long Call + 2 Long Puts. (Bearish Bias)
- **Goal:** Profit from a breakout with a directional lean.
- **The Weighted Scale:** Tilting the odds in your favor.

Next Strategy: **Strategy 41 - Index vs Equity - The Nuances.**
