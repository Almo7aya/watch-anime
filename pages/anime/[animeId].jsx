import React from 'react'
import propTypes from 'prop-types'

import { useTranslation } from '../../i18n'
import Topbar from '../../components/Topbar'
import AnimeDetails from '../../components/AnimeDetails'
import httpClient from '../../utils/http-client'

const ENDPOINT = 'anime-details'

export default function AnimePage({ animeId, data, status }) {
  const { t } = useTranslation()

  if (!data || status < 200) return <h1>SERVER IS OUT!</h1>

  const { response } = data

  return (
    <>
      <Topbar heading={response.anime_name} />
      <AnimeDetails data={response} />
    </>
  )
}

AnimePage.getInitialProps = async ({ query }) => {
  const { animeId } = query
  let res
  try {
    res = await httpClient.get(ENDPOINT, {
      params: {
        anime_id: animeId,
        fetch_episodes: 'No' // TODO: check this later
      }
    })
  } catch (e) {
    res = {
      data: null,
      status: 500
    }
  }

  return {
    namespacesRequired: ['common'],
    animeId,
    data: res.data,
    status: res.status
  }
}

AnimePage.propTypes = {
  data: propTypes.object.isRequired,
  status: propTypes.number.isRequired,
  animeId: propTypes.string
}
