describe('Multiple tests', () => {
  
  beforeEach(() => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
    cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
    cy.get('[title="Forms"]').click();
    cy.get('[title="Form Layouts"]').click();
  })

  const tests = [
      {testData: 'janedoe@example.com, johndoe@example.com', expectedResult: 'janedoe@example.com, johndoe@example.com',testData1:'Subject', expectedResult1:'Subject',testData2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', expectedResult2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
  ]

  tests.forEach(({testData,testData1,testData2,expectedResult,expectedResult1,expectedResult2}) => {
      it(`Test ${testData}`, () => {
        cy.get('[placeholder="Recipients"]').type(testData);
        cy.get('[placeholder="Recipients"]').should('contain.value', expectedResult);
        cy.get('[placeholder="Subject"]').type(testData1);
        cy.get('[placeholder="Subject"]').should('contain.value', expectedResult1);
        cy.get('[placeholder="Message"]').type(testData2);
        cy.get('[placeholder="Message"]').should('contain.value',  expectedResult2);
        cy.get('[ng-reflect-status="success"]').click();
        cy.log("Form without labels is submitted");
      })
  })
})
