//Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

function maxProfit(prices) {
  let minPriceToBy = prices[0];
  let profit = prices[1] - minPriceToBy;

  for (let i = 1; i < prices.length; i++) {
    if (minPriceToBy > prices[i]) {
      minPriceToBy = prices[i];
    }

    if (profit < prices[i+1] - minPriceToBy) {
      profit = prices[i+1] - minPriceToBy;
    }
  }

  return profit > 0 ? profit : 0;
}

let prices = [7,1,5,3,6,4];
console.log(maxProfit(prices));
