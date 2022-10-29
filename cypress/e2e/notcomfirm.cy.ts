describe("e2e test not confirm", () => {
  it("should navigate to the sign up page", () => {
    cy.visit("http://web:3000/");
    // cy.visit("http://localhost:3000/");
  });

  it("name", () => {
    const name = "cypress";
    cy.get("#firstName").type(name).should("have.value", name);
  });

  it("email", () => {
    const email = "notvalidate@gmail.com";
    cy.get("#email").type(email).should("have.value", email);
  });

  it("password", () => {
    const password = "notvalidate";
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
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Sign up successful, Please comfirm your email.");
    });
  });

  it("should navigate to the sign in page", () => {
    // cy.visit("http://localhost:3000/signin");
    cy.visit('')
  });

  it("email", () => {
    const email = "notvalidate@gmail.com";
    cy.get("#email").clear().type(email).should("have.value", email);
  });

  it("password", () => {
    const password = "notvalidate";
    cy.get("#password").clear().type(password).should("have.value", password);
  });

  it("click btn sign in", () => {
    cy.get(".MuiButton-root").click();
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
      expect(str).to.equal("Please confirm your email before sign in...");
    });
  });
});
