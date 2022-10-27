describe("e2e test sign in", () => {
  it("should navigate to the sign in page", () => {
    cy.visit("http://web:3000/signin");
  });

  it("email", () => {
    const email = "cypress1324@gmail.com";
    cy.get("#email").type(email).should("have.value", email);
  });

  it("password", () => {
    const password = "cypress22cypress";
    cy.get("#password").type(password).should("have.value", password);
  });

  it("click btn sign in", () => {
    cy.get('.MuiButton-root').click();
    cy.intercept(
      {
        method: "POST",
        url: "/signin",
      },
      []
    ).as("signin");
  });

  it("click alert", () => {
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Sign in successful, Welcome to my app !");
    });
  });
});
