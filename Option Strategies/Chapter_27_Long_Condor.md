# Option Strategies Strategy 27: The Great Wall - The Long Condor

The **Long Condor** is the more relaxed cousin of the Butterfly. While the Butterfly requires surgical precision to hit a single "Pin" price, the Condor gives you a wide range—a "Great Wall"—of maximum profit. It is the perfect strategy for a stock that is stuck in a trading range.

---

## 1. The Setup (Long Call Condor)

The Condor uses four different strike prices with equal distance between them (e.g., $100 apart).

| Leg | Action | Strike | Ratio |
| :--- | :--- | :--- | :--- |
| **Leg 1 (Wing)** | **Buy 1 Call** | Lowest (A) | 1 |
| **Leg 2 (Body)** | **Sell 1 Call** | Middle-Low (B) | 1 |
| **Leg 3 (Body)** | **Sell 1 Call** | Middle-High (C) | 1 |
| **Leg 4 (Wing)** | **Buy 1 Call** | Highest (D) | 1 |

**The Logic:** You are creating a profit zone between Strike B and Strike C. Any price in this "Body" range results in the maximum payoff at expiration.

---

## 2. The Payoff Math

Let's use **Zenith Power (ZNP)** at $7,500.
- **Strike A ($7,300):** Buy 1 Call for $250
- **Strike B ($7,400):** Sell 1 Call for $170
- **Strike C ($7,600):** Sell 1 Call for $60
- **Strike D ($7,700):** Buy 1 Call for $20
- **Net Debit (Max Risk):** ($250 + $20) - ($170 + $60) = **$40**

### The Three Outcomes:
1.  **The Great Wall (Between $7,400 and $7,600):**
    - Your spread value is maximized.
    - **Max Profit:** (Strike B - Strike A) - Net Debit = $100 - $40 = **$60**.
2.  **The Outskirts (Above $7,700 or Below $7,300):**
    - The options cancel each other out.
    - **Max Loss:** Your initial **$40** investment.
3.  **The Slopes:** If the stock is between A-B or C-D, your profit fluctuates between $0 and $60.

---

## 3. Payoff Visualization

The Condor creates a "Trapezoid" or "Great Wall" payoff.

<div style="text-align: center; margin: 30px 0;">
  <svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
    <!-- X-Axis -->
    <line x1="50" y1="250" x2="550" y2="250" stroke="#34495e" stroke-width="2" />
    
    <!-- The Condor Line -->
    <polyline points="50,280 150,280 250,100 350,100 450,280 550,280" fill="none" stroke="#2980b9" stroke-width="4" />

    <!-- Labels -->
    <rect x="250" y="100" width="100" height="5" fill="#2ecc71" />
    <text x="300" y="80" font-family="Arial" font-size="12" fill="#27ae60" text-anchor="middle" font-weight="bold">THE GREAT WALL (MAX PROFIT)</text>
    
    <text x="150" y="270" font-family="Arial" font-size="10" fill="#34495e" text-anchor="middle">Strike A</text>
    <text x="250" y="220" font-family="Arial" font-size="10" fill="#34495e" text-anchor="middle">Strike B</text>
    <text x="350" y="220" font-family="Arial" font-size="10" fill="#34495e" text-anchor="middle">Strike C</text>
    <text x="450" y="270" font-family="Arial" font-size="10" fill="#34495e" text-anchor="middle">Strike D</text>

    <text x="100" y="270" font-family="Arial" font-size="11" fill="#c0392b" text-anchor="middle">Max Loss: $40</text>
  </svg>
</div>

---

## 4. The Great Wall Strategy

1.  **Probability vs Precision:** A Butterfly is a lottery ticket; a Condor is a calculated bet. By widening the "Body," you significantly increase your odds of winning.
2.  **Low IV Play:** Buy this when the stock is quiet and IV is cheap. If the stock stays in your "Wall," time decay will work in your favor.
3.  **Risk Management:** Your loss is strictly capped at $40. You can never lose more than you invested, making this a safe strategy for smaller accounts.

---

## Chapter Summary

- **Long Condor** = 1 Long Wing + 2 Short Body (Different Strikes) + 1 Long Wing.
- **Goal:** Profit from a range-bound market with a wider safety margin.
- **The Great Wall:** A fortress of profit in a quiet market.

Next Strategy: **Strategy 28 - The Inversion - Short Butterfly.**
