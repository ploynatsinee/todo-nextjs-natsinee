describe("sign up integration test", () => {
  it("should navigate to the sign up page", () => {
    cy.visit("http://localhost:3000/");
  });

  it("no input", () => {
    cy.get(".MuiButtonBase-root").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Please fill out the information completely.");
    });
  });

  it("name > 25 character", () => {
    const name = "cypressssssssssssssssssssssssssssssssssssssssssssssssss";
    const email = "cypress@gmail.com";
    const password = "cypress222";
    cy.get("#firstName").type(name).should("have.value", name);
    cy.get("#email").type(email).should("have.value", email);
    cy.get("#password").type(password).should("have.value", password);
    cy.get(".MuiButtonBase-root").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Name must less than 25 character.");
    });
  });

  it("password < 7 character", () => {
    const name = "cypress";
    const email = "cypress@gmail.com";
    const password = "cy";
    cy.get("#firstName").clear().type(name).should("have.value", name);
    cy.get("#email").clear().type(email).should("have.value", email);
    cy.get("#password").clear().type(password).should("have.value", password);
    cy.get(".MuiButtonBase-root").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Name must less than 25 character.");
    });
  });

  it("password > 25 character", () => {
    const name = "cypress";
    const email = "cypress@gmail.com";
    const password = "cypresssssssssssssssssssssssssssssssssssss";
    cy.get("#firstName").clear().type(name).should("have.value", name);
    cy.get("#email").clear().type(email).should("have.value", email);
    cy.get("#password").clear().type(password).should("have.value", password);
    cy.get(".MuiButtonBase-root").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Password must between 7-25 character.");
    });
  });

  it("Invalid email", () => {
    const name = "cypress";
    const email = "cypress";
    const password = "cypresscypress";
    cy.get("#firstName").clear().type(name).should("have.value", name);
    cy.get("#email").clear().type(email).should("have.value", email);
    cy.get("#password").clear().type(password).should("have.value", password);
    cy.get(".MuiButtonBase-root").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Invalid Email");
    });
  });
});
