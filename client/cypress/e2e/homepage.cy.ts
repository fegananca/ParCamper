beforeEach(() => {
  cy.visit('/');
});

describe('visit place preview', () => {
  it('should render the review', () => {
    cy.get('.button-enter').click();
    cy.get(
      '[style="position: absolute; left: 0px; top: 0px; z-index: 106; width: 100%;"] > :nth-child(15) > img'
    ).click();
    cy.get('.info-title').should('be.visible');
  });

  it('should close the review', () => {
    cy.get('.button-enter').click();
    cy.get(
      '[style="position: absolute; left: 0px; top: 0px; z-index: 106; width: 100%;"] > :nth-child(15) > img'
    ).click();
    cy.get('.info-title').should('be.visible');
    cy.get(
      '[style="cursor: default; position: absolute; top: 0px; left: 0px; z-index: -100;"] > .gm-style-iw-a > .gm-style-iw-t > .gm-style-iw > .gm-ui-hover-effect'
    ).click();
    cy.get('.info-title').should('not.exist');
  });
});

describe('main page video should render', () => {
  it('should render the video', () => {
    cy.get('#myVideo').should('be.visible');
  });
});
