# Option Strategies Strategy 26: The Mirror - Covered Put

The **Covered Put** is the bearish twin of the Covered Call. It is designed for traders who have a negative outlook on a stock and want to generate income while holding a short position. While a Covered Call is "The Landlord," the Covered Put is the **"Short Seller's Rent."**

---

## 1. The Setup

| Leg | Action | Description |
| :--- | :--- | :--- |
| **Leg 1** | **Short Stock** | Sell 100 shares of the underlying company (Borrowed). |
| **Leg 2** | **Sell 1 Put** | Sell 1 Put option (typically OTM) for every 100 shares short. |

**The Logic:** You are already short the stock. By selling a put option against it, you are saying: "I'm happy to buy back my short position if the stock hits this lower price, but until then, I'll take this cash premium."

---

## 2. The Payoff Math

Let's use **Nova Energy (NVE)** at $10,000.
- **Short Stock Price:** $10,000
- **Sell $9,500 Put (OTM):** Receive $150 premium
- **Net Credit Basis:** $10,000 + $150 = **$10,150**

### The Three Outcomes:
1.  **The Crash (Below $9,500):** You are forced to buy the stock back at $9,500 to close your short position.
    - **Profit:** ($10,000 - $9,500) + $150 = **$650**.
    - This is your **Maximum Profit**. You don't make any extra money if NVE falls to $0.
2.  **The Stagnation (At $10,000):** The stock doesn't move.
    - The put expires worthless. You keep the $150.
    - You've made a 1.5% return even though the stock didn't fall.
3.  **The Moonshot (Above $10,150):** The stock rallies.
    - **Maximum Risk:** **Unlimited**. If NVE rallies to $20,000, your short stock position will lose massive amounts of money, and the $150 premium won't save you.

---

## 3. Payoff Visualization

<div style="text-align: center; margin: 30px 0;">
  <svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
    <!-- X-Axis -->
    <line x1="50" y1="200" x2="550" y2="200" stroke="#34495e" stroke-width="2" />
    
    <!-- The Covered Put Line -->
    <!-- Upside risk (Slope) -->
    <line x1="100" y1="50" x2="350" y2="150" stroke="#e74c3c" stroke-width="4" />
    <!-- Downside (Flat) -->
    <line x1="350" y1="150" x2="550" y2="150" stroke="#27ae60" stroke-width="4" />

    <!-- Labels -->
    <circle cx="350" cy="150" r="6" fill="#2ecc71" />
    <text x="350" y="140" font-family="Arial" font-size="12" fill="#27ae60" text-anchor="middle" font-weight="bold">MAX PROFIT ($650)</text>
    
    <text x="350" y="220" font-family="Arial" font-size="10" fill="#34495e" text-anchor="middle">Strike Price ($9,500)</text>
    <text x="50" y="220" font-family="Arial" font-size="10" fill="#c0392b" text-anchor="start">UNLIMITED UPSIDE RISK</text>

    <circle cx="120" cy="50" r="4" fill="#e67e22" />
    <text x="130" y="45" font-family="Arial" font-size="10" fill="#d35400" text-anchor="start">Short Entry ($10,000)</text>
  </svg>
</div>

---

## 4. The Mirror Strategy

1.  **Yield on Shorting:** Short selling is expensive (due to borrow costs). The Covered Put helps offset these costs by generating immediate cash flow.
2.  **A Professional Play:** This is rarely used by retail traders but is a staple for hedge funds that maintain permanent short positions.
3.  **The Dangerous Part:** Because stocks can theoretically rise to infinity, this strategy has unlimited risk. Always use stop-losses on the short stock leg.

---

## Chapter Summary

- **Covered Put** = Short Stock + Short Put.
- **Goal:** Income from a bearish outlook.
- **The Mirror:** The inverse of the Covered Call, with much higher risk.

Next Strategy: **Strategy 27 - The Winged Guard - Long Condor.**
