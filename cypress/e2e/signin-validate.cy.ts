describe("sign in integration test", () => {
  it("should navigate to the sign in page", () => {
    cy.visit("http://web:3000/signin");
  });

  it("no input", () => {
    cy.get(".MuiButton-root").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Please fill out the information completely.");
    });
  });

  it("don't have user", () => {
    const email = "nouser@gmail.com";
    const password = "nousernouser";
    cy.get("#email").type(email).should("have.value", email);
    cy.get("#password").type(password).should("have.value", password);
    cy.get(".MuiButton-root").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        "User not found, Please recheck your email or password"
      );
    });
  });
});
