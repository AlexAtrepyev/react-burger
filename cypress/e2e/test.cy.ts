import { API_URL } from '../../src/utils/constants';

describe('constructor tests', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });
  
  it('should get ingredients', () => {
    cy.get('h2').contains('Булки').should('exist');
  });

  it('should open ingredient modal', () => {
    cy.get('li').contains('Краторная булка').click();
    cy.contains('Детали ингредиента').should('exist');
    cy.get('h2').contains('Краторная булка').should("exist");
  });

  it('should close ingredient modal', () => {
    cy.get('*[class^="modal_close"]').click();
    cy.contains('Детали ингредиента').should('not.exist');
  });
  
  it('should drag and drop bun to constructor', () => {
    cy.get('li').contains('Краторная булка').trigger('dragstart');
    cy.get('*[class^="burger_section"]').trigger('drop');
    cy.get('*[class^="burger_section"]').contains('Краторная булка');
  });

  it('should show create order button', () => {
    cy.get('button').contains('Оформить заказ').should('exist');
  });
  
  it('should create order', () => {
    cy.get('button').contains('Оформить заказ').click();

    cy.get('h1').contains('Вход');
    cy.get('input[name="email"]').type('mralex76@mail.ru');
    cy.get('input[name="password"]').type('pass', {force: true});
    cy.get('button').contains('Войти').click();

    cy.intercept("POST", `${API_URL}/auth/login`).as('loginRequest');
    cy.wait("@loginRequest");

    cy.get('button').contains('Оформить заказ').click();

    cy.intercept("POST", `${API_URL}/orders`).as('createOrderRequest');
    cy.wait("@createOrderRequest");

    cy.get('p').contains('Ваш заказ начали готовить');
  });
});
