describe('보일러 플레이트 테스트', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('컴포넌트 마운트 테스트', () => {
    cy.contains('증가').should('contain.text', '증가');
  });
});
