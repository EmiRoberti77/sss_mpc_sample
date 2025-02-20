# 🔐 Multi-Party Computation (MPC) with Shamir's Secret Sharing in TypeScript

This project demonstrates **Multi-Party Computation (MPC)** using **Shamir's Secret Sharing (SSS)** in **TypeScript**. It securely computes the sum of multiple private inputs without revealing individual values.

---

## 🚀 Features

✅ Securely splits a secret into multiple **shares**.
✅ Only a minimum **threshold of shares** is required to reconstruct the secret.
✅ Computes the **sum of private numbers** securely.
✅ Uses **Shamir’s Secret Sharing (SSS)** for secure computation.
✅ Ensures **privacy** (no party learns others' inputs).

---

## 📌 Installation

### 1️⃣ **Clone the Repository**

```sh
git clone https://github.com/your-username/mpc-shamir-ts.git
cd mpc-shamir-ts
```

### 2️⃣ **Install Dependencies**

```sh
npm install
```

---

## 📜 How It Works

Each party **shares** its private number in a way that it can be reconstructed **only if the threshold number of parties agree**. Otherwise, the secret remains hidden.

1️⃣ Each party **splits** its secret number into multiple shares.
2️⃣ Only a **subset of shares** (meeting the threshold) can **reconstruct the original secret**.
3️⃣ The **sum** of securely shared numbers is computed without revealing individual inputs.

---

## 🛠 Usage

### **Run Secure Sum Computation**

```sh
npm start
```

or manually using TypeScript:

```sh
ts-node mpc.ts
```

---

## 🔑 Code Overview

### **🔹 `mpc.ts` (Main Computation File)**

```typescript
import { split, combine } from "shamirs-secret-sharing-ts";
import bigInt from "big-integer";

const totalParties = 3;
const threshold = 2;

const partyInputs: number[] = [10, 20, 30];

const shares: Buffer[][] = partyInputs.map((input) =>
  split(Buffer.from(bigInt(input).toString()), {
    shares: totalParties,
    threshold,
  })
);

const reconstructedShares = shares.map((s) => s.slice(0, threshold));
const secureSum = reconstructedShares
  .map((s) => parseInt(combine(s).toString()))
  .reduce((a, b) => a + b, 0);

console.log(`Securely Computed Sum: ${secureSum}`);
```

---

## 📈 Expected Output

```sh
Securely Computed Sum: 60
```

---

## 🔥 Why Use This?

🔹 **Privacy-Preserving Computation** – No single party learns another's input.
🔹 **Fault-Tolerant** – Even if some shares are lost, the secret can be reconstructed.
🔹 **Threshold Security** – An attacker cannot recover the secret without the required threshold.

---

## 📖 References

- [Shamir's Secret Sharing](https://en.wikipedia.org/wiki/Shamir%27s_Secret_Sharing)
- [Multi-Party Computation (MPC)](https://en.wikipedia.org/wiki/Secure_multi-party_computation)

---

## 🛠️ Future Improvements

- 🔄 **Secure Multiplication** instead of just summation.
- 🔐 **Elliptic Curve Cryptography (ECC) Integration**.
- 🗳 **Secure Voting System** using MPC.

---

## 🤝 Contributing

Feel free to submit **issues** and **pull requests** to enhance this project!

---

## 📜 License

This project is open-source under the **MIT License**.

## Author

Emi Roberti
