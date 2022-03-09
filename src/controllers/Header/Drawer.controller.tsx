import React, { useMemo } from 'react'
import { DrawerComponent } from '../../components/Header/Drawer.component'
import { useUserInformation } from '../../hooks/useUserInformation'
import { User } from '../../interfaces/interfaces'

export const DrawerController = (props: any) => {
  const { getUser } = useUserInformation()
  const user = getUser()

  const closeSession = () => {
    localStorage.clear()
    props.onCloseDrawer()
  }

  const userInformation = useMemo(() => {
    if (user) {
      return user
    } else return null
  }, [user])

  return (
    <DrawerComponent
      user={userInformation}
      closeSession={closeSession}
      isOpenDrawer={props.isOpen}
      onCloseDrawer={props.onCloseDrawer}
    />
  )
}
