import React from 'react'
import propTypes from 'prop-types'
import useInfiniteScroll from '../../hooks/useInfiniteScroll'

import styles from './AnimeList.module.scss'
import AnimeListItem from '../AnimeListItem'
import withInfiniteLoading from '../withInfiniteLoading'

const AnimeList = ({ animesData, isLoading, loadMore }) => {
  const infiniteRef = useInfiniteScroll({
    onLoadMore: loadMore,
    hasNextPage: true,
    loading: isLoading
  })

  return (
    <>
      <section ref={infiniteRef} className={styles.animelist}>
        {
          animesData.map((anime) => {
            return (<AnimeListItem animeData={anime} key={anime.anime_id} />)
          })
        }
      </section>
      {
        isLoading ? <p>Loading...</p> : <button onClick={loadMore}>Loadmore</button>
      }
    </>
  )
}

AnimeList.propTypes = {
  animesData: propTypes.array.isRequired,
  isLoading: propTypes.bool.isRequired,
  loadMore: propTypes.func.isRequired
}

export default withInfiniteLoading(AnimeList)
