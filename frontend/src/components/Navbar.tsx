import React from 'react'
import { PageHeader } from 'antd'

import styles from '../styles/Navbar.module.css'
import { useHistory } from 'react-router-dom'
import { AppRoutes } from '../routes'

export const Navbar = () => {
  const history = useHistory()

  const goToHome = () => {
    history.push(AppRoutes.HOME)
  }

  return (
    <PageHeader
      className={styles.wrapper}
      title={
        <div className="pointer" onClick={goToHome}>
          Havbruksloggen Coding Challenge
        </div>
      }
    />
  )
}
