import React from 'react'

export const useCurrencyFormater = (value: number) => {
  const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0
  })

  return formatter.format(value)
}
