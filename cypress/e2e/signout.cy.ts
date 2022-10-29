describe("e2e test sign out", () => {
    it("should navigate to the sign in page", () => {
      cy.visit("http://web:3000/todo"); // have query will fix later
      // cy.visit("http://localhost:3000/todo");
      // cy.intercept('/users?_limit=*')
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
  