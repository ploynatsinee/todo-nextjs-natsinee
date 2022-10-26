describe('navigate', () => {
  it('should navigate to the sign up page', () => {
    cy.visit('http://localhost:3000/')
    // cy.visit('https://nextjs.org/docs/testing#cypress')
  })

  it('name', () => {
    const name = "cypress22"
    cy.get('#firstName').type(name).should("have.value", name);
  })

  it('email', () => {
    const email = "cypress2@gmail.com"
    cy.get('#email').type(email).should("have.value", email);
  })

  it('password', () => {
    const password = "cypress22cypress"
    cy.get('#password').type(password).should("have.value", password);
  })

  it('click btn sign up', () => {
    cy.get('.MuiButtonBase-root').click()
  })

  it('click alert', () => {
    cy.on('window:alert', (str) => {
      expect(str).to.equal("Sign up successful, Please comfirm your email.")
    })
  })
})
