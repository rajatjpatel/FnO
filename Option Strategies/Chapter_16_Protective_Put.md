# Option Strategies Strategy 16: The Seatbelt - Protective Put

The **Protective Put** (also known as a "Married Put") is the ultimate safety play for stock owners. It allows you to participate in 100% of the market's upside while establishing a hard "floor" beneath which your portfolio can never fall. It is literally an insurance policy for your wealth.

---

## 1. The Setup

| Leg | Action | Description |
| :--- | :--- | :--- |
| **Leg 1** | **Buy Stock** | Own 100 shares of the underlying company. |
| **Leg 2** | **Buy 1 Put** | Buy 1 Put option (typically ATM or slightly OTM). |

**The Logic:** You love the stock and expect it to grow long-term. However, you are worried about a sudden crash (e.g., an earnings miss, a market bubble, or geopolitical tension). By buying a put, you "lock in" a minimum selling price for your shares.

---

## 2. The Payoff Math

Let's use **Neo-Phone (NEO)** as our example.
- **Stock Purchase Price:** $1,500
- **Buy $1,450 Put (Insurance):** Pay $30 premium
- **Total Initial Cost:** $1,500 + $30 = **$1,530**

### The Three Outcomes:
1.  **The Moonshot (Above $1,530):** The stock rallies to $1,700.
    - Your put expires worthless (you lose the $30 premium).
    - **Profit:** $1,700 - $1,530 = **$170**.
    - You participate in all gains, minus the "insurance premium."
2.  **The Floor (Below $1,450):** The stock crashes to $1,000.
    - You exercise your put to sell at $1,450.
    - **Maximum Loss:** $1,530 (Cost) - $1,450 (Sale) = **$80**.
    - No matter how far NEO falls, you can never lose more than $80.
3.  **The Breakeven:** If NEO hits **$1,530**, you have neither made nor lost money.

---

## 3. Payoff Visualization

<div style="text-align: center; margin: 30px 0;">
  <svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
    <!-- X-Axis (Price) -->
    <line x1="50" y1="200" x2="550" y2="200" stroke="#34495e" stroke-width="2" />
    <text x="550" y="220" font-family="Arial" font-size="12" text-anchor="end">NEO Stock Price</text>

    <!-- The Payoff Line -->
    <!-- Downside Floor -->
    <line x1="50" y1="250" x2="250" y2="250" stroke="#e74c3c" stroke-width="4" />
    <!-- Upside Slope -->
    <line x1="250" y1="250" x2="500" y2="50" stroke="#2ecc71" stroke-width="4" />

    <!-- Labels -->
    <text x="150" y="240" font-family="Arial" font-size="11" fill="#c0392b" text-anchor="middle" font-weight="bold">THE FLOOR (MAX LOSS $80)</text>
    
    <circle cx="250" cy="250" r="6" fill="#34495e" />
    <text x="250" y="270" font-family="Arial" font-size="10" fill="#34495e" text-anchor="middle">Put Strike ($1,450)</text>
    
    <text x="450" y="80" font-family="Arial" font-size="12" fill="#27ae60" text-anchor="middle">UNLIMITED UPSIDE</text>

    <circle cx="330" cy="200" r="4" fill="#f1c40f" />
    <text x="340" y="195" font-family="Arial" font-size="10" fill="#f39c12" text-anchor="start">B.E.P $1,530</text>
  </svg>
</div>

---

## 4. The Seatbelt Metaphor

1.  **Safety vs Cost:** A seatbelt is slightly uncomfortable (the $30 premium), but you are glad you have it when the car hits a wall.
2.  **Peace of Mind:** You can hold your stocks through high-volatility events (like earnings) without checking the ticker every 5 minutes.
3.  **The "Hidden" Cost:** If you buy protection every month, the "insurance premiums" will eventually eat into your long-term returns. Use it only when the road looks bumpy.

---

## Chapter Summary

- **Protective Put** = Long Stock + Long Put.
- **Goal:** Unlimited upside with a guaranteed floor.
- **The Seatbelt:** Buckle up for safety in volatile markets.

Next Strategy: **Strategy 17 - The Collar Strategy.**
