describe("A customer", () => {
  beforeEach(() => {
    window.sessionStorage.clear()
    cy.visit("/en/shop?enableRules=true").get("main", { timeout: 15000 })
  })
  it("can complete a purchase", () => {
    // Front page
    cy.get(".card__link")
      .first()
      .click()
    cy.contains("Add to cart").click()
    cy.contains("Cart (1)").click()
    cy.contains("Gå til checkout").click()

    // Cart page
    cy.url().should("include", "/en/shop/cart")
    cy.contains("Continue").click()

    // Navigate personal details page
    cy.url().should("include", "/personal-details")
    cy.get("[id='first-name']").type("Ole")
    cy.get("[id='last-name']").type("Brumm")
    cy.get("[id='address-street']").type("Testveien 1")
    cy.get("[id='address-zip']").type("0001")
    cy.get("[id='address-city']").type("Testville")
    cy.contains("Go to payment").click()

    // Navigate payment page
    cy.url().should("include", "/payment-details")
    cy.get("[id='card-number']").type("11111111111")
    cy.get("[id='card-expiry-month']").type("01")
    cy.get("[id='card-expiry-year']").type("2030")
    cy.get("[id='card-csc']").type("123")
    cy.contains("Complete purchase").click()

    // Load receipt page
    cy.url().should("include", "/receipt")
    cy.contains("Thank you for your purchase!")
  })
})

describe("A user", () => {
  beforeEach(() => {
    window.sessionStorage.clear()
    cy.visit("/en/shop?enableRules=true").get("main", { timeout: 15000 })
  })
  it("can toggle all rules", () => {
    cy.contains("Ruleset")
      .click()
      .get('[aria-describedby="toggle-switch-all-rules-help"]')
      .click()
  })
})
