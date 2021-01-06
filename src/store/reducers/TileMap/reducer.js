import { AppActionTypes } from '../App/types'
import { TileMapActionTypes } from './types'

const DEFAULT_STATE_TILE_MAP = {
  tiles: new Array(20).fill(0).map((e, i) => ({ id: i })),
}

const TileMap = (state = DEFAULT_STATE_TILE_MAP, action) => {
  const { type, payload } = action
  switch (type) {
    case AppActionTypes.LOAD_PERSISTED_STATE:
      return {
        ...state,
        ...payload.TileMap,
      }

    default:
      return state
  }
}

export { DEFAULT_STATE_TILE_MAP, TileMap }
