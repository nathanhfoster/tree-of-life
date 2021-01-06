import {
  useContext as reactUseContext,
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
  useMemo,
} from 'react'
import { ContextConsumer } from '../provider'
import { shallowEquals } from '../utils'

export const useContext = (context = ContextConsumer) => reactUseContext(context)

const usePrevious = value => {
  let ref = useRef(value)

  useEffect(() => {
    ref.current = value
  })

  return ref.current
}

export const defaultIsEqual = (nextSelector, previousSelector) =>
  shallowEquals(previousSelector, nextSelector)

export const useSelector = (
  mapStateToSelector,
  isEqual = defaultIsEqual,
  context = ContextConsumer,
) => {
  const { state } = useContext(context)

  const [selector, setSelector] = useState(mapStateToSelector(state))

  const previousSelector = usePreviousValue(selector)

  useLayoutEffect(() => {
    if (previousSelector) {
      const nextSelector = mapStateToSelector(state)
      const shouldUpdate = !isEqual(nextSelector, previousSelector)
      if (shouldUpdate) {
        setSelector(nextSelector)
      }
    }
  }, [state])

  return selector
}

export const useDispatch = (context = ContextConsumer) => {
  const { dispatch } = useContext(context)
  const memoizedDispatch = useMemo(() => dispatch, [dispatch])

  return memoizedDispatch
}
