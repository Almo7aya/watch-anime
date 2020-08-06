import React from 'react'
import propTypes from 'prop-types'

import { useTranslation } from '../i18n'
import Topbar from '../components/Topbar'
import AnimeList from '../components/AnimeList'
import httpClient from '../utils/http-client'

export default function IndexPage({ data, status }) {
  const { t } = useTranslation()

  if (!data || status < 200) return <h1>SERVER IS OUT!</h1>

  const { response: { data: animesData } } = data

  return (
    <>
      <Topbar heading={t('latest-animes')} />
      <AnimeList animesData={animesData} />
    </>
  )
}

IndexPage.getInitialProps = async () => {
  let res
  try {
    res = await httpClient.get('homepage')
  } catch (e) {
    res = {
      data: null,
      status: 500
    }
  }

  return {
    namespacesRequired: ['common'],
    data: res.data,
    status: res.status
  }
}

IndexPage.propTypes = {
  data: propTypes.object.isRequired,
  status: propTypes.number.isRequired
}
