/// <reference types="cypress" />

// "describe" yerine "contex" de yazilabilir

context('My second Test',()=>{
    beforeEach('Her testten once Calisacak',()=>{

        cy.visit('/')

    })

    it('URL test',()=>{
 
        cy.url().should('include','google')
        cy.url().should('eq','https://www.google.com/')
    })
    
    
    it('Title Test',()=>{

        cy.title().should('include','Google')
        cy.title().should('equal','Google')

    
    })
    it('Search Test',()=>{

        cy.get('#APjFqb').type('Cypress.io{enter}')

        //get():Locate aliyoruz.
        //type():Metin gonderiyoruz.
        //{enter}:Enter tusuna basiyor.
            
    
    })


    it.skip('Search Test',()=>{

        cy.get('#APjFqb',{timeout:3000}).type('Cypress.io{enter}')

      
        


    
    })
    it('Click',()=>{


cy.get('.gb_f').click()


    })

    
    
    
    })
    