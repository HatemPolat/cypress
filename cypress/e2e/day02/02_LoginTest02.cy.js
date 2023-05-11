/// <reference types="cypress" />



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

cy.get('li a').should('have.length',29)

//LOCATE ALMA ISLEMLERI
//find():Beleirli bir html elemaninin secimini 
cy.get('li').find('a[href="/Rooms/320"]').should('have.text','Twin 2')

//cy.find() seklinde kullanimi yoktur
//kullanim sekli anvak cy.get().find()



//within()


cy.get('div.categories').within(()=>{

    cy.get('a[href="/Rooms/320"]').click()
})
/*
NOT: Web elementtleri genellikle get() ile bulacagiz.Eger get() ile bulamazsak.find() ile bulacagiz
onunlada bulamazsak within() kullaniriz.
*/



    })
    
    
    })