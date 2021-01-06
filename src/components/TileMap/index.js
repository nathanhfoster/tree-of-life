import React from 'react'
import { useSelector, connect } from 'store'
import Tile from './Tile'
import classes from './index.module.css'

const tileSelector = ({ TileMap: { tiles } }) => tiles.map(tile => <Tile key={tile.id} {...tile} />)

const isEqual = (prevSelection, nextSelection) => prevSelection.length === nextSelection.length

const TileMap = ({ tiles }) => {
  const renderTiles = useSelector(tileSelector, isEqual)

  return <div className={classes.TileMap}>{renderTiles}</div>
}
const mapStateToProps = ({ TileMap: { tiles } }) => ({ tiles })
export default connect(mapStateToProps)(TileMap)
