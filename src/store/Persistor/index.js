import { useLayoutEffect, useEffect } from 'react'
import PropTypes from 'prop-types'
import localforage from 'localforage'
import { connect } from 'store'
import { LoadReducerState } from 'store/reducers/App/actions'
import { usePreviousValue } from 'store/hooks'

export const DATEBASE_SIZE = 5000 * 1024 * 1024

export const INDEX_DB_KEY = 'TreeOfLifeDB'

export const TreeOfLifeDB = localforage.createInstance({
  driver: localforage.WEBSQL, // Force WebSQL; same as using setDriver()
  name: INDEX_DB_KEY,
  version: 1.0,
  size: DATEBASE_SIZE, // Size of database, in bytes. WebSQL-only for now.
  storeName: 'keyvaluepairs', // Should be alphanumeric, with underscores.
  description: 'Astral Tree local database',
})

const mapStateToProps = state => ({ state })

const mapDispatchToProps = { LoadReducerState }

const Persistor = ({ debounce, whenQuotaExceeds, state, LoadReducerState }) => {
  console.log(state)
  const prevState = usePreviousValue(state)

  useLayoutEffect(() => {
    ;(async () => {
      const persistedSate = await TreeOfLifeDB.getItem(INDEX_DB_KEY).then(s => JSON.parse(s))
      LoadReducerState(persistedSate)
    })()
  }, [])

  useEffect(() => {
    const persistDebounce = setTimeout(() => {
      try {
        TreeOfLifeDB.setItem(INDEX_DB_KEY, JSON.stringify(state))
      } catch (e) {
        console.log(e)
      }
    }, debounce)

    return () => {
      clearTimeout(persistDebounce)
      // TreeOfLifeDB.clear()
    }
  }, [state, prevState, debounce, whenQuotaExceeds])

  return null
}

Persistor.propTypes = {
  debounce: PropTypes.number.isRequired,
  whenQuotaExceeds: PropTypes.func,
  state: PropTypes.objectOf(PropTypes.object),
  LoadReducerState: PropTypes.func.isRequired,
}

Persistor.defaultProps = { debounce: 400 }

export default connect(mapStateToProps, mapDispatchToProps)(Persistor)
