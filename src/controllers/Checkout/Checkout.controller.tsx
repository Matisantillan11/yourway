import React, { useState } from 'react'
import { CheckoutComponent } from '../../components/Checkout/Checkout.component'

export const CheckoutController = () => {
  const [cardNumber, setCardNumber] = useState('4509953566233704')
  const [name, setName] = useState('Matias Santillan')
  const [expireMonth, setExpireMonth] = useState('11')
  const [expireYear, setExpireYear] = useState('25')
  const [cvv, setCvv] = useState('123')
  const [cardFocusCVV, setCardFocusCVV] = useState(false)

  return (
    <CheckoutComponent
      cardNumber={cardNumber}
      name={name}
      expireMonth={expireMonth}
      expireYear={expireYear}
      cvv={cvv}
      cardFocusCVV={cardFocusCVV}
      setCardNumber={setCardNumber}
      setName={setName}
      setExpireMonth={setExpireMonth}
      setExpireYear={setExpireYear}
      setCvv={setCvv}
      setCardFocusCVV={setCardFocusCVV}
    />
  )
}
