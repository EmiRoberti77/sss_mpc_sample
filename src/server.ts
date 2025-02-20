import { split, combine } from "shamirs-secret-sharing-ts";
import bigInt from "big-integer";

const totalParties = 3;
const threshold = 2;

const partyInput: number[] = [10, 20, 30, 40];

const shares: Buffer[][] = partyInput.map((input) => {
  return split(Buffer.from(bigInt(input).toString()), {
    shares: totalParties,
    threshold,
  });
});
console.log(shares);
const reconstructedShares = shares.map((s) => s.slice(0, threshold));
const secureSum = reconstructedShares
  .map((s) => parseInt(combine(s).toString()))
  .reduce((a, b) => a + b, 0);

console.log("secureSum", secureSum);
