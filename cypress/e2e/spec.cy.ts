import { waitForDebugger } from "inspector";

describe("e2e test", () => {
  it("should navigate to the sign up page", () => {
    cy.visit("http://web:3000/");
    // cy.visit("http://localhost:3000/");
  });

  it("name", () => {
    const name = "cypress";
    cy.get("#firstName").type(name).should("have.value", name)
    .wait(3000)
  });

  it("email", () => {
    const email = "cypress1324@gmail.com";
    cy.get("#email").type(email).should("have.value", email).wait(3000)
  });

  it("password", () => {
    const password = "cypress22cypress";
    cy.get("#password").type(`${password}{enter}`).should("have.value", password).wait(3500)
    // .type("{enter}");
  });

  it("click btn sign up", () => {
    cy.get(".MuiButtonBase-root").click();
    cy.intercept(
      {
        method: "POST",
        url: "/signup",
      },
      []
    ).as("signup").wait(3000)
    // cy.wait("@signup")
  });

  it("click alert", () => {
    // .then((interception) => {
      cy.on("window:alert", (str) => {
        expect(str).to.equal("Sign up successful, Please comfirm your email.");
      });
    // });
  });
});
