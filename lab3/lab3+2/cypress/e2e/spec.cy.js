Cypress.on('uncaught:exception', (err) => {
  // Return false to ignore React hydration errors
  if (err.message.includes('Hydration')) {
    return false
  }
  // Allow other errors to fail the test
  return true
})

describe('Bookstore Main Page', () => {

  it('should display no books by default', () => {
    cy.visit('localhost:5173/'); 

    // Check if the page title is correct
    cy.get('.title h1').should('contain', 'Bookstore');
    
    // Check if the filters bar is visible
    cy.get('.filtersBar').should('be.visible');
    
    // Check if the books table is visible
    cy.get('.booksTable').should('be.visible');
    
    // Check if the "No books found" message is displayed
    cy.contains('No books found').should('be.visible')
  });

  it('should filter books by title', () => {
    cy.visit('localhost:5173/');
    
    // Enter text in the title search input
    cy.get('input', {timeout: 1000000}).should('be.enabled')
    cy.get('input[type="text"]', {timeout: 1000000}).first().type('Diuna');
    
    // Click the "Show" button
    cy.contains('button', 'Show').click();
    
    // Check if only one book is displayed
    cy.get('.booksTable tr').should('have.length', 2); // 1 book + header
    
    // Check if the book details are correct
    cy.get('.booksTable tr').eq(1).within(() => {
      cy.get('th').eq(0).should('contain', 'Diuna');
      cy.get('th').eq(1).should('contain', 'Frank Herbert');
      cy.get('th').eq(2).should('contain', '700');
      cy.get('th').eq(3).should('contain', '60');
      cy.get('th').eq(4).should('contain', 'hard');
    });
  });

  it('should filter books by one letter', () => {
    cy.visit('localhost:5173/');
    
    // Enter one letter in the title search input
    cy.get('input', {timeout: 1000000}).should('be.enabled')
    cy.get('input[type="text"]', {timeout: 1000000}).first().type('D');

    // Click the "Show" button
    cy.contains('button', 'Show').click();
    
    // Check if two books are displayed
    cy.get('.booksTable tr').should('have.length', 3); // 2 books + header
    
  });
})