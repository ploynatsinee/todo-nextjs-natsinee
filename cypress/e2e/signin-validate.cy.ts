describe("sign in integration test", () => {
    it("should navigate to the sign in page", () => {
      cy.visit("http://localhost:3000/signin");
    });
  
    it("no input", () => {
    //   cy.get(".MuiButtonBase-root").click();
    //   cy.on("window:alert", (str) => {
    //     expect(str).to.equal("Please fill out the information completely.");
    //   });
    });
  
    it("don't have user", () => {});
  
    it("user not validate email", () => {});
  
  });
  