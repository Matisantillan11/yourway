import { useState } from 'react'
import { ItemCartComponent } from '../../components/Item/ItemCart.component'

export const ItemCartController = () => {
  const [quantitySelected, setQuantitySelected] = useState(1)

  const addQuantity = () => {
    setQuantitySelected(quantitySelected + 1)
  }

  const substractQuantity = () => {
    setQuantitySelected(quantitySelected - 1)
  }

  return (
    <ItemCartComponent
      quantitySelected={quantitySelected}
      addQuantity={addQuantity}
      substractQuantity={substractQuantity}
    />
  )
}
