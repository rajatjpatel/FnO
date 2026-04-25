# Chapter 6 & 7: The Trade Planner - Mastering Margins & Expiry

In the previous chapters, we learned that Margins and Mark-to-Market (M2M) are the rules of the game. Now, we are going to learn how to play that game like a pro using the **Margin Calculator**—the ultimate planning tool for any futures trader.

Think of the Margin Calculator as your **GPS for trading**. Before you start your journey, you need to know exactly how much fuel (cash) you need, how long the trip will take, and where the potential roadblocks are.

---

## 1. Navigating the Expiry Cycle

In the regular stock market, you can buy shares and hold them forever. In the futures market, every contract has a "best before" date, known as the **Expiry**.

At any given moment, the Exchange allows you to trade three different versions of the same stock:
- **The Current Month (Near):** Expires on the last Thursday of the current month. This is where most traders "hang out" because it has the most action (liquidity).
- **The Mid Month:** Expires on the last Thursday of the next month.
- **The Far Month:** Expires on the last Thursday of the month after that.

### Meet Mega Motors (MMO)
Imagine it is **January 10th**. You want to trade **Mega Motors (MMO)**. You will see three choices on your screen:
1. MMO JAN Futures
2. MMO FEB Futures
3. MMO MAR Futures

**Pro Tip:** As time passes, the current month contract eventually expires. On the day MMO JAN expires, the FEB contract "graduates" to become the new Current Month, and a new APRIL contract is introduced at the back of the line. It’s a never-ending cycle!

---

## 2. The Rollover: Keeping the Dream Alive

What if you bought MMO JAN futures because you thought the price would hit $500, but the month is ending and the price is only at $480? You still believe it will hit $500 in February. 

You don't have to give up! You can perform a **Rollover**.
- **The Move:** You sell (close) your JAN contract and simultaneously buy the FEB contract.
- **The Result:** You have effectively "carried over" your position into the next month. You pay a small cost for this transition, but your trade remains alive.

---

## 3. Order Types: How Time Impacts Your Margin

The Exchange's Risk Management System (RMS) is like a security guard. The more information you give the guard, the less "suspicious" (risky) you look, and the less money they make you lock away.

### NRML (Normal / Overnight)
- **The Deal:** You tell the broker, *"I might hold this for one day, or I might hold it for three weeks. I'm not sure."*
- **The Risk:** Because the broker doesn't know when you'll exit, they are exposed to "Overnight Risk" (bad news happening while the market is closed).
- **The Cost:** You pay the **Full Margin** (SPAN + Exposure).

### MIS (Intraday)
- **The Deal:** You tell the broker, *"I promise to close this trade before the market closes today at 3:20 PM."*
- **The Risk:** The broker knows you aren't exposed to overnight shocks. Your risk is limited to a single day's volatility.
- **The Cost:** You get a massive **Margin Discount**. You might only need 20% or 30% of the usual cash!

<div style="text-align: center; margin: 30px 0;">
  <svg width="500" height="200" viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg">
    <!-- NRML Box -->
    <rect x="50" y="50" width="180" height="100" fill="#ecf0f1" stroke="#2c3e50" stroke-width="2" rx="10"/>
    <text x="140" y="85" font-family="Arial" font-size="18" font-weight="bold" fill="#2c3e50" text-anchor="middle">NRML</text>
    <text x="140" y="115" font-family="Arial" font-size="14" fill="#7f8c8d" text-anchor="middle">Overnight / Multiday</text>
    <text x="140" y="140" font-family="Arial" font-size="14" font-weight="bold" fill="#e74c3c" text-anchor="middle">100% Margin</text>
    
    <!-- VS -->
    <text x="250" y="105" font-family="Arial" font-size="24" font-weight="bold" fill="#34495e" text-anchor="middle">VS</text>
    
    <!-- MIS Box -->
    <rect x="270" y="50" width="180" height="100" fill="#d5f5e3" stroke="#27ae60" stroke-width="2" rx="10"/>
    <text x="360" y="85" font-family="Arial" font-size="18" font-weight="bold" fill="#27ae60" text-anchor="middle">MIS</text>
    <text x="360" y="115" font-family="Arial" font-size="14" fill="#7f8c8d" text-anchor="middle">Intraday Only</text>
    <text x="360" y="140" font-family="Arial" font-size="14" font-weight="bold" fill="#27ae60" text-anchor="middle">~20% Margin</text>
  </svg>
</div>

---

## 4. The Calendar Spread: The Ultimate Margin Hack

A **Calendar Spread** is a sophisticated way to reduce your margin. It involves betting on two different months at the same time.
- You **Buy** MMO JAN Futures.
- You **Sell** MMO FEB Futures.

Because you are "Long" and "Short" on the same stock at the same time, your overall risk is tiny. If the price crashes, you lose money on the JAN contract but make it back on the FEB contract. 

Because the risk is so low, the Exchange gives you a **Huge Margin Benefit**. Instead of needing $20,000, you might only need $2,000!

---

## 5. Trailing Stoploss: Locking in the Win

The biggest mistake new traders make is letting a winning trade turn into a losing one. The **Trailing Stoploss** solves this.

Imagine you buy Mega Motors at **$450** with a Stoploss at **$440**.
- The price moves to **$460**. You move your Stoploss up to **$450** (now you can't lose money!).
- The price moves to **$475**. You move your Stoploss up to **$465**.
- If the price suddenly crashes back to $460, your trade automatically closes at $465. 

**Result:** You still made a $15 profit even though the market crashed!

---

## Chapter Summary

- **Expiry Cycle:** Markets always offer 3 months of contracts (Current, Mid, Far).
- **Rollover:** Moving your trade from the current month to the next to keep the position open.
- **MIS Orders:** Intraday orders that give you a huge margin discount because you avoid "overnight risk."
- **Calendar Spreads:** Hedging between two different months to slash your margin requirements.
- **Trailing Stoploss:** A strategy to protect your profits by moving your safety net higher as the price climbs.

In the next chapter, we will learn about **Short Selling**—the art of making money when everyone else is panicking and prices are falling!
