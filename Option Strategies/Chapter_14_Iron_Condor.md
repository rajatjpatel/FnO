# Option Strategies Strategy 14: The Fortress - The Iron Condor

The **Iron Condor** is widely considered the king of income-generating strategies. It is essentially a Short Strangle with "insurance" on both ends. It allows you to profit from a sideways market while keeping your maximum risk strictly defined and your capital requirements low.

---

## 1. The Setup

The Iron Condor consists of four separate legs:

| Leg | Action | Description |
| :--- | :--- | :--- |
| **Leg 1** | **Sell OTM Put** | Collects premium, defines the lower profit wall. |
| **Leg 2** | **Buy Further OTM Put** | Protects against a market crash. |
| **Leg 3** | **Sell OTM Call** | Collects premium, defines the upper profit wall. |
| **Leg 4** | **Buy Further OTM Call** | Protects against a market rally. |

**The Logic:** You are selling a range. As long as the stock stays between your two short strikes, you keep the net premium. If the stock breaks out, your long options kick in to cap your losses.

---

## 2. The Payoff Math

Let's use **Nova Energy (NVE)** at $9,972.
- **Sell $9,800 Put:** Receive $165
- **Buy $9,600 Put:** Pay $105
- **Sell $10,100 Call:** Receive $145
- **Buy $10,300 Call:** Pay $77

**Total Net Credit (Max Profit):** ($165 + $145) - ($105 + $77) = **$128**

### The Thresholds:
- **Max Profit:** $128 (If NVE stays between $9,800 and $10,100).
- **Spread:** $200 (Difference between short and long strikes).
- **Max Loss:** $200 - $128 = **$72**.
- **ROI Advantage:** While a Strangle might require $150,000 in margin, an Iron Condor only requires about $45,000, making the return on capital much higher.

---

## 3. Payoff Visualization

The Iron Condor creates a "Table-top" profit zone.

<div style="text-align: center; margin: 30px 0;">
  <svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
    <!-- X-Axis -->
    <line x1="50" y1="200" x2="550" y2="200" stroke="#34495e" stroke-width="2" />
    
    <!-- The Condor Line -->
    <polyline points="50,260 150,260 250,80 350,80 450,260 550,260" fill="none" stroke="#2c3e50" stroke-width="4" />

    <!-- Labels -->
    <rect x="250" y="80" width="100" height="120" fill="#2ecc71" opacity="0.2" />
    <text x="300" y="65" font-family="Arial" font-size="12" fill="#27ae60" text-anchor="middle" font-weight="bold">PROFIT ZONE ($128)</text>
    
    <text x="150" y="275" font-family="Arial" font-size="10" fill="#e74c3c" text-anchor="middle">Long Put (9,600)</text>
    <text x="250" y="220" font-family="Arial" font-size="10" fill="#34495e" text-anchor="middle">Short Put (9,800)</text>
    <text x="350" y="220" font-family="Arial" font-size="10" fill="#34495e" text-anchor="middle">Short Call (10,100)</text>
    <text x="450" y="275" font-family="Arial" font-size="10" fill="#e74c3c" text-anchor="middle">Long Call (10,300)</text>

    <text x="80" y="250" font-family="Arial" font-size="11" fill="#c0392b" text-anchor="middle">Max Loss: $72</text>
    <text x="520" y="250" font-family="Arial" font-size="11" fill="#c0392b" text-anchor="middle">Max Loss: $72</text>
  </svg>
</div>

---

## 4. The Fortress Strategy

1.  **Safety First:** The primary reason to use an Iron Condor over a Strangle is **Sleep Quality**. You know exactly how much you can lose.
2.  **Margin Efficiency:** Because the risk is capped, brokers allow you to trade this with much less capital.
3.  **The "Sweet Spot":** You want to enter this when IV is high (selling expensive premiums) and hope for a quiet month where the stock drifts sideways.

---

## Chapter Summary

- **Iron Condor** = 1 Bull Put Spread + 1 Bear Call Spread.
- **Defined Risk:** Losses are capped on both sides.
- **The Fortress:** A range-bound play with built-in protection.

Next Strategy: **Strategy 15 - Covered Call.**
