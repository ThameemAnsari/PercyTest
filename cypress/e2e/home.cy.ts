describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');
    cy.percySnapshot('Home');
    cy.get('[data-cy="driver"]').click();
    


    cy.percySnapshot('DriverName');


    cy.get('[data-cy="driverName"]').find('input').type('Pavan Alapati');
    cy.get('[data-cy="aadharCard"]').find('input').type('479647177584');

    cy.percySnapshot('DrivingLiasnace');


    cy.get('[data-cy="DrivingLiasnace"]').find('input').type('AP03720120034865');
    cy.get('[data-cy="ContactCell"]').find('input').type('9533852285');
    cy.get('[data-cy="phonePayNo"]').find('input').type('9533852285');
    cy.percySnapshot('Register');
    cy.get('[data-cy="Register"]').click();

    cy.get('[data-cy="driverDetails"]').click();

    


  })
})

//driverName
//aadharCard
//DrivingLiasnace
//ContactCell
//phonePayNo
// Register
