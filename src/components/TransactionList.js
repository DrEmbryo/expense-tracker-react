import React, { useContext } from "react";
import { Transaction } from "./Transaction";

import { LOCATORS } from "../../cypress/support/locators.ts";

import { GlobalContext } from "../context/GlobalState";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3 test-id={LOCATORS.history.label}>History</h3>
      <ul className="list" test-id={LOCATORS.history.list}>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
