import { useState } from 'react'
import { ItemCartComponent, ItemCartProps } from '../../components/Item/ItemCart.component'

export const ItemCartController = (props: ItemCartProps) => {
  const [quantitySelected, setQuantitySelected] = useState(1)

  const addQuantity = () => {
    setQuantitySelected(quantitySelected + 1)
  }

  const substractQuantity = () => {
    setQuantitySelected(quantitySelected - 1)
  }

  return (
    <ItemCartComponent
      { ...props}
    />
  )
}
