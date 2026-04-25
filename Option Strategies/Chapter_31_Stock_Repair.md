# Option Strategies Strategy 31: The Rescue Rope - Stock Repair

The **Stock Repair Strategy** (or Covered Ratio Spread) is one of the most practical tools for a long-term investor. It is used when you have a stock that has fallen significantly and you want to "repair" the position and reach your breakeven point twice as fast, without spending any extra money.

---

## 1. The Setup

| Component | Action | Strike | Ratio |
| :--- | :--- | :--- | :--- |
| **Existing Asset** | **Long Stock** | (Owned at a loss) | 100 Shares |
| **Leg 1** | **Buy 1 Call** | At-the-Money (ATM) | 1 |
| **Leg 2** | **Sell 2 Calls** | Out-of-the-Money (OTM) | 2 |

**The Logic:** You use the premium from selling two OTM calls to pay for the one ATM call. This makes the trade **Zero-Cost**. Because you now have two long "drivers" (the stock + the long call) against two short calls, you make $2 for every $1 the stock rises.

---

## 2. The Payoff Math

Let's use **Apex Auto (AAU)**.
- **Original Purchase Price:** $2,800 (Stock is now at $2,500).
- **The Problem:** You need a $300 move to break even.
- **The Repair:**
    - Buy 1x $2,500 Call
    - Sell 2x $2,650 Calls
    - **Net Cost:** $0 (Premiums cancel out)

### The Outcome (At $2,650):
1.  **Stock Value:** $2,650 (You are still down $150 on the stock).
2.  **Long Call Value:** $150 Profit.
3.  **Short Calls:** Expire worthless.
4.  **Total Result:** -$150 (Stock) + $150 (Call) = **$0 (Breakeven!)**
- **The Magic:** You broke even when the stock only reached $2,650, instead of $2,800.

---

## 3. Payoff Visualization

The Stock Repair strategy creates a "Double Slope" that levels off at your new breakeven point.

<div style="text-align: center; margin: 30px 0;">
  <svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
    <!-- X-Axis -->
    <line x1="50" y1="200" x2="550" y2="200" stroke="#34495e" stroke-width="2" />
    
    <!-- Original Stock Slope (Dashed) -->
    <line x1="50" y1="280" x2="550" y2="80" stroke="#bdc3c7" stroke-width="2" stroke-dasharray="5,5" />
    
    <!-- Repair Slope (Steeper) -->
    <line x1="150" y1="240" x2="300" y2="150" stroke="#2ecc71" stroke-width="4" />
    <!-- Profit Cap -->
    <line x1="300" y1="150" x2="550" y2="150" stroke="#27ae60" stroke-width="4" />

    <!-- Labels -->
    <circle cx="300" cy="150" r="6" fill="#2ecc71" />
    <text x="300" y="140" font-family="Arial" font-size="12" fill="#27ae60" text-anchor="middle" font-weight="bold">NEW BREAKEVEN ($2,650)</text>
    
    <text x="150" y="260" font-family="Arial" font-size="10" fill="#34495e" text-anchor="middle">Current Price ($2,500)</text>
    <text x="500" y="70" font-family="Arial" font-size="10" fill="#bdc3c7" text-anchor="middle">Old Breakeven ($2,800)</text>
  </svg>
</div>

---

## 4. The Rescue Rope Strategy

1.  **Accelerated Recovery:** You reach your goal with half the price movement.
2.  **Zero Out-of-Pocket:** Since the trade is a "Ratio Spread," it usually costs nothing to enter.
3.  **The Sacrifice:** In exchange for the fast recovery, you give up all upside potential above your new breakeven. If the stock rallies to $3,500, you won't participate. But for a "Repair" trade, getting back to zero is usually the priority.

---

## Chapter Summary

- **Stock Repair** = Long Stock + 1 Long ATM Call + 2 Short OTM Calls.
- **Goal:** Reach breakeven on a losing position twice as fast.
- **The Rescue Rope:** A zero-cost way to escape a losing trade.

Next Strategy: **Strategy 32 - The Alchemist - Synthetic Long Put.**
