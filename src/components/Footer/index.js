import React from 'react'
import { connect } from 'store'
import styles from './index.module.css'

const Footer = ({ version }) => {
  return <footer className={styles.Footer}>V: {version}</footer>
}

const mapStateToProps = ({ App: { version } }) => ({ version })

export default connect(mapStateToProps)(Footer)
