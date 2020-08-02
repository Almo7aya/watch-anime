import React from 'react'
import ReactDOM from 'react-dom'
import propTypes from 'prop-types'

import styles from './LightTheme.module.scss'
import { isServer } from '../../utils/helpers'

class LightTheme extends React.Component {
  constructor(props) {
    super(props)
    if (!isServer) {
      this.el = document.createElement('div')
      this.wrapper = document.getElementById('light-theme-holder')
    }
  }

  componentDidMount() {
    if (!isServer) {
      this.wrapper.appendChild(this.el)
      requestAnimationFrame(() => {
        document.querySelector(':root')
          .style.setProperty('--forced-light-theme', '#efeeee')
      })
    }
  }

  componentWillUnmount() {
    if (!isServer) {
      this.wrapper.removeChild(this.el)
      requestAnimationFrame(() => {
        document.querySelector(':root')
          .style.setProperty('--forced-light-theme', 'var(--primary-color)')
      })
    }
  }

  render() {
    if (isServer) return null

    const element = this.props.isFull ? <div className={styles.lighttheme_full} /> : <div className={styles.lighttheme_mini} />
    return ReactDOM.createPortal(element, this.el)
  }
}

LightTheme.propTypes = {
  isFull: propTypes.bool.isRequired
}

export default LightTheme
