describe("navigate to smtp", () => {
  it("navigate to smtp", () => {
    // cy.visit("http://0.0.0.0:1080/");
    cy.visit("http://smtp-server:1080/");
  });

  it("click email pop up", () => {
    // cy.get(".card-header")
    cy.get(':nth-child(2) > .card-header')
    .click();
  });

  it("click verify link", () => {
    // cy.get(".card-header");
    cy.get(':nth-child(2) > .collapse > .card-body > div > p > a')
    // cy.get('p > a[href*="api/verify"]')
    .click();
  });
});
