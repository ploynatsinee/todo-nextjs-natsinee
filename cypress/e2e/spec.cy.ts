describe("e2e test", () => {
  it("should navigate to the sign up page", () => {
    cy.visit("http://localhost:3000/");
    // cy.visit('https://nextjs.org/docs/testing#cypress')
  });

  it("name", () => {
    const name = "cypress22";
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

  // it('navigate to smtp', () => {

  // })
});
// context("navigate to smtp", () => {
//   beforeEach(() => {
//     // cy.intercept()
//   })

//   it("Add a new todo on submit", () => {
//     const itemText = 'Buy eggs'
//     cy.route('POST', '/api/todos', {
//       name: itemText,
//       id: 1,
//       isComplete: false
//     })
//     cy.get(".new-todo")
//       .type(itemText)
//       .type("{enter}")
//       .should('have.value', '')

//     cy.get('.todo-list li')
//       .should('have.length', 1)
//       .and('contain', itemText)
// })
// });
