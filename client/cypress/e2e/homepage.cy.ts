function resetDb() {
  fetch('http://localhost:3001/places/remove', {
    method: 'DELETE',
  }).then(() => {
    return console.log('Deleted all');
  });
}

describe('main page video should render', () => {
  it('should render the video', () => {
    cy.visit('/');
    cy.get('#myVideo').should('be.visible');
  });
});

describe('should add a new place', () => {
  resetDb();
  it('should add a new marker', () => {
    cy.visit('/');
    cy.get('.button-enter').click();
    cy.get('.add-icon').click();
    cy.get(
      '[style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;"]'
    ).click(400, 200);
    cy.get(
      '[style="position: absolute; left: 0px; top: 0px; z-index: 106; width: 100%;"] > div > img'
    ).should('exist');
  });

  it('should open the form page', () => {
    cy.get('.btn-next').click();
    cy.get('.next-header > span').should('exist');
  });

  it('form should upload image', () => {
    cy.fixture('ardilla.jpg', 'base64')
      .then(Cypress.Blob.base64StringToBlob)
      .then((fileContent) => {
        cy.get('input[type="file"]').attachFile({
          fileContent,
          fileName: 'ardilla.jpg',
          mimeType: 'image/jpg',
        });
        cy.wait(2000);
        cy.get('.img-input').should('exist');
      });
  });

  it('should save text in the form input description and feedback', () => {
    cy.get(':nth-child(2) > .btn-1').click();
    cy.get('.add-subtitle').type('Super!');
    cy.get(':nth-child(2) > .btn-1').click();
    cy.get(':nth-child(2) > .btn-1').click();
    cy.get('.add-subtitle').should('have.value', 'Super!');

    cy.get(':nth-child(3) > .btn-1').click();
    cy.get('.add-review').type('Bellissimo');
    cy.get(':nth-child(3) > .btn-1').click();
    cy.get(':nth-child(3) > .btn-1').click();
    cy.get('.add-review').should('have.value', 'Bellissimo');
  });

  it('should save the rating star', () => {
    cy.get('svg:nth-child(3)').click();

    cy.get('svg:nth-child(3)')
      .should('have.css', 'color')
      .and('eq', 'rgb(236, 221, 123)');

    cy.get('svg:nth-child(2)')
      .should('have.css', 'color')
      .and('eq', 'rgb(236, 221, 123)');

    cy.get('svg:nth-child(4)')
      .should('have.css', 'color')
      .and('eq', 'rgb(220, 220, 220)');

    cy.get('svg:nth-child(5)')
      .should('have.css', 'color')
      .and('eq', 'rgb(220, 220, 220)');
  });

  it('should submit the informations', () => {
    cy.get('#form-submit').click();
    cy.get(
      '[style="position: absolute; left: 0px; top: 0px; z-index: 106; width: 100%;"] > div > img'
    ).should('exist');
  });
});

describe('visit place preview', () => {
  it('should render the review', () => {
    cy.get(
      '[style="position: absolute; left: 0px; top: 0px; z-index: 106; width: 100%;"] > div > img'
    ).click();
    cy.get('.info-title').should('be.visible');
  });

  it('should close the review', () => {
    cy.get(
      '[style="cursor: default; position: absolute; top: 0px; left: 0px; z-index: -34;"] > .gm-style-iw-a > .gm-style-iw-t > .gm-style-iw > .gm-ui-hover-effect'
    ).click();
    cy.get('.info-title').should('not.exist');
  });
});

describe('search bar', () => {
  it('should filter and look for the typed place', () => {
    cy.get('.search-box').type('Genova');
    cy.get('ul').click(20, 20);
    cy.get('.search-box').should(
      'have.value',
      'Genova, Metropolitan City of Genoa, Italy'
    );
  });
});
