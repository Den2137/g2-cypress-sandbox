describe("Positive test suit", () => {

    it("Test 1", () => {
      cy.visit('https://example.com');
    })
    
    it("Test 2", () => {
      cy.visit('https://example.com');
    })
    
    it.skip("Test 3", () => {
      cy.visit('https://example.com');
    })
    
    it("Test 4", () => {
      cy.visit('https://example.com');
    })
  
  })
  
  describe.skip("Negative test suit", () => {
    it("Test 1", () => {
      cy.visit('https://example.com');
    })
    
    it("Test 2", () => {
      cy.visit('https://example.com');
    })
    
    it("Test 3", () => {
      cy.visit('https://example.com');
    })
    
    it("Test 4", () => {
      cy.visit('https://example.com');
    })
  })
  
  
  describe("Some test suit", () => {
  
    it("Test 1", () => {
      cy.visit('https://example.com');
    })
    
    it("Test 2", () => {
      cy.visit('https://example.com');
    })
    
    it("Test 3", () => {
      cy.visit('https://example.com');
    })
    
    it("Test 4", () => {
      cy.visit('https://example.com');
    })
  
    describe("Some another test suit", () => {
      it("Test 1", () => {
        cy.visit('https://example.com');
      })
      
      it("Test 2", () => {
        cy.visit('https://example.com');
      })
      
      it("Test 3", () => {
        cy.visit('https://example.com');
      })
      
      it("Test 4", () => {
        cy.visit('https://example.com');
      })
    })
  })
  
  