describe('Multiple tests', () => {
  
    beforeEach(() => {
      cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
      cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
      cy.get('[class = "menu-title ng-tns-c141-19"]').click();
      cy.get('[class = "menu-title ng-tns-c141-23"]').click();
    })
   
    const tests = [
        
        {testData:
        {
            position: 'top-right',
            title: 'success title',
            content: 'success content',
            time: '10000',
            type: 'success'

        }, 
        expectedResult: 
        {
            icon: 'checkmark',
            title: 'success title',
            content: 'success content',
            color: 'rgb(96, 175, 32)',
            justifyContent: 'flex-end',
            alignItems: 'flex-start'


        }
        },
        {testData:
         {
          position: 'top-left',
          title: 'info title',
          content: 'info content',
          time: '10000',
          type: 'info'

         }, 
         expectedResult: 
        {
          icon: 'question-mark',
          title: 'info title',
          content: 'info content',
          color: 'rgb(4, 149, 238)',
          justifyContent: 'flex-start',
          alignItems: 'flex-start'
        }
        },
        {testData:
        {
        position: 'bottom-left',
        title: 'warning title',
        content: 'warning content',
        time: '10000',
        type: 'warning'

        }, 
        expectedResult: 
       {
        icon: 'alert-triangle',
        title: 'warning title',
        content: 'warning content',
        color: 'rgb(255, 159, 5)',
        justifyContent: 'flex-start',
        alignItems: 'flex-end'
       }
      },
      {testData:
      {
      position: 'bottom-right',
      title: 'danger title',
      content: 'danger content',
      time: '10000',
      type: 'danger'

     }, 
      expectedResult: 
     {
      icon: 'flash',
      title: 'danger title',
      content: 'danger content',
      color: 'rgb(176, 0, 32)',
      justifyContent: 'flex-end',
      alignItems: 'flex-end'
     }
     }

    ]
  
    tests.forEach(({testData,expectedResult}) => {
        it(`Test ${testData}`, () => {
         
          cy.get('[ng-reflect-name="title"]').clear().type(testData.title);
          cy.get('[ng-reflect-name="title"]').should('contain.value', expectedResult.title);
          cy.get('[ng-reflect-name="content"]').clear().type(testData.content);
          cy.get('[ng-reflect-name="content"]').should('contain.value', expectedResult.content);
          cy.get('.position-select .select-button').click();
          cy.contains(testData.position).click();
          cy.get('[ng-reflect-selected="primary"]').click();
          cy.contains(testData.type).click();
          cy.get('[class="mat-ripple appearance-filled size-medium shape-rectangle status-basic nb-transition"]').click();
          cy.get('.content-container .title').should('include.text', expectedResult.title);
          cy.get('.content-container .message').should('include.text', expectedResult.content);
          cy.get('nb-toast');
          cy.get('nb-toast').find(`g[data-name= "${expectedResult.icon}"]`).should('exist');
          cy.get('nb-toast').should('have.css', 'background-color').and('eq',expectedResult.color);
          cy.get('.toastr-overlay-container').should('have.css', 'justify-content').and('eq',expectedResult.justifyContent);
          cy.get('.toastr-overlay-container').should('have.css', 'align-items').and('eq',expectedResult.alignItems);
        })
    })
  }) 
  