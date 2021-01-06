import React from 'react'
import classes from './index.module.css'

const Tile = ({ id }) => {
  const styles = {}
  return (
    <div className={classes.Tile} style={styles}>
      Tile
    </div>
  )
}
Tile.defaultProps = { width: 'auto' }

export default Tile
