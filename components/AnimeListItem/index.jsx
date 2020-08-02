import React from 'react'
import propTypes from 'prop-types'

import styles from './AnimeListItem.module.scss'
import { useTranslation } from '../../i18n'

export default function AnimeListItem({ animeData, showLastEpisode = true }) {
  const { t } = useTranslation()

  return (
    <div className={styles.animelistitem}>

      <div className={styles.floating_details}>
        <img className={styles.floating_details_img} src={animeData.anime_cover_image_url} />
        <p className={styles.floating_details_rating}>{animeData.anime_rating}</p>
        {
          showLastEpisode && <p className={styles.floating_details_last_episode_name}>{animeData.latest_episode_name}</p>
        }
      </div>

      <div className={styles.static_details}>
        <p className={styles.static_details_title}>{animeData.anime_name}</p>
        <div className={styles.static_details_bottom_row}>
          <p>{animeData.anime_release_year}</p>
          <p>{animeData.anime_season && t(animeData.anime_season)}</p>
        </div>
      </div>
    </div>
  )
}

AnimeListItem.propTypes = {
  animeData: propTypes.object.isRequired,
  showLastEpisode: propTypes.bool
}