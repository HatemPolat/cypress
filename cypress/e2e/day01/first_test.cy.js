/// <reference types="cypress" />



describe('My firs test',()=>{

    it('URL test',()=>{

        cy.visit('https://www.google.com/')

        cy.url().should('include','google')

       
    
    
    })
    
    
    it('Title Test',()=>{

        cy.visit('https://www.google.com/')


         cy.title().should('include','Google')

        cy.title().should('include','Goog')

        cy.title().should('eq','Google')
    
    })
})