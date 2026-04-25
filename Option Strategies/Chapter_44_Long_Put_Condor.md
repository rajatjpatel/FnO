# Option Strategies Strategy 44: The Shadow Wall - Long Put Condor

While the Call Condor is the "Great Wall," the **Long Put Condor** is its "Shadow" equivalent. It is used to capture a range-bound market using the Put side of the option chain. It is particularly effective in high-fear environments where the "Put Skew" makes this structure cheaper to build than the call version.

---

## 1. The Setup

| Leg | Action | Strike | Ratio |
| :--- | :--- | :--- | :--- |
| **Leg 1 (Wing)** | **Buy 1 Put** | Lowest (A) | 1 |
| **Leg 2 (Body)** | **Sell 1 Put** | Middle-Low (B) | 1 |
| **Leg 3 (Body)** | **Sell 1 Put** | Middle-High (C) | 1 |
| **Leg 4 (Wing)** | **Buy 1 Put** | Highest (D) | 1 |

**The Logic:** You are creating a profit zone between the two middle strikes (B and C). This is a **Net Debit** trade. You are paying a small amount to secure a wider profit range.

---

## 2. The Payoff Math

Let's use **Zenith Power (ZNP)** at $7,500.
- **Strike A ($7,300):** Buy 1 Put for $20
- **Strike B ($7,400):** Sell 1 Put for $60
- **Strike C ($7,600):** Sell 1 Put for $170
- **Strike D ($7,700):** Buy 1 Put for $250
- **Net Debit:** ($250 + $20) - ($170 + $60) = **$40**

### The Three Outcomes:
1.  **The Shadow Wall (Between $7,400 and $7,600):**
    - Your spread is maximized.
    - **Max Profit:** (Strike D - Strike C) - Net Debit = $100 - $40 = **$60**.
2.  **The Light (Above $7,700 or Below $7,300):**
    - All options cancel out.
    - **Max Loss:** Your initial **$40**.
3.  **The Breakevens:** $7,340 and $7,660.

---

## 3. Payoff Visualization

The Put Condor creates the same "Trapezoid" shape as the Call version.

<div style="text-align: center; margin: 30px 0;">
  <svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
    <!-- X-Axis -->
    <line x1="50" y1="250" x2="550" y2="250" stroke="#34495e" stroke-width="2" />
    
    <!-- The Condor Line -->
    <polyline points="50,280 150,280 250,100 350,100 450,280 550,280" fill="none" stroke="#2c3e50" stroke-width="4" />

    <!-- Labels -->
    <rect x="250" y="100" width="100" height="5" fill="#3498db" />
    <text x="300" y="80" font-family="Arial" font-size="12" fill="#2980b9" text-anchor="middle" font-weight="bold">THE SHADOW WALL (MAX PROFIT)</text>
    
    <text x="300" y="270" font-family="Arial" font-size="10" fill="#34495e" text-anchor="middle">Strike B-C Range</text>
  </svg>
</div>

---

## 4. The Shadow Wall Strategy

1.  **Volatility Defense:** Put Condors are remarkably stable against small spikes in volatility. Because you are both long and short puts, the "Vega" exposure is largely neutralized.
2.  **Bearish Bias:** While it is a neutral strategy, traders often use Put Condors when they think the stock might drift lower but won't "crash" through the floor.
3.  **Low Margin:** Because the risk is defined and capped at $40, the margin requirements for this 4-legged trade are very low.

---

## Chapter Summary

- **Long Put Condor** = 1 Long OTM Put + 2 Short ATM/OTM Puts + 1 Long ITM Put.
- **Goal:** Profit from stability using the Put chain.
- **The Shadow Wall:** A resilient barrier of profit.

Next Strategy: **Strategy 45 - The Inversion - Short Put Butterfly.**
