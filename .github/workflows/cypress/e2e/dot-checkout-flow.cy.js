describe('My First Test', () => {
        it('Visit DOT', () => {
                        cy.viewport('macbook-13')
                        cy.visit('https://order.ehungry.com.7.boyan.ehungry.net/classicpizza/order')
                        cy.injectAxe()
                        // cy.checkA11y()
                        // cy.get('.tabs_link').contains('Lunch').click()
                        // cy.get('.menu_list').contains('Appetizers').click()
                        // cy.get('.menucat_list').contains('French Fries').click()
                        // cy.get('#addToCartButton').click()
                        // cy.get('a.btn').contains('Proceed to checkout').click()
        })
})
