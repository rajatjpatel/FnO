# Options Theory Chapter 17: The Bell Curve - Volatility & Normal Distribution

If you drop a thousand balls through a peg-board, they don't fall randomly. They form a specific shape: **The Bell Curve.** In trading, this shape is our crystal ball—it tells us where a stock is *likely* to be and, more importantly, where it is *unlikely* to go.

---

## 1. The Random Walk

Stock prices are a "Random Walk." You can't predict if **Galaxy Tech (GTK)** will go up or down tomorrow. However, if you look at 5 years of GTK returns, you'll see a pattern:
- Most days, it moves by ±0.5%.
- Some days, it moves ±2%.
- Very rarely, it moves ±10%.

This clustering of data around the average is called **Normal Distribution.**

---

## 2. The Golden Rule: 68-95-99.7

In a Normal Distribution, we can predict the probability of a price move using **Standard Deviation (SD).**

| Range | Confidence | Meaning |
| :--- | :--- | :--- |
| **±1 SD** | **68%** | Most price action happens here. |
| **±2 SD** | **95%** | Highly likely the stock stays within this range. |
| **±3 SD** | **99.7%** | Almost certain... until it isn't. |

---

## 3. Visualizing the Bell Curve

<div style="text-align: center; margin: 30px 0;">
  <svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
    <!-- The Bell Curve Path -->
    <path d="M 50 250 Q 300 -50, 550 250" stroke="#34495e" stroke-width="2" fill="none" />
    
    <!-- Shaded Regions (Approximate) -->
    <!-- 1 SD (68%) -->
    <path d="M 220 250 Q 300 30, 380 250 Z" fill="#3498db" opacity="0.3" />
    <text x="300" y="150" font-family="Arial" font-size="12" fill="#2980b9" text-anchor="middle">68% (1 SD)</text>

    <!-- 2 SD (95%) -->
    <path d="M 140 250 Q 300 -10, 460 250 L 140 250" fill="#3498db" opacity="0.1" />
    <text x="300" y="220" font-family="Arial" font-size="12" fill="#34495e" text-anchor="middle">95% (2 SD)</text>

    <!-- Center Line (Mean) -->
    <line x1="300" y1="50" x2="300" y2="250" stroke="#e74c3c" stroke-width="2" stroke-dasharray="5,5" />
    <text x="310" y="60" font-family="Arial" font-size="10" fill="#e74c3c">Mean (Average)</text>

    <!-- Bottom Axis -->
    <line x1="50" y1="250" x2="550" y2="250" stroke="#34495e" stroke-width="2" />
  </svg>
</div>

---

## 4. Black Swans: The 0.3%

What happens beyond the 3rd Standard Deviation? This is the realm of the **Black Swan.** These are events like a sudden war, a pandemic, or a massive corporate fraud. 
- The math says they shouldn't happen.
- The market says they *do* happen.
- As an options trader, "Selling" options in the Black Swan zone is profitable 99.7% of the time, but the 0.3% can wipe you out.

---

## 5. Predicting the Range of GTK

If **GTK** is at **$1000** and has an Annual Volatility of **20%**:
- **68% Confidence Range:** $800 to $1200.
- **95% Confidence Range:** $600 to $1400.

If you sell a $1500 Call option, you are betting that there is a **less than 2.5% chance** that GTK will rise that high. You are playing the probabilities.

---

## Chapter Summary

- Stock returns follow a **Normal Distribution (Bell Curve).**
- **1 SD** covers 68% of price moves.
- **2 SD** covers 95% of price moves.
- Knowing the SD allows you to calculate the "Probability of Success" for any trade.

In the next chapter, we apply this math to actual trading strategies: **Chapter 18 - Volatility Applications.**
