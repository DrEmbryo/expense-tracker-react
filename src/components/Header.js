import React from "react";
import { LOCATORS } from "../../cypress/support/locators.ts";

export const Header = () => {
  return <h2 test-id={LOCATORS.header}>Expense Tracker</h2>;
};
