describe('Agrega al listado principal de personas el campo “Dirección” y quitar el campo “Fecha”',function() {
    it('Visitar pagina de paiza', function() {
       cy.visit('https://directorio-en-php.paiza-user.cloud/~ubuntu/directorio-en-php/index.php')
    })
   
    it('Realizar insercion de usuario', function() {
        cy.get('thead > tr > :nth-child(5) > .btn').click()
        cy.get('.col-md-7 > .form-control')
            .type('Cesar')
        cy.get(':nth-child(2) > .col-md-11 > .form-control')
            .type('Real del valle')
        cy.get(':nth-child(3) > .col-md-11 > .form-control')
            .type("3131144830")
        cy.get('.modal-footer > .btn-primary').click()
     })
})