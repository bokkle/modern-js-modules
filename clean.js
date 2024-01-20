'use strict';

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

// obj.freeze cannot add to obj, but can mutate from within:
// budget[0].value = 10000 // this works
// budget[9] = 'jonas' // this does not

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

//bc of Object.freeze(), the object cannot be mutated...
// spendingLimits.jay = 200
// console.log(spendingLimits)

//   const limit = spendingLimits[user] ? spendingLimits[user] : 0;
const getLimit = (limits, user) => limits?.[user] ?? 0;

// now this is a PURE FUNCTION
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const cleanUser = user.toLowerCase();
  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
  // this func has a side effect (bc something outside is changed by it)
  // aka impure function
  // instead of mutating the budget obj (below)...
  // budget.push({ value: -value, description, user: cleanUser });
  // we can do this -> ...state spreads the budget arr
};
const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');
console.log(newBudget3);

//   for (const entry of newBudget3)
//     if (entry.value < -getLimit(limits, entry.user)) entry.flag = 'limit';

const checkExpenses = (state, limits) =>
  state.map((entry) =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry
  );

const finalBudget = checkExpenses(newBudget3, spendingLimits);

console.log(finalBudget);

// considered impure func bc it logs to the console
const logBigExpenses = function (state, bigLimit) {
  //   let output = '';
  //   for (const entry of budget)
  //     output +=
  //       entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';
  //   output = output.slice(0, -2); // Remove last '/ '
  //   console.log(output);
  const bigExpenses = state
    .filter((entry) => entry.value <= -bigLimit)
    .map((entry) => entry.description.slice(-2))
    .join(' / ');

  console.log(bigExpenses);
};
logBigExpenses(finalBudget, 1000);
