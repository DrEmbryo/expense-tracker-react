import { LOCATORS } from "../support/locators";
import { byTestId } from "../support/getByTestId";

describe("Page render", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Render header element", () => {
    cy.get(byTestId(LOCATORS.header)).should("have.text", "Expense Tracker");
  });

  it("Render balance elements", () => {
    cy.get(byTestId(LOCATORS.balance.label)).should(
      "have.text",
      "Your Balance"
    );
    cy.get(byTestId(LOCATORS.balance.value)).should("have.text", "$ 0.00");
  });

  it("Render income elements", () => {
    cy.get(byTestId(LOCATORS.income.label)).should("have.text", "Income");
    cy.get(byTestId(LOCATORS.income.value))
      .should("have.text", "$ 0.00")
      .and("have.class", "plus");
  });

  it("Render income elements", () => {
    cy.get(byTestId(LOCATORS.expense.label)).should("have.text", "Expense");
    cy.get(byTestId(LOCATORS.expense.value))
      .should("have.text", "$ 0.00")
      .and("have.class", "minus");
  });

  it("Render history elements", () => {
    cy.get(byTestId(LOCATORS.history.label)).should("have.text", "History");
  });

  it("Render new transaction elements", () => {
    cy.get(byTestId(LOCATORS.newTransaction.header)).should(
      "have.text",
      "Add new transaction"
    );
    cy.get(byTestId(LOCATORS.newTransaction.note.label)).should(
      "have.text",
      "Text"
    );
    cy.get(byTestId(LOCATORS.newTransaction.note.note)).should(
      "have.attr",
      "placeholder",
      "Enter text..."
    );
    cy.get(byTestId(LOCATORS.newTransaction.amount.label)).should(
      "have.text",
      "Amount (negative - expense, positive - income)"
    );
    cy.get(byTestId(LOCATORS.newTransaction.addTransaction)).should(
      "have.text",
      "Add transaction"
    );
  });
});
