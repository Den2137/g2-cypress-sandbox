it('Cypress commands for quering elements', () =>{
    cy.visit('http://localhost:8080/commands/querying');

    // cy.wait(5000);
    cy.get('#query-btn', {timeout: 10000}).should('contain', 'Button');

    cy.get('.query-list').contains('bananas').should('have.class', 'third'); // .get().contains()
    cy.contains('bananas').should('have.class', 'third'); // cy.contains('some text')
    cy.contains('li', 'bananas').should('have.class', 'third'); // cy.contains('locator', 'some text')
    cy.contains(/^b\w+/).should('have.class', 'third'); // cy.contains(Regex)

    cy.get('.query-form').within(() => {
        cy.get('#inputEmail').should('have.attr', 'placeholder', 'Email');
        cy.get('#inputPassword').should('have.attr', 'placeholder', 'Password');

        //cy.get('#inputName').should('have.attr', 'placeholder', 'Name'); // not accessable
        //cy.root()
    })

    cy.root().should('contain', 'Button');


    cy.visit('http://localhost:8080/commands/traversal');
    cy.get('.traversal-breadcrumb.breadcrumb').children('li').eq(0).should('contain', 'Home');
    cy.get('.traversal-breadcrumb.breadcrumb').children('.active').should('contain', 'Data');

    cy.get('.badge.traversal-badge').closest('ul').should('have.class', 'list-group');
    
    cy.contains('John')
    .should('contain', 'John')
    .closest('table')
    .should('contain', '#');

    cy.get('.traversal-nav.nav.nav-tabs').find('li').filter('.active');
    cy.get('.traversal-nav.nav.nav-tabs li.active');

    cy.get('.pagination.traversal-pagination').find('span');

    cy.get('.table.traversal-table th').first().should('contain', '#');
    cy.get('.table.traversal-table th').eq(0).should('contain', '#');

    cy.get('.table.traversal-table th').last().should('contain', 'Last Name');

    cy.get('.traversal-ul')
    .contains('apples')
    .should('contain', 'apples')
    .next()
    .should('contain', 'oranges')
    .next()
    .should('contain', 'bananas')

    cy.get('.table.traversal-table td')
    .first()
    .should('contain', '1')
    .next()
    .should('contain', 'Jane')
    .next()
    .should('contain', 'Lane')

    cy.get('.traversal-next-all')
    .contains('oranges')
    .nextAll()
    .should('have.length', 3);

    cy.get('#fruits')
    .nextUntil('#veggies')
    .should('have.length', 3);

    cy.get('.traversal-disabled .btn.btn-default')
    .not('[disabled]')
    .should('contain', 'Button');

    cy.get('.traversal-disabled .btn.btn-default:not("[disabled]")').should('be.enabled');

    cy.get('.traversal-mark')
    .should('contain', 'highlight')
    .parent()
    .should('contain', 'Morbi leo risus, porta ac consectetur ac, ')
    .parent()
    .should('have.class', 'well');

    cy.get('.traversal-cite')
    .should('contain', 'Source Title')
    .parents()
    .should('match', 'blockquote')
})