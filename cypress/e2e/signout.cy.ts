describe("e2e test sign out", () => {
    it("should navigate to the sign in page", () => {
      cy.visit("http://localhost:3000/todo"); // have query will fix later
    });
  
    it("click btn sign out", () => {
    //   cy.get('.MuiButton-root').click();
    //   cy.intercept(
    //     {
    //       method: "POST",
    //       url: "/signin",
    //     },
    //     []
    //   ).as("signin");
    });
  });
  