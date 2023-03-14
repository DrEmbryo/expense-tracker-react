import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import { LOCATORS } from "../../cypress/support/locators.ts";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <>
      <h3 test-id={LOCATORS.newTransaction.header}>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text" test-id={LOCATORS.newTransaction.note.label}>
            Text
          </label>
          <input
            test-id={LOCATORS.newTransaction.note.note}
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label
            htmlFor="amount"
            test-id={LOCATORS.newTransaction.amount.label}
          >
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            test-id={LOCATORS.newTransaction.amount.amount}
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button
          test-id={LOCATORS.newTransaction.addTransaction}
          className="btn"
        >
          Add transaction
        </button>
      </form>
    </>
  );
};
