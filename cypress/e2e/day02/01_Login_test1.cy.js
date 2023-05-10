/// <reference types="cypress" />

describe('Koala Resort Hotel',()=>{


    it('Login in Test',()=>{

        cy.visit('https://qa-environment.koalaresorthotels.com/')
        

        //Seleniumdaki ge()

        //1.Yol
        //cy.get().click() seklinde

        //2.YOL
        cy.contains('Log in').click()

        cy.url().should('include','Account/Logon')
        //Usarname=Manager
        cy.get('#UserName').type('Manager')
        //Password=Manager1

        cy.get('#Password').type('Manager1!')

        cy.get('#btnSubmit').click()

    
    })

    
    
    it('Login click',()=>{

    
    })
})