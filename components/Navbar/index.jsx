import React from 'react'
import MaterialIcon from '@material/react-material-icon'

import styles from './Navbar.module.scss'
import { useTranslation } from '../../i18n'
import ActiveLink from '../ActiveLink'
import Navtools from '../Navtools'

export default function Navbar () {
  const { t } = useTranslation()

  return (<>
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        <li className={styles.nav_list_item}>
          <ActiveLink activeClassName="active" href="/" >
            <a>
              <MaterialIcon icon="home" />
              <p>{t('home')}</p>
            </a>
          </ActiveLink>
        </li>
        <li className={styles.nav_list_item}>
          <ActiveLink activeClassName="active" href="/search" >
            <a>
              <MaterialIcon icon="search" />
              <p>{t('search')}</p>
            </a>
          </ActiveLink>
        </li>
        <li className={styles.nav_list_item}>
          <ActiveLink activeClassName="active" href="/list" >
            <a>
              <MaterialIcon icon="list" />
              <p>{t('list')}</p>
            </a>
          </ActiveLink>
        </li>
        <li className={styles.nav_list_item}>
          <ActiveLink activeClassName="active" href="/about">
            <a>
              <MaterialIcon icon="info_outline" />
              <p>{t('about')}</p>
            </a>
          </ActiveLink>
        </li>
      </ul>
      <Navtools />
    </nav>
  </>)
}
