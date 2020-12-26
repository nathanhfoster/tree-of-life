import React from 'react'
import { connect } from 'store'
import { Home } from 'views'
import { Footer } from 'components'

const App = ({}) => {
  return (
    <main className='App'>
      <Home />
      <Footer />
    </main>
  )
}

const mapStateToProps = ({}) => ({})

export default connect(mapStateToProps)(App)
