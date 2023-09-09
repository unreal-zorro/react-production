describe('Пользователь заходит на страницу со списком статей', () => {
  beforeEach(() => {
    cy.login().then((data) => {
      cy.visit('articles');
    });
  });

  it('И статьи успешно подгружаются', () => {
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
  });

  it('На стабах (фикстурах)', () => {
    cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' });
    // cy.intercept('GET', '**/articles?*', (req) => {
    //   req.
    // });
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
  });

  it.skip('Пример заскипанного теста', () => {
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    cy.get('adsfsfs').should('exist');
  });
});
