describe("Link Test", () => {
	it("is form working", () => {
		cy.visit("/");
	});
	it('finds the content "Pizza"', () => {
		cy.visit("/Pizza");
		cy.contains("Order").click();
		cy.url().should("include", "/Pizza");
	});
	it("you can enter your name", () => {
		cy.get(":nth-child(1) > label > .submissionfield").type("pass");
	});
	it("you get an error whne form isnt validated correctly", () => {
		cy.get(":nth-child(1) > label > .submissionfield").clear("pass");
		cy.get(":nth-child(1) > label > p").should("have.value", "");
	});
	it("test that the submit button is not disabled", () => {
		cy.get(".button").should("not.be.disabled");
	});
	it("can you select multiple topings", () => {
		cy.get('[name="Cheese"]').click().should("have.checked", true);
		cy.get('[name="Bacon"]').click().should("have.checked", true);
		cy.get('[name="Tomatoe"]').click().should("have.checked", true);
		cy.get('[name="Pineapple"]').click().should("have.checked", true);
		cy.get('[name="Basil"]').click().should("have.checked", true);
	});
});

