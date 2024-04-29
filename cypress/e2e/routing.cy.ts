describe('i18n-routing', () => {
  type Scenario = {
    browserLanguage: string
    entryPath: string
    expectedRedirectPath: string
    expectedH1Text: string
  }

  const scenarios = [
    {
      browserLanguage: 'en',
      entryPath: '/en/about-us',
      expectedRedirectPath: '/en/about-us',
      expectedH1Text: 'About us',
    },
    {
      browserLanguage: 'de',
      entryPath: '/de/ueber-uns',
      expectedRedirectPath: '/de/ueber-uns',
      expectedH1Text: 'Über uns',
    },
    {
      browserLanguage: 'en',
      entryPath: '/about-us',
      expectedRedirectPath: '/en/about-us',
      expectedH1Text: 'About us',
    },
    {
      browserLanguage: 'de',
      entryPath: '/ueber-uns',
      expectedRedirectPath: '/de/ueber-uns',
      expectedH1Text: 'Über uns',
    },
    {
      browserLanguage: 'de',
      entryPath: '/about-us',
      expectedRedirectPath: '/de/ueber-uns',
      expectedH1Text: 'Über uns',
    },
    {
      browserLanguage: 'en',
      entryPath: '/ueber-uns',
      expectedRedirectPath: '/de/ueber-uns',
      expectedH1Text: 'Über uns',
    },
  ] satisfies Scenario[]

  scenarios.forEach((scenario) => {
    it(`should redirect ${scenario.entryPath} to ${scenario.expectedRedirectPath} when browser language is ${scenario.browserLanguage}`, () => {
      cy.visit(scenario.entryPath, {
        onBeforeLoad(win: Cypress.AUTWindow) {
          Object.defineProperty(win.navigator, 'language', { value: scenario.browserLanguage });
        },
      })
      cy.location('pathname').should('eq', scenario.expectedRedirectPath)
      cy.get('h1').should('contain.text', scenario.expectedH1Text)
    })
  })
})