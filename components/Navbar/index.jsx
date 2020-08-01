import React from 'react'
import Link from 'next/link'
import MaterialIcon from '@material/react-material-icon'

import styles from './Navbar.module.scss'

export default function Navbar () {
  return (<>
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        <li className={styles.nav_list_item}>
          <Link href="/" >
            <a>
              <MaterialIcon icon="home" />
              <p>home</p>
            </a>
          </Link>
        </li>
        <li className={styles.nav_list_item}>
          <Link href="/">
            <a>
              <MaterialIcon icon="search" />
              <p>search</p>
            </a>
          </Link>
        </li>
        <li className={styles.nav_list_item}>
          <Link href="/">
            <a>
              <MaterialIcon icon="info" />
              <p>about</p>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  </>)
}
