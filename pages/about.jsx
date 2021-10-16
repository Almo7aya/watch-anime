import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function AboutPage() {
  return (<h2>About~</h2>)
}

export const getServerSideProps = async (ctx) => {
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale, ['common']))
    }
  }
}
