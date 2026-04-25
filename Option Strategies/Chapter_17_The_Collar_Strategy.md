# Option Strategies Strategy 17: The Padded Cell - The Collar Strategy

The **Collar Strategy** is the "Zero-Cost" insurance policy. It is for the investor who wants the protection of a Put but doesn't want to pay the premium for it. By selling a Call option, you "finance" your protection, effectively creating a safe range for your stock.

---

## 1. The Setup

| Leg | Action | Description |
| :--- | :--- | :--- |
| **Leg 1** | **Buy Stock** | Own 100 shares of the underlying company. |
| **Leg 2** | **Buy OTM Put** | Downside Protection (The Floor). |
| **Leg 3** | **Sell OTM Call** | Upside Capping (The Financing). |

**The Logic:** You use the money collected from selling the "Upside" (Call) to pay for the "Downside Protection" (Put). If the premiums match, you have a **Zero-Cost Collar**.

---

## 2. The Payoff Math

Let's use **Apex Auto (AAU)** at $2,500.
- **Buy $2,400 Put:** Pay $40 premium
- **Sell $2,650 Call:** Receive $40 premium
- **Net Cost of Insurance:** $0 (Zero-Cost)

### The Three Outcomes:
1.  **The Ceiling (Above $2,650):** The stock explodes to $3,000.
    - You are forced to sell your shares at $2,650.
    - **Max Profit:** $2,650 - $2,500 = **$150**.
    - You miss the extra $350 of gain, but you've locked in a nice profit.
2.  **The Floor (Below $2,400):** The stock crashes to $2,000.
    - You exercise your put to sell at $2,400.
    - **Max Loss:** $2,500 - $2,400 = **$100**.
    - No matter how deep the crash, you only lose $100.
3.  **The Sweet Spot (Between $2,400 and $2,650):** Both options expire worthless. You own the shares and participate in the move within this range.

---

## 3. Payoff Visualization

<div style="text-align: center; margin: 30px 0;">
  <svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
    <!-- X-Axis -->
    <line x1="50" y1="200" x2="550" y2="200" stroke="#34495e" stroke-width="2" />
    
    <!-- The Collar Line -->
    <!-- Floor -->
    <line x1="50" y1="240" x2="200" y2="240" stroke="#e74c3c" stroke-width="4" />
    <!-- Slope -->
    <line x1="200" y1="240" x2="400" y2="100" stroke="#3498db" stroke-width="4" />
    <!-- Ceiling -->
    <line x1="400" y1="100" x2="550" y2="100" stroke="#27ae60" stroke-width="4" />

    <!-- Labels -->
    <text x="125" y="230" font-family="Arial" font-size="11" fill="#c0392b" text-anchor="middle" font-weight="bold">FLOOR ($2,400)</text>
    <text x="475" y="90" font-family="Arial" font-size="11" fill="#27ae60" text-anchor="middle" font-weight="bold">CEILING ($2,650)</text>
    
    <circle cx="300" cy="170" r="5" fill="#34495e" />
    <text x="310" y="175" font-family="Arial" font-size="10" fill="#34495e" text-anchor="start">Current Price ($2,500)</text>
  </svg>
</div>

---

## 4. The Padded Cell Metaphor

1.  **Safety Walls:** You are protected from falling (the Floor) but restricted from jumping too high (the Ceiling).
2.  **The "Free Lunch":** By selling the Call, you make the insurance free. It's the most responsible way to hedge a long-term position during uncertain times (like elections or earnings).
3.  **The Only Catch:** If the stock goes "to the moon," you will feel the regret of the capped ceiling. Collars are for **Conservation of Capital**, not for aggressive growth.

---

## Chapter Summary

- **Collar** = Long Stock + Long OTM Put + Short OTM Call.
- **Goal:** Protect gains at a near-zero cost.
- **The Padded Cell:** Total safety within a defined range.

Next Strategy: **Strategy 18 - Butterfly Strategy.**
