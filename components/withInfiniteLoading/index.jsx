import React, { useState, useEffect } from 'react'
import propsTypes from 'prop-types'

import httpClient from '../../utils/http-client'
import config from '../../config.json'

export default function withInfiniteLoading(WrappedComponent) {
  const infiniteLoading = ({ initailAnimeData, endpoint = '', disableInfinite = false }) => {
    const [offset, setOffset] = useState(config.initialPageLimit)
    const [animesData, setAnimesData] = useState(initailAnimeData)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [hasMoreData, setHasMoreData] = useState(true)

    useEffect(() => {
      if (animesData.length === offset || disableInfinite) return // dont getData if the size is equal
      setIsLoading(true)

      httpClient.get(endpoint, {
        params: {
          _offset: offset,
          _limit: config.lazyLoadLimit
        }
      }).then(({ data }) => {
        setIsLoading(false)
        const newData = data.response.data
        if (newData.length < config.lazyLoadLimit) setHasMoreData(false)
        setAnimesData([...animesData, ...newData])
      }).catch((e) => {
        setError(e)
        setIsLoading(false)
      })
    }, [offset])

    return (<>
      <WrappedComponent animesData={animesData} isLoading={isLoading} loadMore={() => setOffset(offset + config.lazyLoadLimit)} error={error} hasMoreData={hasMoreData} />
    </>)
  }

  propsTypes.propsTypes = {
    initailAnimeData: propsTypes.array.isRequired,
    endpoint: propsTypes.string,
    disableInfinite: propsTypes.bool
  }

  return infiniteLoading
}
