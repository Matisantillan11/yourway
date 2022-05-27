import React, { useContext, useEffect, useMemo, useState } from 'react'
import { HeaderComponent } from '../../components/Header/Header.component'
import { AppContext } from '../../context/globalContext'
import { CartItemContext } from '../../interfaces/cart.interface'

export const HeaderController = () => {
  const { state, refreshCart } = useContext(AppContext)

  const persistedCart: any = localStorage.getItem('cart')
  const parsedCart: CartItemContext[] = JSON.parse(persistedCart)

  const calculateTotal = () => {
   
    let totalItems: number = 0 
    if(state.cart.length === 0 && parsedCart.length > 0){
      parsedCart.map((itemCart: CartItemContext) => totalItems = totalItems + itemCart.quantity)[0]
    }

    if(state.cart.length > 0 && state.total){
      totalItems = state.total
    }

    console.log({totalItems})

    if(totalItems !== undefined) return totalItems
    return 0
  }

  const total = calculateTotal()

  return <HeaderComponent total={total} />
}
