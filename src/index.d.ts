// load type definitions that come with Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Wait for the network to be idle for N milliseconds.
     * @param waitMs Milliseconds after the last network call
     */
    waitForNetworkIdle(
      waitMs: number,
      options?: Partial<WaitForNetworkIdleOptions>,
    ): Chainable<WaitForNetworkIdleResult>

    /**
     * Wait for the network to be idle for N milliseconds.
     * @param pattern URL pattern to spy on
     * @param waitMs Milliseconds after the last network call
     */
    waitForNetworkIdle(
      pattern: string,
      waitMs: number,
      options?: Partial<WaitForNetworkIdleOptions>,
    ): Chainable<WaitForNetworkIdleResult>

    /**
     * Wait for the network to be idle for N milliseconds.
     * @param method HTTP method to spy on
     * @param pattern URL pattern to spy on
     * @param waitMs Milliseconds after the last network call
     */
    waitForNetworkIdle(
      method: string,
      pattern: string,
      waitMs: number,
      options?: Partial<WaitForNetworkIdleOptions>,
    ): Chainable<WaitForNetworkIdleResult>

    /**
     * Starts spying on the matching network calls
     * @see https://github.com/bahmutov/cypress-network-idle#readme
     */
    waitForNetworkIdlePrepare(
      options: WaitForNetworkIdlePrepareOptions,
    ): Chainable<WaitForNetworkIdleResult>
  }

  interface WaitForNetworkIdleOptions {
    method?: string
    pattern: string
    alias: string
    timeout: number
    interval: number
    log?: boolean
  }

  interface WaitForNetworkIdleResult {
    started: number
    finished: number
    waited: number
    callCount: number
  }

  interface WaitForNetworkIdlePrepareOptions {
    method?: string
    pattern: string
    alias: string
    log?: boolean
    /**
     * Fail the test if any of the matching network calls
     * returns 4xx status code
     */
    failOn4xx?: boolean
    /**
     * Fail the test if any of the matching network calls
     * returns 5xx status code
     */
    failOn5xx?: boolean
  }
}
