# Option Strategies Strategy 30: The Super Landlord - Covered Combination

The **Covered Combination** (also known as a Covered Strangle) is the ultimate income-generation strategy for long-term stock holders. It is a "turbo-charged" version of the Covered Call. You are collecting premium from two different sources at the same time, effectively being paid twice for holding your shares.

---

## 1. The Setup

| Leg | Action | Description |
| :--- | :--- | :--- |
| **Leg 1** | **Long Stock** | Own 100 shares of the underlying company. |
| **Leg 2** | **Sell OTM Call** | Collect "rent" on your existing shares. |
| **Leg 3** | **Sell OTM Put** | Agree to buy **more** shares if the price falls. |

**The Logic:** You are bullish on the stock long-term. You want to generate income now (the Call) and you are happy to double your position if the stock dips (the Put).

---

## 2. The Payoff Math

Let's use **Zenith Power (ZNP)** at $7,500.
- **Own 100 Shares:** Current value $750,000
- **Sell 1x $7,700 Call:** Receive $80 premium
- **Sell 1x $7,300 Put:** Receive $80 premium
- **Total Initial Income:** **$160**

### The Three Outcomes:
1.  **The Sweet Spot (Between $7,300 and $7,700):**
    - Both options expire worthless.
    - **Total Profit:** $160 (Premium) + any dividends.
    - This is pure "rent" collected on your capital.
2.  **The Call-Away (Above $7,700):**
    - You must sell your shares at $7,700.
    - **Total Profit:** ($7,700 - $7,500) + $160 = **$360**.
    - You are forced to take a profit at your target.
3.  **The Double-Down (Below $7,300):**
    - You must buy another 100 shares at $7,300.
    - **Effective Purchase Price:** $7,300 - $160 = **$7,140**.
    - You now own 200 shares at a very attractive average cost.

---

## 3. Payoff Visualization

The Covered Combination creates a "Wide Plateau" of income.

<div style="text-align: center; margin: 30px 0;">
  <svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
    <!-- X-Axis -->
    <line x1="50" y1="200" x2="550" y2="200" stroke="#34495e" stroke-width="2" />
    
    <!-- The Covered Combination Line -->
    <!-- Downside Ownership (Steep because 200 shares) -->
    <line x1="50" y1="280" x2="250" y2="150" stroke="#3498db" stroke-width="4" />
    <!-- Profit Plateau -->
    <line x1="250" y1="150" x2="450" y2="150" stroke="#27ae60" stroke-width="6" />

    <!-- Labels -->
    <rect x="250" y="150" width="200" height="40" fill="#2ecc71" opacity="0.1" />
    <text x="350" y="140" font-family="Arial" font-size="12" fill="#27ae60" text-anchor="middle" font-weight="bold">MAX INCOME ($160)</text>
    
    <text x="250" y="220" font-family="Arial" font-size="10" fill="#34495e" text-anchor="middle">Put Strike ($7,300)</text>
    <text x="450" y="220" font-family="Arial" font-size="10" fill="#34495e" text-anchor="middle">Call Strike ($7,700)</text>

    <text x="120" y="240" font-family="Arial" font-size="10" fill="#2980b9" text-anchor="middle" transform="rotate(-30 120,240)">OWNERSHIP ZONE (200 SHS)</text>
  </svg>
</div>

---

## 4. The Super Landlord Strategy

1.  **Triple Income:** Dividends + Call Premium + Put Premium. This is the most capital-efficient way to hold high-quality stocks.
2.  **Cash Management:** You must have the cash ready (Strategy 25) to buy the second lot of shares if the stock falls.
3.  **Psychology:** This strategy works best for investors who *want* to own more shares. If you are afraid of the stock falling, don't use this.

---

## Chapter Summary

- **Covered Combination** = Long Stock + Short Put + Short Call.
- **Goal:** Aggressive income generation on core holdings.
- **The Super Landlord:** Collecting rent from both directions.

Next Strategy: **Strategy 31 - The Mechanic - Stock Repair.**
