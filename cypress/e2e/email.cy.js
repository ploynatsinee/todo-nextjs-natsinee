describe("navigate to smtp", () => {
  it("navigate to smtp", () => {
    cy.visit("http://0.0.0.0:1080/");
    // cy.visit('https://nextjs.org/docs/testing#cypress')
  });

  it("click email pop up", () => {
    cy.get(".card-header").click();
  });

  it("click verify link", () => {
    cy.get(".card-header");
    cy.get('p > a[href*="api/verify"]').parent().click()
    // cy.get("p > a").parent().click();

    // http://localhost:3000/api/verify?verifyToken=$1$rR2rtG7R$T7woVsioziaYZbhI2K.j91
    cy.request("http://localhost:3000/api/verify?");
    // cy.intercept(
    //   {
    //     method: "GET",
    //     url: "/api/verify",
    //   },
    //   []
    // ).as("click verify");
  });
});
