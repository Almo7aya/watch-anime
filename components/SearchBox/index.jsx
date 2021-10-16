import React, { useState, useEffect } from 'react'
import propTypes from 'prop-types'
import { useRouter } from 'next/router'
import { useDebounce } from 'use-debounce'

import styles from './SearchBox.module.scss'
import { useTranslation } from 'next-i18next'

export default function SearchBox({ initialSearchValue = '', onValueChange }) {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState(initialSearchValue)
  const { t } = useTranslation()

  const [debouncedSearchValue] = useDebounce(searchValue, 500)

  useEffect(() => {
    // to change the pathname value dynamically
    router.push(`/search/[[...query]]?query=${debouncedSearchValue}`, `/search/${debouncedSearchValue}`, { shallow: false })

    onValueChange(debouncedSearchValue)
  }, [debouncedSearchValue])

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
