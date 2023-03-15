import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import { LOCATORS } from "../../cypress/support/locators.ts";

//Money formatter function
export function moneyFormatter(num) {
  let p = num.toFixed(2).split(".");
  return (
    "$ " +
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1]
  );
}

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;

  return (
    <div className="inc-exp-container">
      <div>
        <h4 test-id={LOCATORS.income.label}>Income</h4>
        <p test-id={LOCATORS.income.value} className="money plus">
          {moneyFormatter(income)}
        </p>
      </div>
      <div>
        <h4 test-id={LOCATORS.expense.label}>Expense</h4>
        <p test-id={LOCATORS.expense.value} className="money minus">
          {moneyFormatter(expense)}
        </p>
      </div>
    </div>
  );
};
