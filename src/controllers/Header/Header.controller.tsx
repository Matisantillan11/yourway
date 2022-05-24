import React, { useContext } from 'react'
import { HeaderComponent } from '../../components/Header/Header.component'
import { AppContext } from '../../context/globalContext'

export const HeaderController = () => {
  const { state } = useContext(AppContext)
  return <HeaderComponent total={state.total} />
}
