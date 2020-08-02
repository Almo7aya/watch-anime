import React from 'react'

import styles from './AnimeList.module.scss'
import AnimeListItem from '../AnimeListItem'
import data from '../../utils/data.json'

export default function AnimeList() {
  const list = data.response.data

  return (
    <section className={styles.animelist}>
      {
        list.map((anime) => {
          return (<AnimeListItem animeData={anime} key={anime.anime_id} />)
        })
      }
    </section>
  )
}
