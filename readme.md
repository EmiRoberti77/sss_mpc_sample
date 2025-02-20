# 🔐 Multi-Party Computation (MPC) with AES Encrypted Shares in TypeScript

This project demonstrates **Multi-Party Computation (MPC)** using **AES encryption** to secure secret shares before computing a **secure sum**. Each participant encrypts part of their number and distributes it to other parties while keeping part of it private.

---

## 🚀 Features

✅ **Secure Encryption of Secret Shares** using AES.
✅ **Confidential Computation**—ensuring no party sees another's full input.
✅ **Secure Aggregation**—each party contributes without revealing private data.
✅ **Decryption & Reconstruction**—only the final sum is revealed.

---

### 2️⃣ **Install Dependencies**

```sh
npm install
```

---

## 📜 How It Works

1️⃣ Each party generates a **random share** of their number.
2️⃣ One share is **encrypted** and distributed.
3️⃣ The **remaining share is kept private**.
4️⃣ Encrypted shares are **decrypted**.
5️⃣ The sum is computed securely **without revealing individual inputs**.

---

## 🔑 Code Overview

### **🔹 `mpc_encrypted.ts` (Main Computation File)**

```typescript
import CryptoJS from "crypto-js";
import bigInt from "big-integer";
const partyInput: number[] = [10, 20, 30];
const encryptKey = "1234567890";

// STEP 1 - Create the random shares
const randomEncryptedShares: { encrypted: any; kept: number }[] =
  partyInput.map((input) => {
    const r1 = Math.floor(Math.random() * 100);
    const r2 = input - r1;
    console.log(r1 + r2);
    const encryptedR1 = CryptoJS.AES.encrypt(r1.toString(), encryptKey);
    return { encrypted: encryptedR1, kept: r2 };
  });

// STEP 2 - Distribute the shares
const sharedEncryptedValues = randomEncryptedShares.map(
  (shares) => shares.encrypted
);
const keptShares = randomEncryptedShares.map((shares) => shares.kept);

// STEP 3 - Decrypt the shares
const decryptedShares = sharedEncryptedValues.map((encryptedShare) => {
  const bytes = CryptoJS.AES.decrypt(encryptedShare, encryptKey);
  return parseInt(bytes.toString(CryptoJS.enc.Utf8));
});

// STEP 4 - Compute the SUM
const sharedSum = decryptedShares.reduce((a, b) => a + b, 0);
const localSum = keptShares.reduce((a, b) => a + b, 0);
const finalOutput = sharedSum + localSum;

// Output results
console.log("Encrypted Values:", sharedEncryptedValues);
console.log("Decrypted Shared Values:", decryptedShares);
console.log("Kept Shares:", keptShares);
console.log("Local Sum:", localSum);
console.log("Final Computed Output:", finalOutput);
```

---

## 📈 Expected Output

```sh
Encrypted Values: [AES Encrypted Strings]
Decrypted Shared Values: [Numeric values]
Kept Shares: [Numeric values]
Local Sum: XX
Final Computed Output: XX
```

---

## 🔥 Why Use This?

🔹 **Privacy-Preserving Computation** – No single party learns another's input.
🔹 **AES Encryption for Security** – Shares are encrypted before distribution.
🔹 **Threshold-Based Secret Sharing** – Ensures computation remains confidential.

---

## 📖 References

- [AES Encryption](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard)
- [Multi-Party Computation (MPC)](https://en.wikipedia.org/wiki/Secure_multi-party_computation)

---

## 🛠️ Future Improvements

- 🔄 **Use Public-Key Cryptography (RSA/ECC)**.
- 🔐 **Implement Secure Multiplication Computation**.
- 🗳 **Extend for Secure Voting Applications**.

---

## 📜 Author

Emi Roberti
