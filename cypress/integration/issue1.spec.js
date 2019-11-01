describe('Agrega al listado principal de personas el campo “Dirección” y quitar el campo “Fecha”',function() {
 it('Visitar pagina de paiza', function() {
    cy.visit('http://educ.ddns.net:88/pruebas-cypress/')
 })
 it('Agregar campo telefono', function() {
    cy.contains('Teléfono')
 });

 it('Realizar insercion de usuario', function() {
    cy.get('thead > tr > :nth-child(5) > .btn').click()
    cy.get('.col-md-7 > .form-control')
        .type('Cesar')
    cy.get(':nth-child(2) > .col-md-11 > .form-control')
        .type('Real del valle')
    cy.get(':nth-child(3) > .col-md-11 > .form-control')
        .type('31311478')
    cy.get('.modal-footer > .btn-primary').click()
 });

 it('Editar campo telefono', function() {
    cy.get(':nth-child(1) > :nth-child(5) > .btn-primary').click()
    cy.get(':nth-child(3) > .col-md-11 > .form-control').click()
    cy.get(':nth-child(3) > .col-md-11 > .form-control').type('123')
    cy.get('#btnSavePerson').click()
 });

 it('Eliminar registro', function(){
    cy.get(':nth-child(1) > :nth-child(5) > .btn-danger').click()
 })
})