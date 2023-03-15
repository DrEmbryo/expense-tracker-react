import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import { LOCATORS } from "../../cypress/support/locators.ts";

//Money formatter function
export function moneyFormatter(num) {
  let p = num.toFixed(2).split(".");
  return (
    "$ " +
    (p[0].split("")[0] === "-" ? "-" : "") +
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

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <>
      <h4 test-id={LOCATORS.balance.label}>Your Balance</h4>
      <h1 test-id={LOCATORS.balance.value}>{moneyFormatter(total)}</h1>
    </>
  );
};
