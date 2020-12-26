import { AppActionTypes } from './types'

const DEFAULT_STATE_APP = {
  version: 1,
}

const App = (state = DEFAULT_STATE_APP, action) => {
  const { type, payload } = action
  switch (type) {
    default:
      return state
  }
}

export { DEFAULT_STATE_APP, App }
