import { LOCATORS } from "../support/locators";
import { byTestId } from "../support/getByTestId";

describe("Increase account balance", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("user increase balance by 10", () => {
    const amount = 10;
    cy.get(byTestId(LOCATORS.balance.value)).should("have.text", "$ 0.00");

    cy.get(byTestId(LOCATORS.newTransaction.amount.amount)).type("10");

    cy.get(byTestId(LOCATORS.newTransaction.addTransaction)).click();

    cy.get(byTestId(LOCATORS.history.list))
      .children()
      .should("have.class", "plus")
      .and("have.text", ` +$ ${amount}.00x`);

    cy.get(byTestId(LOCATORS.income.value))
      .should("have.class", "plus")
      .and("have.text", `$ ${amount}.00`);

    cy.get(byTestId(LOCATORS.balance.value)).should(
      "have.text",
      `$ ${amount}.00`
    );
  });

  it("user increase balance by 25 with test note", () => {
    const amount = "25";
    const note = "test note";

    cy.get(byTestId(LOCATORS.balance.value)).should("have.text", "$ 0.00");

    cy.get(byTestId(LOCATORS.newTransaction.note.note)).type(note);

    cy.get(byTestId(LOCATORS.newTransaction.amount.amount)).type(amount);

    cy.get(byTestId(LOCATORS.newTransaction.addTransaction)).click();

    cy.get(byTestId(LOCATORS.history.list))
      .children()
      .should("have.class", "plus")
      .and("have.text", `${note} +$ ${amount}.00x`);

    cy.get(byTestId(LOCATORS.balance.value)).should(
      "have.text",
      `$ ${amount}.00`
    );
  });
});

describe("Decrease account balance", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("user decrease balance by 10", () => {
    const amount = "10";
    cy.get(byTestId(LOCATORS.balance.value)).should("have.text", "$ 0.00");

    cy.get(byTestId(LOCATORS.newTransaction.amount.amount))
      .invoke("val", "-" + amount)
      .type("{downArrow}")
      .trigger("change");

    cy.get(byTestId(LOCATORS.newTransaction.amount.amount))
      .type("{upArrow}")
      .trigger("change");

    cy.get(byTestId(LOCATORS.newTransaction.addTransaction)).click();

    cy.get(byTestId(LOCATORS.history.list))
      .children()
      .should("have.class", "minus")
      .and("have.text", ` -$ ${amount}.00x`);

    cy.get(byTestId(LOCATORS.expense.value))
      .should("have.class", "minus")
      .and("have.text", `$ ${amount}.00`);

    cy.get(byTestId(LOCATORS.balance.value)).should("have.text", "$ -10.00");
  });

  it("user decrease balance by 25 with test note", () => {
    const amount = "25";
    const note = "test note";

    cy.get(byTestId(LOCATORS.balance.value)).should("have.text", "$ 0.00");

    cy.get(byTestId(LOCATORS.newTransaction.note.note)).type(note);

    cy.get(byTestId(LOCATORS.newTransaction.amount.amount))
      .invoke("val", "-" + amount)
      .type("{downArrow}")
      .trigger("change");

    cy.get(byTestId(LOCATORS.newTransaction.amount.amount))
      .type("{upArrow}")
      .trigger("change");

    cy.get(byTestId(LOCATORS.newTransaction.addTransaction)).click();

    cy.get(byTestId(LOCATORS.history.list))
      .children()
      .should("have.class", "minus")
      .and("have.text", `${note} -$ ${amount}.00x`);

    cy.get(byTestId(LOCATORS.balance.value)).should(
      "have.text",
      `$ -${amount}.00`
    );
  });
});
