import React from 'react'
import Layout from 'components/Layout/Layout'
import { shallow } from 'enzyme'

describe('(Layout) Layout', () => {
  it('renders as a <div>', () => {
    shallow(<Layout />).should.have.tagName('div')
  })

  it('renders a project title', () => {
    shallow(<Layout />).find('h1').should.have.text('React Redux Starter Kit')
  })

  it('renders its children inside of the viewport', () => {
    const Child = () => <h2>child</h2>
    shallow(
      <Layout>
        <Child />
      </Layout>
    )
      .find('.page-layout__viewport')
      .should.contain(<Child />)
  })
})
