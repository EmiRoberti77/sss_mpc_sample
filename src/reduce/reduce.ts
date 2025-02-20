export type SeaCreature = { emoji: string; deadly: boolean; type: string };

export const sea: SeaCreature[] = [
  { emoji: "🦐", deadly: true, type: "crustacean" },
  { emoji: "🐡", deadly: false, type: "fish" },
  { emoji: "🐠", deadly: false, type: "fish" },
  { emoji: "🦈", deadly: false, type: "shark" },
  { emoji: "🦀", deadly: false, type: "crustacean" },
];

//sample 1
//check if there is a dangerous creature in the sea
const isDangerous = sea.reduce((a, b) => a || b.deadly, false);
console.log(isDangerous);
//sample 2
// sum of all elements in the array
const array = [2, 2, 2, 2, 2];
const ret_2 = array.reduce((a, b) => a + b);
console.log(ret_2);
//sum of all elements in the array with a initial default value to infer the multiplication
const ret_3 = array.reduce((a, b) => a * b, 56);
console.log(ret_3);
