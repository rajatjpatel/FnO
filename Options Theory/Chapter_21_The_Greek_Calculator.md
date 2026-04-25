# Options Theory Chapter 21: The Engine Room - The Greek Calculator

We've studied the parts (Greeks) and the fuel (Volatility). Now, we put them all into a single machine: **The Black-Scholes Model.** This is the "Engine" that calculates what an option is worth.

---

## 1. The Black Box: How it Works

The Black-Scholes (B&S) model is a mathematical "Black Box." You feed it market data, and it spits out the fair price of an option and its Greeks.

### The 6 Essential Inputs:
1.  **Spot Price:** Where is **Nova Energy (NVE)** trading right now? ($850)
2.  **Strike Price:** Which contract are you looking at? ($900)
3.  **Time to Expiry:** How many days are left on the clock? (15 days)
4.  **Implied Volatility (IV):** How loud is the "Crowd's Roar"? (25%)
5.  **Interest Rate:** The risk-free rate of return (e.g., 7%).
6.  **Dividend:** Is NVE paying out cash before the expiry?

---

## 2. Visualizing the Engine

<div style="text-align: center; margin: 30px 0;">
  <svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
    <!-- Input Box -->
    <rect x="20" y="50" width="180" height="200" fill="#ecf0f1" stroke="#bdc3c7" stroke-width="2" rx="10" />
    <text x="110" y="40" font-family="Arial" font-size="14" fill="#34495e" text-anchor="middle" font-weight="bold">INPUTS</text>
    <text x="40" y="80" font-family="Arial" font-size="11" fill="#7f8c8d">• Spot Price</text>
    <text x="40" y="110" font-family="Arial" font-size="11" fill="#7f8c8d">• Strike Price</text>
    <text x="40" y="140" font-family="Arial" font-size="11" fill="#7f8c8d">• Days to Expiry</text>
    <text x="40" y="170" font-family="Arial" font-size="11" fill="#7f8c8d">• IV (%)</text>
    <text x="40" y="200" font-family="Arial" font-size="11" fill="#7f8c8d">• Interest Rate</text>

    <!-- The Engine -->
    <circle cx="300" cy="150" r="60" fill="#34495e" />
    <text x="300" y="155" font-family="Arial" font-size="14" fill="#ecf0f1" text-anchor="middle" font-weight="bold">B&S ENGINE</text>
    
    <!-- Output Box -->
    <rect x="400" y="50" width="180" height="200" fill="#d5f5e3" stroke="#27ae60" stroke-width="2" rx="10" />
    <text x="490" y="40" font-family="Arial" font-size="14" fill="#27ae60" text-anchor="middle" font-weight="bold">OUTPUTS</text>
    <text x="420" y="80" font-family="Arial" font-size="11" fill="#2c3e50" font-weight="bold">• Fair Premium</text>
    <text x="420" y="110" font-family="Arial" font-size="11" fill="#2c3e50">• Delta (Δ)</text>
    <text x="420" y="135" font-family="Arial" font-size="11" fill="#2c3e50">• Gamma (Γ)</text>
    <text x="420" y="160" font-family="Arial" font-size="11" fill="#2c3e50">• Theta (θ)</text>
    <text x="420" y="185" font-family="Arial" font-size="11" fill="#2c3e50">• Vega (ν)</text>

    <!-- Connecting Arrows -->
    <path d="M 200 150 L 240 150" stroke="#34495e" stroke-width="2" marker-end="url(#arrow)" />
    <path d="M 360 150 L 400 150" stroke="#34495e" stroke-width="2" marker-end="url(#arrow)" />

    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,6 L9,3 z" fill="#34495e" />
      </marker>
    </defs>
  </svg>
</div>

---

## 3. Put-Call Parity: The Law of Equilibrium

There is a fundamental law in the options universe called **Put-Call Parity (PCP).** It states that a specific combination of assets must always have the same value, or else free money (arbitrage) exists.

**The Equation:**
`Put + Spot = Present Value of Strike + Call`

In simple terms, if you hold a Put and the stock, you have the exact same payoff as someone holding a Call and cash. If the market price of these two combinations is different, professional traders will pounce on the difference until the balance is restored.

---

## 4. Solving for "IV"

Here is the secret of the professionals: They don't use the calculator to find the premium. **They use the premium to find the IV.**
- The market gives you the current **Premium.**
- You know the **Spot, Strike, Time,** and **Interest Rate.**
- The only unknown is **Volatility.**
- By working the calculator backward, you find the **Implied Volatility (IV).**

This is how we find out if the "Crowd's Roar" is getting louder or quieter.

---

## Chapter Summary

- The **Black-Scholes Model** is the mathematical engine of the options world.
- Inputs define the reality; Outputs define the risk.
- **Put-Call Parity** ensures that Call and Put prices stay in a logical relationship.
- Traders "solve for IV" to gauge market sentiment.

The math is done. Now, let's wrap up the theory and prepare for the battlefield: **Chapter 22 - Re-introducing Calls & Puts.**
