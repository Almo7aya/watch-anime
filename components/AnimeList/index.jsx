import React from 'react'
import propTypes from 'prop-types'

import styles from './AnimeList.module.scss'
import AnimeListItem from '../AnimeListItem'

export default function AnimeList({ animesData }) {
  return (
    <section className={styles.animelist}>
      {
        animesData.map((anime) => {
          return (<AnimeListItem animeData={anime} key={anime.anime_id} />)
        })
      }
    </section>
  )
}

AnimeList.propTypes = {
  animesData: propTypes.array.isRequired
}
