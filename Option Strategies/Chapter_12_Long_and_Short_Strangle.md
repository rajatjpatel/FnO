# Option Strategies Strategy 12: The Wide Net - The Long & Short Strangle

The **Strangle** is the refined version of the Straddle. It is designed for the trader who wants the same "direction-neutral" benefits but at a much lower cost. If the Straddle is a sniper rifle, the Strangle is a shotgun—it covers more ground but needs a bigger target.

---

## 1. The Setup

| Strategy | Action | Strike | Cost |
| :--- | :--- | :--- | :--- |
| **Long Strangle** | **Buy OTM Call + Buy OTM Put** | Out-of-the-Money | **Cheap** |
| **Short Strangle** | **Sell OTM Call + Sell OTM Put** | Out-of-the-Money | **Credit** |

**The Logic:** Instead of buying/selling at the current price (ATM), you go further out. This makes the trade cheaper to enter but requires the market to move *much further* to become profitable.

---

## 2. The Payoff Math

Let's use **Galaxy Tech (GTK)** at $7,921.
- **OTM Put Strike:** $7,700 (Premium: $28)
- **OTM Call Strike:** $8,100 (Premium: $32)
- **Net Premium (Debit/Credit):** $28 + $32 = **$60**

### The Thresholds (Long):
- **Max Loss:** $60 (If GTK stays between $7,700 and $8,100).
- **Upper Breakeven:** $8,100 + $60 = **$8,160**.
- **Lower Breakeven:** $7,700 - $60 = **$7,640**.
- **Profit:** Unlimited outside these bounds.

---

## 3. Payoff Visualization (Short Strangle)

The Short Strangle is a favorite of institutional "Yield" traders because it creates a massive **Safety Zone**.

<div style="text-align: center; margin: 30px 0;">
  <svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
    <!-- X-Axis (Price) -->
    <line x1="50" y1="200" x2="550" y2="200" stroke="#34495e" stroke-width="2" />
    
    <!-- The Payoff "Plateau" -->
    <polyline points="100,280 200,80 400,80 500,280" fill="none" stroke="#2980b9" stroke-width="4" />

    <!-- Labels -->
    <rect x="200" y="80" width="200" height="120" fill="#2ecc71" opacity="0.1" />
    <text x="300" y="70" font-family="Arial" font-size="12" fill="#27ae60" text-anchor="middle" font-weight="bold">THE SAFETY ZONE (MAX PROFIT $60)</text>
    
    <text x="200" y="220" font-family="Arial" font-size="10" fill="#2c3e50" text-anchor="middle">7,700 Strike</text>
    <text x="400" y="220" font-family="Arial" font-size="10" fill="#2c3e50" text-anchor="middle">8,100 Strike</text>

    <circle cx="140" cy="200" r="4" fill="#f1c40f" />
    <text x="130" y="195" font-family="Arial" font-size="10" fill="#f39c12" text-anchor="end">B.E.P 7,640</text>

    <circle cx="460" cy="200" r="4" fill="#f1c40f" />
    <text x="470" y="195" font-family="Arial" font-size="10" fill="#f39c12" text-anchor="start">B.E.P 8,160</text>
  </svg>
</div>

---

## 4. Why use a Strangle?

1.  **Lower Entry Cost (Long):** You can play for volatility without paying the high price of ATM options.
2.  **Higher Probability of Success (Short):** The market has a much wider range to move in before you start losing money. 
3.  **Theta Friendly:** Short Strangles are very profitable in quiet, drifting markets. Time decay works across the entire "Plateau."

---

## Chapter Summary

- **Strangle** = Use OTM Options instead of ATM.
- **Long Strangle:** A cheap bet on chaos.
- **Short Strangle:** A high-probability bet on calm.

Next Strategy: **Strategy 13 - Max Pain & PCR Ratio.**
