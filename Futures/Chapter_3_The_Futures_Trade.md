# Chapter 3: The First Trade - A Step-by-Step Guide

In the previous chapter, we learned the rules of the Futures Market (the financial supermarket). We discovered how lot sizes, margins, and the Exchange make trading safe and efficient. Now, it is time to put theory into practice. Let’s walk through a real-world example of how to execute a futures trade, step-by-step. 

To do this, we will temporarily step away from our Cocoa Farm and Bakery example and look at the stock market.

## The Setup: Spotting an Opportunity

Meet **NextGen Robotics (NGR)**, a leading company that builds automated robots for warehouses. 

Today is **November 15th, 2025**. The management of NGR just held a press conference announcing that they expect slightly lower profits for the upcoming winter quarter. 

The stock market hates bad news. Immediately after the announcement, panicked investors started selling their shares. The stock price of NGR in the spot market (the regular stock market) dropped by 4.0%. 

Let's look at what the trading screen shows for the Spot Market:

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 200" width="100%" height="auto" style="background-color: #f9f9f9; border: 1px solid #ddd; border-radius: 8px;">
  <!-- Header Background -->
  <rect x="0" y="0" width="600" height="50" fill="#34495e" rx="8" ry="8"/>
  <rect x="0" y="25" width="600" height="25" fill="#34495e"/>
  
  <text x="20" y="32" font-family="Arial" font-size="20" font-weight="bold" fill="#ffffff">NextGen Robotics (NGR) - Spot Market</text>
  
  <!-- Price Information -->
  <text x="20" y="90" font-family="Arial" font-size="36" font-weight="bold" fill="#333">$150.00</text>
  <text x="160" y="90" font-family="Arial" font-size="24" font-weight="bold" fill="#e74c3c">▼ -6.25 (-4.00%)</text>
  
  <text x="20" y="130" font-family="Arial" font-size="14" fill="#7f8c8d">As of Nov 15, 2025 | 11:30 AM</text>
  
  <!-- Link to futures -->
  <rect x="420" y="70" width="150" height="40" fill="#e67e22" rx="4" ry="4"/>
  <text x="495" y="95" font-family="Arial" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">View Futures ➔</text>
</svg>

### Forming a View

As a smart trader, you analyze the situation. You know that winter is always a slow season for warehouse upgrades because companies are too busy shipping holiday packages to install new robots. This slowdown happens *every single year*. You believe the market is overreacting to old news, and the price of $150.00 is a fantastic bargain.

Your conclusion: **The stock price of NGR will bounce back up very soon.** 

In trading terms, you have developed a **bullish** view (you expect the price to go up). 

Instead of buying normal shares, you decide to use your leverage and buy an NGR Futures Contract. You click the "View Futures" button on your screen.

## Inspecting the Futures Contract

Remember, the futures price acts like a shadow to the spot price. Since the spot price fell, the futures price has also fallen. Here is what the Futures Trading Screen looks like:

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 250" width="100%" height="auto" style="background-color: #f9f9f9; border: 1px solid #ddd; border-radius: 8px;">
  <!-- Header Background -->
  <rect x="0" y="0" width="600" height="50" fill="#2c3e50" rx="8" ry="8"/>
  <rect x="0" y="25" width="600" height="25" fill="#2c3e50"/>
  
  <text x="20" y="32" font-family="Arial" font-size="20" font-weight="bold" fill="#ffffff">NGR Futures Contract Details</text>
  
  <!-- Main Price Box -->
  <rect x="20" y="70" width="260" height="150" fill="#ffffff" stroke="#bdc3c7" stroke-width="1" rx="4" ry="4"/>
  <text x="35" y="100" font-family="Arial" font-size="14" fill="#7f8c8d">Futures Price</text>
  <text x="35" y="140" font-family="Arial" font-size="36" font-weight="bold" fill="#3498db">$152.00</text>
  <text x="35" y="175" font-family="Arial" font-size="18" font-weight="bold" fill="#e74c3c">▼ -6.50 (-4.10%)</text>
  
  <!-- Details Box -->
  <rect x="300" y="70" width="280" height="150" fill="#ffffff" stroke="#bdc3c7" stroke-width="1" rx="4" ry="4"/>
  
  <text x="315" y="100" font-family="Arial" font-size="14" fill="#7f8c8d">Instrument:</text>
  <text x="420" y="100" font-family="Arial" font-size="14" font-weight="bold" fill="#333">Stock Futures</text>
  
  <text x="315" y="130" font-family="Arial" font-size="14" fill="#7f8c8d">Expiry Date:</text>
  <text x="420" y="130" font-family="Arial" font-size="14" font-weight="bold" fill="#333">28th Nov 2025</text>

  <text x="315" y="160" font-family="Arial" font-size="14" fill="#7f8c8d">Market Lot:</text>
  <text x="420" y="160" font-family="Arial" font-size="14" font-weight="bold" fill="#333">100 Shares</text>

  <text x="315" y="190" font-family="Arial" font-size="14" fill="#7f8c8d">Underlying Spot:</text>
  <text x="420" y="190" font-family="Arial" font-size="14" font-weight="bold" fill="#333">$150.00</text>
</svg>

Let's break down this information box by box:
1. **Instrument & Symbol:** We are looking at a "Stock Future" for the company "NGR".
2. **Expiry Date:** 28th Nov 2025. If you buy this contract, it will automatically close and settle on this date.
3. **Underlying Spot:** This confirms the regular stock price is currently $150.00.
4. **Futures Price:** $152.00. *(Note: The futures price is slightly higher than the spot price. We will learn the mathematical formula for exactly why this happens in a later chapter. For now, just know they move in the same direction).*
5. **Market Lot:** 100 Shares. This is the minimum quantity you can trade.

Before buying, you calculate your total **Contract Value**:
* Contract Value = Lot Size × Futures Price
* Contract Value = 100 × $152.00
* **Contract Value = $15,200**

You decide to buy **1 Lot** of NGR Futures. You press the "BUY" button on your trading app.

## The Four Magic Steps of Execution

The moment you press "BUY", four things happen in the background in less than a second:

1. **Margin Validation:** The Exchange checks your trading account. Even though the contract is worth $15,200, you don't need that much money. The Exchange requires a 10% Margin. It checks to ensure you have at least $1,520 in your account as a safety deposit.
2. **Counterparty Search:** The Exchange's supercomputers instantly look for someone else in the world who wants to *sell* 1 lot of NGR Futures at $152.00. (The seller clearly thinks the price will keep dropping).
3. **The Signoff:** The computer matches your buy order with their sell order. The contract is digitally signed.
4. **The Margin Block:** $1,520 of your cash is "blocked" in your account. You cannot use it to buy anything else while this trade is active.

**Congratulations! You now own 1 Lot of NGR Futures.**

## Three Scenarios at Expiry

Let's fast forward to the expiry date: **November 28th, 2025**. What happened to your trade?

### Scenario 1: You Were Right (Price Goes Up)
The market realizes the panic was silly. The spot price of NGR rises, dragging the Futures price up with it to **$160.00**.
* You agreed to buy 100 shares at $152.00.
* They are now worth $160.00.
* You made a profit of $8.00 per share.
* Total Profit = $8.00 × 100 = **+$800**.
*(The seller who took the other side of your trade loses exactly $800).*

### Scenario 2: You Were Wrong (Price Goes Down)
The panic gets worse. The company loses a major client. The Futures price drops to **$145.00**.
* You are forced to buy 100 shares at your agreed $152.00.
* They are only worth $145.00 on the open market.
* You made a loss of $7.00 per share.
* Total Loss = $7.00 × 100 = **-$700**.
*(The seller gains exactly $700).*

### Scenario 3: Nothing Changes
The price stays exactly at **$152.00**. You make $0. Your blocked margin of $1,520 is unblocked and returned to you in full.

## The Magic of "Squaring Off" (Escaping Early)

Let's rewind. It is currently November 16th—just one day after you bought the contract. 
Overnight, a famous tech investor announces they are investing heavily in NGR. The Futures price instantly shoots up from your buying price of $152.00 to **$158.00**.

You are currently sitting on a profit of $6.00 per share ($600 total). 

You think: *"Why wait until November 28th? What if the price crashes again?"*

Because you are trading in a highly liquid financial supermarket, you do not have to wait! You can lock in your profits immediately by doing something called **Squaring Off**.

To "Square Off" means to do the exact opposite of your initial trade to close it out.
* Your initial trade: **Bought** 1 Lot of NGR Futures.
* Your square off trade: **Sell** 1 Lot of NGR Futures at the new price of $158.00.

You click "SELL" on your app. The exchange instantly transfers your contract to a new buyer. 

**The Result:**
1. Your trade is officially closed.
2. Your margin of $1,520 is instantly unblocked.
3. Your profit of **$600** is credited to your bank account that very evening!
Not bad for a single day of work.

## Chapter Summary

- If you believe a price will go up, you **Buy** a futures contract (Bullish).
- The Exchange automatically handles matching buyers and sellers, and locking away the Margin deposit.
- Your profit or loss is calculated by the difference between your entry price and your exit price, multiplied by the Lot Size.
- You do NOT have to hold a contract until the Expiry Date.
- You can **Square Off** (close your position) at any second of the trading day to take your profits or cut your losses early.

In the next chapter, we will explore the math behind your safety deposit in greater detail, and see exactly how "Leverage" can supercharge both your profits and your losses!
