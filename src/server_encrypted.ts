import CrypoJS from "crypto-js";
import bigInt from "big-integer";
const partyInput: number[] = [10, 20, 30];
const encryptKey = "1234567890";

// STEP 1 - craete the random shares
const randomEncrytedShares: { encrypted: any; kept: number }[] = partyInput.map(
  (input) => {
    const r1 = Math.floor(Math.random() * 100);
    const r2 = input - r1;
    const shares = [r1, r2];
    console.log(r1 + r2);
    const encryptedR1 = CrypoJS.AES.encrypt(r1.toString(), encryptKey);
    const share = { encrypted: encryptedR1, kept: r2 };
    console.log(share);
    return share;
  }
);
// STEP 2 - distribute the shares
// these are the shares that are distributes to a external source
const sharedEncrytedValues = randomEncrytedShares.map(
  (shares) => shares.encrypted
);
// these are the shares that are kept locally
const keptShares = randomEncrytedShares.map((shares) => shares.kept);
//STEP 3 - decryt the shares
const descrytedShares = sharedEncrytedValues.map((encryptedShare) => {
  const bytes = CrypoJS.AES.decrypt(encryptedShare, encryptKey);
  return parseInt(bytes.toString(CrypoJS.enc.Utf8));
});
//STEP 4 - compute the SUM
const sharedSum = descrytedShares.reduce((a, b) => a + b, 0);
const localSum = keptShares.reduce((a, b) => a + b, 0);
const finalOutPut = sharedSum + localSum;
//output of computation
console.log("encryptedValues", sharedEncrytedValues);
console.log("sharedValues", descrytedShares);
console.log("keptShares", keptShares);
console.log("localSum:", localSum);
console.log("finalOutPut:", finalOutPut);
