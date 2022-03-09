import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//components
import { LoginModalComponent } from '../../components/Modal/LoginModal.component'
//actions
import * as loginAction from '../../store/actions/Login.action'
//interface
import { StoreType } from '../../store/reducers/index'
//hooks
import { useValidateForm } from '../../hooks/useValidateForm'

export const LoginModalController = (props: any) => {
  const { validateField } = useValidateForm()

  const dispatch = useDispatch()
  const loginReducer = useSelector((store: StoreType) => store.loginReducer)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [formTested, setFormTested] = useState(false)

  const checkAllFields = (email: string, password: string) => {
    setFormTested(!formTested)

    if (validateField('email', email) && validateField('text', password)) {
      return true
    } else {
      window.scrollTo(0, 0)
      return false
    }
  }

  const login = (email: string, password: string) => {
    if (checkAllFields(email, password)) {
      dispatch(loginAction.login(email, password))
    }
  }

  const clearAllFields = () => {
    setEmail('')
    setPassword('')
    props.onClose()
  }

  return (
    <LoginModalComponent
      login={login}
      formTested={formTested}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      loginReducer={loginReducer}
      isOpen={props.isOpen}
      onClose={props.onClose}
      clearAllFields={clearAllFields}
    />
  )
}
