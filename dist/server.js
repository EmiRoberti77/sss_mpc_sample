"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shamirs_secret_sharing_ts_1 = require("shamirs-secret-sharing-ts");
const big_integer_1 = __importDefault(require("big-integer"));
const totalParties = 3;
const threshold = 2;
const partyInput = [10, 20, 30, 40];
const shares = partyInput.map((input) => {
    return (0, shamirs_secret_sharing_ts_1.split)(Buffer.from((0, big_integer_1.default)(input).toString()), {
        shares: totalParties,
        threshold,
    });
});
console.log(shares);
const reconstructedShares = shares.map((s) => s.slice(0, threshold));
const secureSum = reconstructedShares
    .map((s) => parseInt((0, shamirs_secret_sharing_ts_1.combine)(s).toString()))
    .reduce((a, b) => a + b, 0);
console.log("secureSum", secureSum);
