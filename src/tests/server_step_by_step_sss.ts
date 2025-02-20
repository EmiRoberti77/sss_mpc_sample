import { split, combine } from "shamirs-secret-sharing-ts";
import bigInt from "big-integer";

const totalParties = 3;
const threshold = 2;

const partyInput: number[] = [10, 20, 30];

const shares: Buffer[][] = partyInput.map((input) => {
  const value = bigInt(input).toString();
  console.log("number from array convert to bigInt and string");
  console.log(value);
  console.log("convert string into a Buffer");
  const buffer = Buffer.from(value);
  console.log(buffer);
  const splitValue = split(buffer, {
    shares: totalParties,
    threshold,
  });
  console.log("value after using SSS");
  console.log(splitValue);
  return splitValue;
  // return split(Buffer.from(bigInt(input).toString()), {
  //   shares: totalParties,
  //   threshold,
  // });
});
console.log(shares);
const reconstructedShares = shares.map((s) => s.slice(0, threshold));
const secureSum = reconstructedShares
  .map((s) => parseInt(combine(s).toString()))
  .reduce((a, b) => a + b, 0);

console.log("secureSum", secureSum);
