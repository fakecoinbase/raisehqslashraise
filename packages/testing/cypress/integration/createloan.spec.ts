/* tslint:disable */
const utils = require('../../../client/src/utils/index');
import jest from 'jest';

describe('BORROWER', function() {
  beforeEach(function() {
    cy.web3('borrower');
    cy.login('borrower');
  });

  it('Go to create loan', function() {
    cy.visit(Cypress.env('url'));

    cy.wait(4000);
    /*Cypress.on('window:load', function() {
      console.log('HOLA?');
      window.axios.interceptors.request.use(
        config => {
          console.log('--> called ');
          return config;
        },
        error => {
          return Promise.reject(error);
        }
      );

      // cy.stub(window.use, 'putavida', () => console.log('marianomariano'));
    });*/
    cy.get(':nth-child(2) > a')
      .should('have.length', 1)
      .then(() => {});
    cy.wait(2000);
    cy.get(':nth-child(2) > a').matchImageSnapshot('menu_option_borrower');
    cy.get('.borderless').matchImageSnapshot('menu_borrower');
    cy.get(':nth-child(2) > a').click();
    cy.wait(2000);

    cy.get('#input-amount').should('have.length', 1);
    cy.wait(2000);
    cy.get('#input-amount').matchImageSnapshot('amount');
    cy.get('body').matchImageSnapshot('content_borrower');
    cy.get('#input-amount')
      .clear()
      .type(10);

    cy.wait(2000);

    cy.get('.card > .button').should('have.length', 1);

    cy.wait(2000);
    cy.get('.card > .button').click();

    cy.get('#btn-check', { timeout: 120000 }).should('have.length', 1);
    cy.wait(2000);
    cy.get('#btn-check').matchImageSnapshot('loan_created_button');
    cy.get('#btn-check').click();
    cy.wait(2000);
    cy.get('.heroCard', { timeout: 120000 })
      .its('length')
      .should('be.gte', 1);
    cy.get('.heroCard:nth-child(1)').matchImageSnapshot('new_loan_created');
    cy.wait(4000);
  });
});
/* tslint:enable */
