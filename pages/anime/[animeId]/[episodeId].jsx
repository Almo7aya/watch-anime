import React from 'react'
import propTypes from 'prop-types'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import httpClient from '../../../utils/http-client'
import EpisodeDetails from '../../../components/EpisodeDetails'

const ENDPOINT = 'episode-details'

export default function EpisodePage({ animeId, data, status }) {
  if (!data || status < 200) return <h1>SERVER IS OUT!</h1>

  const { response: { data: [dataArray] } } = data

  return (
    <>
      <EpisodeDetails data={dataArray} animeId={animeId} />
    </>
  )
}


export const getServerSideProps = async ({ query, locale }) => {
  const { animeId, episodeId } = query
  let res
  try {
    res = await httpClient.get(ENDPOINT, {
      params: {
        anime_id: animeId,
        episode_id: episodeId
      }
    })
  } catch (e) {
    res = {
      data: null,
      status: 500
    }
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      animeId,
      data: res.data,
      status: res.status
    }
  }
}

EpisodePage.propTypes = {
  data: propTypes.object.isRequired,
  status: propTypes.number.isRequired,
  animeId: propTypes.string,
  episodeId: propTypes.string
}
