# Option Strategies Strategy 4: The Slingshot - Call Ratio Back Spread

The **Call Ratio Back Spread** is one of the most interesting "unfair" trades in the market. It offers unlimited upside, a small profit if you are totally wrong (market goes down), and only a predefined loss if the stock gets stuck in a specific range.

---

## 1. The Setup

| Leg | Action | Strike | Ratio |
| :--- | :--- | :--- | :--- |
| **Leg 1** | **Sell 1 Call** | ITM (In-the-Money) | 1 |
| **Leg 2** | **Buy 2 Calls** | OTM (Out-of-the-Money) | 2 |

**The Logic:** You expect a massive breakout. By selling one expensive ITM call, you collect enough "rent" to buy two cheaper OTM calls. If the breakout happens, your two long calls will outrun your one short call.

---

## 2. The Payoff Math

Let's use **Galaxy Tech (GTK)** as our example.
- **Spot Price:** $7,743
- **Sell $7,600 Call (ITM):** Receive $201
- **Buy 2x $7,800 Calls (OTM):** Pay $78 each ($156 total)
- **Net Credit Received:** $201 - $156 = **$45**

### The Three Outcomes:
1.  **Market Crashes (Below $7,600):** All options expire worthless. You keep the **$45 net credit**. (Profit even when wrong!)
2.  **Market Explodes (Above $7,955):** Your two long calls generate profit faster than your one short call. **Unlimited Profit Potential.**
3.  **The Valley of Death (At $7,800):** This is the worst-case scenario. If GTK stops exactly at $7,800, you lose the most.
    - **Max Loss:** Spread ($200) - Net Credit ($45) = **$155**.

---

## 3. Payoff Visualization

<div style="text-align: center; margin: 30px 0;">
  <svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
    <!-- X-Axis (Price) -->
    <line x1="50" y1="200" x2="550" y2="200" stroke="#34495e" stroke-width="2" />
    <text x="550" y="220" font-family="Arial" font-size="12" text-anchor="end">GTK Price at Expiry</text>

    <!-- Y-Axis (P&L) -->
    <line x1="50" y1="50" x2="50" y2="250" stroke="#34495e" stroke-width="2" />
    <text x="40" y="50" font-family="Arial" font-size="12" transform="rotate(-90 40,50)" text-anchor="end">Profit / Loss</text>

    <!-- The Payoff Line -->
    <!-- Flat Credit (below 7600) -->
    <line x1="50" y1="180" x2="150" y2="180" stroke="#27ae60" stroke-width="3" />
    <!-- Dip to Max Loss (7600 to 7800) -->
    <line x1="150" y1="180" x2="350" y2="240" stroke="#e74c3c" stroke-width="3" />
    <!-- Explosive Profit (above 7800) -->
    <path d="M 350 240 L 450 150 L 550 50" stroke="#2ecc71" stroke-width="3" fill="none" />

    <!-- Labels -->
    <text x="150" y="170" font-family="Arial" font-size="10" fill="#27ae60" text-anchor="middle">7,600 Strike (Sell)</text>
    <text x="350" y="260" font-family="Arial" font-size="10" fill="#e74c3c" text-anchor="middle">7,800 Strike (Buy 2x)</text>
    
    <text x="100" y="195" font-family="Arial" font-size="10" fill="#27ae60" text-anchor="middle">Small Credit ($45)</text>
    <text x="480" y="80" font-family="Arial" font-size="10" fill="#2ecc71" text-anchor="middle">Unlimited Upside</text>
    <text x="350" y="225" font-family="Arial" font-size="10" fill="#e74c3c" text-anchor="middle">Max Loss: $155</text>
  </svg>
</div>

---

## 4. The Volatility Factor

This is a **Volatility Play**.
- If Volatility **increases**, the value of your two long calls will inflate faster than your one short call. This strategy loves a market that is waking up from a nap.
- If Volatility **decreases**, the strategy will suffer (even if the price doesn't move).

---

## Chapter Summary

- **Call Ratio Back Spread** = Sell 1 ITM Call + Buy 2 OTM Calls.
- **The Slingshot:** You are betting on a massive breakout.
- **Safety Valve:** If the market collapses, you still keep a small net credit.
- **Risk:** Don't get stuck in the middle!

Next Strategy: **Strategy 5 - The Bear Call Ladder.**
