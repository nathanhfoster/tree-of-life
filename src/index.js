import 'css/index.css'
import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { LoadingScreen } from 'components'
import { ContextProvider } from 'store'
import * as reducers from 'store/reducers'

const Persistor = lazy(
  () => new Promise(resolve => setTimeout(() => resolve(import('./store/Persistor')), 2000)),
)

ReactDOM.render(
  <Suspense fallback={<LoadingScreen />}>
    <ContextProvider reducers={reducers}>
      <Persistor />
      <App />
    </ContextProvider>
  </Suspense>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
