import React from 'react'
import SearchBox from './SearchBox'

describe('<SearchBox />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SearchBox />)
  })
})