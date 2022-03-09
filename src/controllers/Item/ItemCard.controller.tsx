import { useState } from 'react'
import {
  ItemCardComponent,
  ItemCardProps,
} from '../../components/Item/ItemCard.component'

export const ItemCardController = (props: {
  title: string
  stock: number
  pic: string
  price: number
}) => {
  const [quantitySelected, setQuantitySelected] = useState(1)

  const addQuantity = () => {
    setQuantitySelected(quantitySelected + 1)
  }

  const substractQuantity = () => {
    setQuantitySelected(quantitySelected - 1)
  }

  return (
    <ItemCardComponent
      {...props}
      quantitySelected={quantitySelected}
      addQuantity={addQuantity}
      substractQuantity={substractQuantity}
    />
  )
}
