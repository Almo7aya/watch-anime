import React from 'react'
import MaterialIcon from '@material/react-material-icon'

import styles from './Navbar.module.scss'

import ActiveLink from '../ActiveLink'

export default function Navbar () {
  return (<>
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        <li className={styles.nav_list_item}>
          <ActiveLink activeClassName="active" href="/" >
            <a>
              <MaterialIcon icon="home" />
              <p>home</p>
            </a>
          </ActiveLink>
        </li>
        <li className={styles.nav_list_item}>
          <ActiveLink activeClassName="active" href="/search" >
            <a>
              <MaterialIcon icon="search" />
              <p>search</p>
            </a>
          </ActiveLink>
        </li>
        <li className={styles.nav_list_item}>
          <ActiveLink activeClassName="active" href="/about">
            <a>
              <MaterialIcon icon="info_outline" />
              <p>about</p>
            </a>
          </ActiveLink>
        </li>
      </ul>
    </nav>
  </>)
}
