// Question 3 -- changePossibilities(amount,amount): Your quirky boss collects rare, old coins. They found out you're a programmer and asked you to solve something they've been wondering for a long time.

// Write a function that, given an amount of money and an array of coin denominations, computes the number of ways to make the amount of money with coins of the available denominations.

// Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations:

// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢

function changePossibilities(total, denoms) {
  // Make an array of `total` length to hold each denom's number of possible solutions:
  const arrCombos = new Array(total + 1)
  // Initialize each index to 0:
  arrCombos.fill(0)
  // Set the number of ways to make 0 to 1:
  arrCombos[0] = 1

  // For each coin:
  denoms.forEach(coin => {
    // For each possible amount > 0:
    for (let amount = 1; amount <= total; ++amount) {
      // If the coin isn't greater than the amount,
      if (coin <= amount) {
        // the total number of combos is increased by the combos of the amount that is the current amount - the current coin
        arrCombos[amount] += arrCombos[amount - coin]
      }
    }
  })
  // Return the number of possibilities for the `total`:
  return arrCombos[total]
}