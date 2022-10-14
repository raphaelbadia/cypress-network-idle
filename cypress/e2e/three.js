/// <reference path="../../src/index.d.ts" />
// @ts-check

import '../..'

// https://github.com/bahmutov/cypress-network-idle/issues/49
it('checks 3 calls separately', () => {
  cy.waitForNetworkIdlePrepare({
    method: 'GET',
    pattern: '/after/*',
    alias: 'three',
  })
  cy.visit('/three')
  cy.log('**first call**')
  cy.waitForNetworkIdle('@three', 2000)
    .should('include.keys', 'waited', 'callCount')
    .then(({ waited, callCount }) => {
      expect(waited, 'waited ms').to.be.within(3000, 3500)
      expect(callCount, 'callCount').to.equal(1)
    })
    .log('**done waiting 1st**')

  cy.log('**second call**')
  cy.waitForNetworkIdle('@three', 2000, { timeout: 3_000 })
  // .should('include.keys', 'waited', 'callCount')
  // .then(({ waited, callCount }) => {
  //   expect(waited, 'waited ms').to.be.within(3000, 3500)
  //   expect(callCount, 'callCount').to.equal(1)
  // })
  // .log('**done waiting 2nd**')
})
