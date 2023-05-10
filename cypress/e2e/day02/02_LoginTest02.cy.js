/// <reference types="cypress" />

const { includes } = require("cypress/types/lodash")

describe('Koala Resolt Hotel',()=>{



    it('Login Test',()=>{
        cy.visit('https://qa-environment.koalaresorthotels.com/')
        //1) contains('Text')
        //
        //contains('Log In').Click()
       // contains('locator','Text')



        cy.contains('[class="nav-link"]' ,'Log in').click()
        cy.contains('log in',{matchCase:false}).click()// harf duyarliligini ihmal ediyoruz matchcase:false

                //ASSERT YAPILARI KULLANIMI Ana sayfada oldugumuzu dogrulama
                

//1)have.text()
cy.get('#navLogon > .nav-link').should('have.text','Log in')
//LOcate edilen yerdeki metinde 'Log in' varmi,iceriyormu?

//2)cy.url().should()
cy.url().should('include','Account/Logon')


//3)be.visible()
cy.get('.row > .mb-4').should('be.visible',)


//4) title() Assertion

cy.title().should('eq','KoalaResortHotels - Log in')


//5)include.text

cy.get('#navLogon > .nav-link').should('include.text','Log in')

//Toplam Link sayisini bulmak icin

cy.get('li a').should('have.length',23)







    })
    
    
    })