describe('Turing Cafe', () => {

  beforeEach(() => {

    cy.intercept({
      method: 'GET',
      url: 'http://localhost:3001/api/v1/reservations'
    },
      {
        statusCode: 201,
        body: [
          { 'id': 1, 'name': 'Coleslaw', 'date': '8/8', 'time': '7:00', 'number': 3 },
          { 'id': 2, 'name': 'Fridge', 'date': '10/08', 'time': '10:30', 'number': 2 },
          { 'id': 3, 'name': 'Smith', 'date': '03/08', 'time': '12:30', 'number': 1 }
        ]
      });
    cy.visit('http://localhost:3000');
  });

  it('Should be able to visit the page and view the title', () => {
    cy.get('h1').contains('Turing Cafe');
  });

  it('Should be able to visit the page and view a form and existing reservation cards', () => {
    cy.get('.resy-form').children('input').should('have.length', '4');
    cy.get('.resy-form').children('button').contains('Make Reservation');
    cy.get('.booking-view').children().should('have.length', '3');
  });

  it('should be able to select the name input and fill it with the corresponding value', () => {
    cy.get('input[name="name"]')
      .type('Alex')
      .should('have.value', 'Alex')
  });

  it('should be able to select the date input and fill it with the corresponding value', () => {
    cy.get('input[name="date"]')
      .type('03/02')
      .should('have.value', '03/02')
  });

  it('should be able to select the time input and fill it with the corresponding value', () => {
    cy.get('input[name="time"]')
      .type('6:00')
      .should('have.value', '6:00')
  });

  it('should be able to select the number of guests input and fill it with the corresponding value', () => {
    cy.get('input[name="number"]')
      .type('2')
      .should('have.value', '2')
  });

  it('should be able to view a new reservation after inputing correct info and clicking make reservation', () => {
    cy.get('input[name="name"]')
      .type('Alex')
    cy.get('input[name="date"]')
      .type('03/02')
    cy.get('input[name="time"]')
      .type('6:00')
    cy.get('input[name="number"]')
      .type('2')

    cy.get('.resy-btn').click();
    cy.get('.booking-view').children().should('have.length', '4');
  });
})