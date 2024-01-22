Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    const longText = 'Teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste.'
        
    cy.get('#firstName').type('Alex')
    cy.get('#lastName').type('Lima de Oliveira')
    cy.get('#email').type('alex@exemplo.com')
    cy.get('#open-text-area').type(longText, {delay: 0})
    cy.contains('button', 'Enviar').click()
})