# Option Strategies Strategy 18: The Tent - The Butterfly Strategy

The **Butterfly Strategy** is the most precise income strategy in the options world. It is designed for the trader who believes the market will be "pinned" to a specific price by expiration. It offers a massive potential return on capital with very little money at risk.

---

## 1. The Setup (Long Call Butterfly)

The Butterfly is a four-legged strategy using three different strike prices:

| Leg | Action | Strike | Ratio |
| :--- | :--- | :--- | :--- |
| **Leg 1 (Wing)** | **Buy 1 Call** | Lower Strike (A) | 1 |
| **Leg 2 (Body)** | **Sell 2 Calls** | Middle Strike (B) | 2 |
| **Leg 3 (Wing)** | **Buy 1 Call** | Upper Strike (C) | 1 |

**The Logic:** You are combining a **Bull Call Spread** and a **Bear Call Spread**. The "Peak" of the profit occurs exactly at the Middle Strike (B).

---

## 2. The Payoff Math

Let's use **Zenith Power (ZNP)** at $7,500.
- **Lower Strike (7,400):** Buy 1 Call for $140
- **Middle Strike (7,500):** Sell 2 Calls for $75 each (Receive $150)
- **Upper Strike (7,600):** Buy 1 Call for $30
- **Net Debit (Max Risk):** ($140 + $30) - $150 = **$20**

### The Three Outcomes:
1.  **The Bullseye (Expiry at $7,500):**
    - The 7,400 Call is worth $100.
    - The 7,500 and 7,600 Calls expire worthless.
    - **Max Profit:** $100 (Value) - $20 (Cost) = **$80**.
    - **ROI:** 400% on your $20 risk!
2.  **The Breakout (Above $7,600 or Below $7,400):**
    - All spreads cancel each other out.
    - **Max Loss:** $20 (The premium you paid).
3.  **The Breakevens:**
    - **Lower BEP:** $7,400 + $20 = **$7,420**.
    - **Upper BEP:** $7,600 - $20 = **$7,580**.

---

## 3. Payoff Visualization

The Butterfly creates a sharp "Tent" or "Mountain Peak" profit zone.

<div style="text-align: center; margin: 30px 0;">
  <svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
    <!-- X-Axis -->
    <line x1="50" y1="250" x2="550" y2="250" stroke="#34495e" stroke-width="2" />
    
    <!-- The Butterfly Line -->
    <polyline points="50,250 150,250 300,50 450,250 550,250" fill="none" stroke="#9b59b6" stroke-width="4" />

    <!-- Labels -->
    <circle cx="300" cy="50" r="6" fill="#27ae60" />
    <text x="300" y="35" font-family="Arial" font-size="12" fill="#27ae60" text-anchor="middle" font-weight="bold">MAX PROFIT ($80) @ 7,500</text>
    
    <text x="150" y="270" font-family="Arial" font-size="10" fill="#34495e" text-anchor="middle">7,400 Strike</text>
    <text x="450" y="270" font-family="Arial" font-size="10" fill="#34495e" text-anchor="middle">7,600 Strike</text>

    <text x="100" y="240" font-family="Arial" font-size="11" fill="#c0392b" text-anchor="middle">Max Loss: $20</text>
  </svg>
</div>

---

## 4. The Tent Metaphor

1.  **The Center Pole:** Your short options are the center pole. If the market closes right on the pole, you win the maximum amount.
2.  **The Stakes:** Your long options are the stakes in the ground. They prevent the tent from flying away, meaning your risk is strictly limited to the small amount you paid.
3.  **The PIN Risk:** This is a "pinning" strategy. It is very hard to hit the exact peak, but since the cost is so low ($20), you can afford to be wrong many times for one big win.

---

## Chapter Summary

- **Butterfly** = 1 Long ITM Call + 2 Short ATM Calls + 1 Long OTM Call.
- **Goal:** Profit from a range-bound market with high precision.
- **The Tent:** Massive ROI potential with minimal capital at risk.

Next Strategy: **Congratulations! You have completed the Options Strategy Series.**
