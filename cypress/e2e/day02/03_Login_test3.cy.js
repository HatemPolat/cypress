/// <reference types="cypress" />



describe('Login Page Test',()=>{


    it('Test Case 1',()=>{
 cy.visit('http://automationpractice.pl/')

 cy.get('.login').click()


 cy.contains("h3[class='page-subheading']",'Create an account')

    })
    it('Test case 2',()=>{

  




    })
    })