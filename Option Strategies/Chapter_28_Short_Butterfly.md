# Option Strategies Strategy 28: The Valley - The Short Butterfly

The **Short Butterfly** is the exact inverse of the Long Butterfly. While the Long version wants the stock to be pinned to a single price, the Short version wants the stock to **explode** in either direction. It is the limited-risk version of a Straddle, designed for traders who expect a massive move but want to keep their potential losses small.

---

## 1. The Setup (Short Call Butterfly)

| Leg | Action | Strike | Ratio |
| :--- | :--- | :--- | :--- |
| **Leg 1 (Wing)** | **Sell 1 Call** | Lower Strike (A) | 1 |
| **Leg 2 (Body)** | **Buy 2 Calls** | Middle Strike (B) | 2 |
| **Leg 3 (Wing)** | **Sell 1 Call** | Upper Strike (C) | 1 |

**The Logic:** You receive a **Net Credit** when you enter this trade. You want the stock to move so far that both spreads either expire worthless or are both fully in-the-money.

---

## 2. The Payoff Math

Let's use **Zenith Power (ZNP)** at $7,500.
- **Lower Strike (7,400):** Sell 1 Call for $140
- **Middle Strike (7,500):** Buy 2 Calls for $75 each (Pay $150)
- **Upper Strike (7,600):** Sell 1 Call for $30
- **Net Credit (Max Profit):** ($140 + $30) - $150 = **$20**

### The Three Outcomes:
1.  **The Valley Floor (Expiry at $7,500):**
    - The 7,400 Call you sold is worth $100.
    - The 7,500 and 7,600 Calls expire worthless.
    - **Max Loss:** $100 (Payout) - $20 (Credit) = **$80**.
2.  **The Mountain Peaks (Above $7,600 or Below $7,400):**
    - The options cancel each other out.
    - **Max Profit:** You keep the initial **$20 Credit**.
3.  **The Slopes:** Your profit fluctuates between -$80 and +$20 as you move toward the center.

---

## 3. Payoff Visualization

The Short Butterfly creates a "Valley" payoff.

<div style="text-align: center; margin: 30px 0;">
  <svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
    <!-- X-Axis -->
    <line x1="50" y1="100" x2="550" y2="100" stroke="#34495e" stroke-width="2" />
    
    <!-- The Short Butterfly Line -->
    <polyline points="50,70 150,70 300,250 450,70 550,70" fill="none" stroke="#e74c3c" stroke-width="4" />

    <!-- Labels -->
    <circle cx="300" cy="250" r="6" fill="#c0392b" />
    <text x="300" y="275" font-family="Arial" font-size="12" fill="#c0392b" text-anchor="middle" font-weight="bold">THE VALLEY FLOOR (MAX LOSS $80)</text>
    
    <text x="150" y="55" font-family="Arial" font-size="11" fill="#27ae60" text-anchor="middle">MAX PROFIT ($20)</text>
    <text x="450" y="55" font-family="Arial" font-size="11" fill="#27ae60" text-anchor="middle">MAX PROFIT ($20)</text>

    <text x="300" y="90" font-family="Arial" font-size="10" fill="#34495e" text-anchor="middle">7,500 Strike</text>
  </svg>
</div>

---

## 4. The Valley Strategy

1.  **Betting on Chaos:** This is a "Long Volatility" play. You don't care if the news is good or bad, you just want the stock to **move**.
2.  **Limited Risk:** Unlike a naked Straddle, you can never lose more than $80. This makes it an ideal strategy for highly speculative earnings plays.
3.  **High Probability of Small Profit:** In many market conditions, the stock will move at least a little bit. By collecting the $20 upfront, you are betting that the "Status Quo" at 7,500 will be broken.

---

## Chapter Summary

- **Short Butterfly** = 1 Short Wing + 2 Long Body + 1 Short Wing.
- **Goal:** Profit from a breakout in either direction.
- **The Valley:** Limited risk, high probability of small gains, but watch out for the floor.

Next Strategy: **Strategy 29 - The Wingless - Long Iron Butterfly.**
