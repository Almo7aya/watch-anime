import React, { useState, useEffect } from 'react'
import propTypes from 'prop-types'
import { useRouter } from 'next/router'

import styles from './SearchBox.module.scss'
import { useTranslation } from '../../i18n'

export default function SearchBox({ initialSearchValue = '', onValueChange }) {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState(initialSearchValue)
  const { t } = useTranslation()
  useEffect(() => {
    // to change the pathname value dynamically
    router.push(`/search/[[...query]]?query=${searchValue}`, `/search/${searchValue}`, { shallow: true })

    // a workaround to disable the effect in the first render
    return () => {
      onValueChange(searchValue)
    }
  }, [searchValue])

  return (
    <input className={styles.searchbox} onChange={(e) => {
      setSearchValue(e.target.value)
    }} value={searchValue} placeholder={t('search')} />
  )
}

SearchBox.propTypes = {
  initialSearchValue: propTypes.string,
  onValueChange: propTypes.func.isRequired
}
