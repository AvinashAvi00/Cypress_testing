

describe('XPathLocators', () => {
    it('find the no of products', () => {

        cy.visit("http://www.automationpractice.pl/index.php")

        cy.xpath("//ul[@id ='homefeatured']/li").should('have.lenght',7)
    })

     it('find the no of products', () => {

        cy.visit("http://www.automationpractice.pl/index.php")

        cy.xpath("//ul[@id ='homefeatured']").xpath('./li').should('have.lenght',7)
    })
})