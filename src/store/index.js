import { useSelector, useDispatch } from './hooks'
import connect from './provider/connect'
import { ContextProvider, ContextConsumer, store, storeFactory } from './provider'
import Persistor from './Persistor'

export {
  useSelector,
  useDispatch,
  connect,
  ContextProvider,
  ContextConsumer,
  store,
  storeFactory,
  Persistor,
}
