describe("e2e test", () => {
  it("should navigate to the sign up page", () => {
    cy.visit("http://web:3000/");
  });

  it("name", () => {
    const name = "cypress";
    cy.get("#firstName").type(name).should("have.value", name);
  });

  it("email", () => {
    const email = "cypress1324@gmail.com";
    cy.get("#email").type(email).should("have.value", email);
  });

  it("password", () => {
    const password = "cypress22cypress";
    cy.get("#password").type(password).should("have.value", password);
  });

  it("click btn sign up", () => {
    cy.get(".MuiButtonBase-root").click();
    cy.intercept(
      {
        method: "POST",
        url: "/signup",
      },
      []
    ).as("signup");
  });

  it("click alert", () => {
    cy.wait(3000)
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Sign up successful, Please comfirm your email.");
    });
  });
});
