import React from 'react'
import propTypes from 'prop-types'
import useInfiniteScroll from '../../hooks/useInfiniteScroll'

import styles from './AnimeList.module.scss'
import AnimeListItem from '../AnimeListItem'
import withInfiniteLoading from '../withInfiniteLoading'

const AnimeList = ({ animesData, isLoading, loadMore, hasMoreData = true }) => {
  const infiniteRef = useInfiniteScroll({
    onLoadMore: loadMore,
    hasNextPage: hasMoreData,
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
        hasMoreData ? isLoading ? <p>Loading...</p> : <button onClick={loadMore}>Loadmore</button> : null
      }
    </>
  )
}

AnimeList.propTypes = {
  animesData: propTypes.array.isRequired,
  isLoading: propTypes.bool.isRequired,
  hasMoreData: propTypes.bool,
  loadMore: propTypes.func.isRequired
}

export default withInfiniteLoading(AnimeList)
