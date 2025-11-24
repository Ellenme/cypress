describe('Проверка авторизации', function () {

    // 1️⃣ Верный логин и верный пароль
    it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio')
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)')
        cy.get('#mail').type('german@dolnikov.ru')
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click()
        cy.get('#messageHeader').should('be.visible')
        cy.get('#messageHeader').contains('Авторизация прошла успешно')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
    })

    // 2️⃣ Верный логин и неверный пароль
    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio')
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)')
        cy.get('#mail').type('german@dolnikov.ru')
        cy.get('#pass').type('iLoveqastudio2')
        cy.get('#loginButton').click()
        cy.get('#messageHeader').should('be.visible')
        cy.get('#messageHeader').contains('Такого логина или пароля нет')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
    })

    // 3️⃣ Валидация на наличие @
    it('Валидация логина: наличие @', function () {
        cy.visit('https://login.qa.studio')
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)')
        cy.get('#mail').type('germandolnikov.ru') // без @
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click()
        cy.get('#messageHeader').should('be.visible')
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
    })

    // 4️⃣ Восстановление пароля
    it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio')
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)')
        cy.get('#forgotEmailButton').click()
        cy.get('#mailForgot').type('german@dolnikov.ru')
        cy.get('#restoreEmailButton').click()
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
    })

    // 5️⃣ Проверка корректного формата логина (позитивный)
    it('Проверка корректного формата логина', function () {
        cy.visit('https://login.qa.studio')
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)')
        cy.get('#mail').type('german@dolnikov.ru') // правильный логин
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click()
        cy.get('#messageHeader').should('be.visible')
        cy.get('#messageHeader').contains('Авторизация прошла успешно')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
    })

    // 6️⃣ Приведение логина к строчным буквам (позитивный)
    it('Приведение логина к строчным буквам', function () {
        cy.visit('https://login.qa.studio')
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)')
        cy.get('#mail').type('GerMan@Dolnikov.ru') // смешанный регистр
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click()
        cy.get('#messageHeader').should('be.visible')
        cy.get('#messageHeader').contains('Авторизация прошла успешно')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
    })

})