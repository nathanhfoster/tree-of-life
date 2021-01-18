import { AppActionTypes } from '../App/types'

const { PUBLIC_URL } = process.env

export const ResetRedux = () => ({ type: AppActionTypes.REDUX_RESET })

export const GetAppVersion = () => (dispatch, getState) => {
  const {
    App: { version },
  } = getState()
  return fetch(`${PUBLIC_URL}/version.txt`)
    .then(({ data }) => {
      dispatch({ type: AppActionTypes.APP_SET_VERSION, payload: data })

      return { currentVersion: version, latestVersion: data }
    })
    .catch(({ response }) => console.log('ERROR: ', response))
}

export const LoadReducerState = state => dispatch => {
  const payload = state || {}
  dispatch({
    type: AppActionTypes.LOAD_PERSISTED_STATE,
    payload,
  })
  return new Promise(resolve => resolve(payload))
}