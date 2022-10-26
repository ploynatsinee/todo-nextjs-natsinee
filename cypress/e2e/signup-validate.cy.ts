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

  it("incomplete input", () => {});

  it("name > 25 character", () => {});

  it("password < 7 character", () => {});

  it("password > 25 character", () => {});


});
