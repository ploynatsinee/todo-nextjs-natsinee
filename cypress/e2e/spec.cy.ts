describe("e2e test", () => {
  it("should navigate to the sign up page", () => {
    cy.visit("http://localhost:3000/");
    // cy.visit('https://nextjs.org/docs/testing#cypress')
  });

  it("name", () => {
    const name = "cypress23";
    cy.get("#firstName").type(name).should("have.value", name);
  });

  it("email", () => {
    const email = "cypress3@gmail.com";
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
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Sign up successful, Please comfirm your email.");
    });
  });
});
context("navigate to smtp", () => {
  beforeEach(() => {
    cy.visit("http://0.0.0.0:1080/");
  });

  it("click email pop up", () => {
    cy.get(".card-header").click();
  });

  it("click verify link", () => {
    // cy.get('p > a').click()
  });
});
