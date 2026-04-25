# Option Strategies Strategy 34: The Parachute - Protective Call

The **Protective Call** (also known as a Married Call) is the ultimate safety net for short sellers. If you have the "Guts" to short a stock but are terrified of a sudden "Short Squeeze" or a gap-up, this strategy is your insurance policy. It allows you to profit from a falling stock while establishing a hard "ceiling" on your potential losses.

---

## 1. The Setup

| Leg | Action | Description |
| :--- | :--- | :--- |
| **Leg 1** | **Short Stock** | Sell 100 shares of the underlying company (Borrowed). |
| **Leg 2** | **Buy 1 Call** | Buy 1 Call option (typically ATM or slightly OTM). |

**The Logic:** You are bearish. You want the stock to crash. However, if the stock rallies, you can "exercise" your call to buy back the shares at a fixed price, effectively ending your short position without further loss.

---

## 2. The Payoff Math

Let's use **Apex Auto (AAU)** at $2,500.
- **Short Entry Price:** $2,500
- **Buy $2,550 Call (Insurance):** Pay $50 premium
- **Total Initial Position Basis:** $2,500 - $50 = **$2,450**

### The Three Outcomes:
1.  **The Crash (Below $2,450):** The stock falls to $2,000.
    - Your call expires worthless.
    - **Profit:** $2,450 - $2,000 = **$450**.
    - You participate in almost all of the downside profit.
2.  **The Squeeze (Above $2,550):** The stock sky-rockets to $3,000.
    - You exercise your call to buy back the shares at $2,550.
    - **Maximum Loss:** $2,550 - $2,450 = **$100**.
    - No matter how high AAU rises, your loss is capped at $100.
3.  **The Breakeven:** If AAU hits **$2,450**, you have neither made nor lost money.

---

## 3. Payoff Visualization

<div style="text-align: center; margin: 30px 0;">
  <svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
    <!-- X-Axis (Price) -->
    <line x1="50" y1="200" x2="550" y2="200" stroke="#34495e" stroke-width="2" />
    <text x="550" y="220" font-family="Arial" font-size="12" text-anchor="end">AAU Stock Price</text>

    <!-- The Payoff Line -->
    <!-- Downside Profit -->
    <line x1="50" y1="50" x2="300" y2="250" stroke="#2ecc71" stroke-width="4" />
    <!-- Upside Ceiling -->
    <line x1="300" y1="250" x2="550" y2="250" stroke="#e74c3c" stroke-width="4" />

    <!-- Labels -->
    <text x="425" y="240" font-family="Arial" font-size="11" fill="#c0392b" text-anchor="middle" font-weight="bold">THE CEILING (MAX LOSS $100)</text>
    
    <circle cx="300" cy="250" r="6" fill="#34495e" />
    <text x="300" y="270" font-family="Arial" font-size="10" fill="#34495e" text-anchor="middle">Call Strike ($2,550)</text>
    
    <text x="150" y="80" font-family="Arial" font-size="12" fill="#27ae60" text-anchor="middle">UNLIMITED PROFIT (DOWNSIDE)</text>

    <circle cx="220" cy="200" r="4" fill="#f1c40f" />
    <text x="210" y="195" font-family="Arial" font-size="10" fill="#f39c12" text-anchor="end">B.E.P $2,450</text>
  </svg>
</div>

---

## 4. The Parachute Strategy

1.  **Safety First:** Short selling is the most dangerous game in finance. The Protective Call turns a high-risk trade into a "Defined Risk" trade.
2.  **Peace of Mind:** You can hold your short position through earnings or high-volatility news without worrying about being "wiped out" by a 20% gap-up.
3.  **The Premium Cost:** Like any insurance, the call premium is a cost. It will slightly reduce your total profit in a crash, but it's a small price to pay for survival.

---

## Chapter Summary

- **Protective Call** = Short Stock + Long Call.
- **Goal:** Unlimited downside profit with a guaranteed ceiling on losses.
- **The Parachute:** Deploying safety for the short-selling bear.

Next Strategy: **Strategy 35 - The Lock - Box Spread.**
