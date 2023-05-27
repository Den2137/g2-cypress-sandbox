describe('Multiple tests', () => {
    const testGoogle = (testData, expectedResult) =>

    function () {
      cy.visit('https://google.com');
      cy.get('textarea.gLFyf').type(`${testData}`);
      cy.get('div.wM6W7d').should("contain", `${expectedResult}`)
    };

  it('search for CYPRESS', testGoogle('CYPRESS', 'cypress'));
  it('search for AUDI', testGoogle('AUDI', 'audi'));
  it('search for BMW', testGoogle('BMW', 'bmw'));
})

describe('Multiple tests', () => {
    const tests = [
        {testData: 'CYPRESS', expectedResult: 'cypress'},
        {testData: 'AUDI', expectedResult: 'audi'},
        {testData: 'BMW', expectedResult: 'bmw'}
    ]

    tests.forEach(({testData, expectedResult}) => {
        it(`Test ${testData}`, () => {
            cy.visit('https://google.com');
            cy.get('textarea.gLFyf').type(testData);
            cy.get('div.wM6W7d').should('contain', expectedResult);
        })
    })
})