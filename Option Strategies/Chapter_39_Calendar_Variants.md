# Option Strategies Strategy 39: The Hourglass - Calendar Variants

The **Calendar Spread** (Strategy 21) is a bet on the speed of time. While most traders use Calls, the **Put Calendar** and the **Short Calendar** offer unique ways to play time decay and volatility cycles. These are the "Hourglass" strategies of the professional market.

---

## 1. The Setup (Long Put Calendar)

| Leg | Action | Expiration | Strike |
| :--- | :--- | :--- | :--- |
| **Leg 1** | **Sell Put** | Short-Term (7-30 Days) | At-the-Money (ATM) |
| **Leg 2** | **Buy Put** | Long-Term (60-90 Days) | At-the-Money (ATM) |

**The Logic:** You are bearish to neutral. You want the stock to sit at the strike price so the short-term put decays to zero, while the long-term put (the insurance) retains its value.

---

## 2. The Inversion: The Short Calendar

A **Short Calendar** is the opposite. You buy the short-term option and sell the long-term option.

- **Outlook:** You expect a massive spike in volatility *right now* and a collapse in volatility later.
- **The Trade:** You win if the stock moves **away** from the strike price quickly.
- **The Risk:** This is a "Negative Theta" trade. You are fighting against time every single day.

---

## 3. Payoff Visualization

The Calendar Spread payoff remains a "Bell Curve," but its height is determined by the "Vega" (Volatility) of the long-term option.

<div style="text-align: center; margin: 30px 0;">
  <svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
    <!-- X-Axis -->
    <line x1="50" y1="250" x2="550" y2="250" stroke="#34495e" stroke-width="2" />
    
    <!-- The Bell Curve -->
    <path d="M 100 280 Q 300 0 500 280" fill="none" stroke="#e67e22" stroke-width="4" />

    <!-- Labels -->
    <circle cx="300" cy="75" r="6" fill="#f39c12" />
    <text x="300" y="60" font-family="Arial" font-size="12" fill="#e67e22" text-anchor="middle" font-weight="bold">THETA PEAK (MAX PROFIT)</text>
    
    <text x="300" y="270" font-family="Arial" font-size="10" fill="#34495e" text-anchor="middle">Strike Price</text>
    
    <text x="50" y="220" font-family="Arial" font-size="11" fill="#c0392b" text-anchor="start">LOSS ZONE</text>
    <text x="550" y="220" font-family="Arial" font-size="11" fill="#c0392b" text-anchor="end">LOSS ZONE</text>
  </svg>
</div>

---

## 4. The Hourglass Strategy

1.  **Low IV Entry:** You want to enter a Long Calendar when volatility is **Low**. When volatility rises, the "Slow Clock" (Long-term) option gains more value than the "Fast Clock" (Short-term) option, boosting your profit.
2.  **The "Horizontal" Hedge:** Calendars are often used as hedges for vertical spreads. They allow you to "buy time" for your directional view to play out.
3.  **Put vs Call:** Put Calendars often have a slightly different "skew" than Call Calendars, making them better for stocks with a bearish bias or high fear levels.

---

## Chapter Summary

- **Long Put Calendar** = Sell Short Put + Buy Long Put.
- **Goal:** Profit from time decay in a neutral-to-bearish market.
- **The Hourglass:** Managing the flow of time between two different clocks.

Next Strategy: **Strategy 40 - The Directional Bias - Strap & Strip.**
