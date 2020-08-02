import React, { useState, useEffect } from 'react'
import propTypes from 'prop-types'
import { useRouter } from 'next/router'

import styles from './SearchBox.module.scss'

export default function SearchBox({ initialSearchValue = '', onValueChange }) {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState(initialSearchValue)

  useEffect(() => {
    // to change the pathname value dynamically
    router.push(`/search/[[...query]]?query=${searchValue}`, `/search/${searchValue}`, { shallow: true })

    onValueChange(searchValue)
  }, [searchValue])

  return (
    <input className={styles.searchbox} onChange={(e) => {
      setSearchValue(e.target.value)
    }} value={searchValue} />
  )
}

SearchBox.propTypes = {
  initialSearchValue: propTypes.string,
  onValueChange: propTypes.func.isRequired
}
