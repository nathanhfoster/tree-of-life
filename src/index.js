import "css/index.css"
import React, { lazy, Suspense } from "react"
import ReactDOM from "react-dom"
import "./index.css"
import Persistor, { TreeOfLifeDB, INDEX_DB_KEY } from "./store/Persistor"
import * as serviceWorker from "./serviceWorker"
import { LoadingScreen } from "components"
import { ContextProvider } from "store"
import * as reducers from "store/reducers"
import { lazyDelay } from "utils"

const App = lazy(() =>
  import('./App').then(async result => {
    await TreeOfLifeDB.getItem(INDEX_DB_KEY)
    return lazyDelay(0)(result)
  }),
)
ReactDOM.render(
  <Suspense fallback={<LoadingScreen />}>
    <ContextProvider reducers={reducers}>
      <Persistor />
      <App />
    </ContextProvider>
  </Suspense>,
  document.getElementById("root")
)

serviceWorker.unregister()
