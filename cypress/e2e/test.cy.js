/// <reference types="cypress" />

describe("Form Page Tests", () => {
  beforeEach(() => {
    cy.visit("/pizza");
  });

  it("Can type input", () => {
    cy.get("[data-cy='name']").type("JJQuery");
  });

  it("Can select more than one toppings in additional toppings", () => {
    cy.get("[data-cy='Biber']").check();
    cy.get("[data-cy='Mısır']").check();
    cy.get("[data-cy='Sucuk']").check();
    cy.get("[data-cy='Domates']").check();
  });

  it("Can send order", () => {
    cy.get('[type="radio"]').check("Küçük");
    cy.get("[data-cy='thickness']").select("Standart");
    cy.get("[data-cy='Biber']").check();
    cy.get("[data-cy='Mısır']").check();
    cy.get("[data-cy='Sucuk']").check();
    cy.get("[data-cy='Domates']").check();
    cy.get("[data-cy='orderNote']").type("hi");
    cy.get("[data-cy='name']").type("JJ");
    cy.get("[data-cy='submit']").click();
  });

  it("Check initial error messages", () => {
    cy.get("[data-cy='radio-error']").should("not.be.visible");
    cy.get("[data-cy='select-error']").should("not.be.visible");
    cy.get("[data-cy='name-error']").should("not.be.visible");
  });

  it("Check initial error messages", () => {
    cy.get("[data-cy='radio-error']").should("not.be.visible");
    cy.get("[data-cy='select-error']").should("not.be.visible");
    cy.get("[data-cy='name-error']").should("not.be.visible");
  });

  it("Check validation in name", () => {
    cy.get("[data-cy='name']").type("J");
    cy.get("[data-cy='name-error']").should("be.visible");
    // cy.get("[data-cy='name-error']").should("exist");
    cy.get("[data-cy='name']").type("J");
    cy.get("[data-cy='name-error']").should("not.be.visible");
    cy.get("[data-cy='name']").clear();
    cy.get("[data-cy='name-error']").should("be.visible");
  });

  it("Check price", () => {
    cy.get('[type="radio"]').check("Küçük");
    cy.get("[data-cy='thickness']").select("Standart");
    cy.get("[data-cy='Biber']").check();
    cy.get("[data-cy='Mısır']").check();
    cy.get("[data-cy='Sucuk']").check();
    cy.get("[data-cy='Domates']").check();
    cy.get("[data-cy='total-price']").should("have.text", "120.00 ₺");
    // cy.get("[data-cy='total-price']").contains("120.00 ₺");
  });
});
