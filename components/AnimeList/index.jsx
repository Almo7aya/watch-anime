import React from 'react'

import styles from './AnimeList.module.scss'

import data from '../../utils/data.json'

export default function AnimeList() {
  const list = data.response.data

  return (
    <section className={styles.animelist}>
      {
        list.map((anime) => {
          return (<div key={anime.anime_id}>
            <p>{anime.anime_name}</p>
            <p>{anime.anime_description}</p>
            <p>{anime.anime_status}</p>
            <p>{anime.anime_type}</p>
            <p>{anime.anime_release_year}</p>
          </div>)
        })
      }
    </section>
  )
}
