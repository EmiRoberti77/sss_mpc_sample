const partyInput: number[] = [10, 20, 30];

// STEP 1 - craete the random shares
const randomShares: number[][] = partyInput.map((input) => {
  const r1 = Math.floor(Math.random() * 100);
  const r2 = input - r1;
  const shares = [r1, r2];
  console.log(r1 + r2);
  console.log(shares);
  return shares;
});
// STEP 2 - distribute the shares
// these are the shares that are distributes to a external source
const sharedValues = randomShares.map((shares) => shares[0]);
// these are the shares that are kept locally
const localShares = randomShares.map((shares) => shares[1]);
//STEP 3 - compute the SUM
const sharedSum = sharedValues.reduce((a, b) => a + b, 0);
const localSum = localShares.reduce((a, b) => a + b, 0);
const finalOutPut = sharedSum + localSum;
//output of computation
console.log("sharedValues", sharedValues);
console.log("localShares", localShares);
console.log("sharedSum:", sharedSum);
console.log("localSum:", localSum);
console.log("finalOutPut:", finalOutPut);
