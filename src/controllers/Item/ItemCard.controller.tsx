import { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import {
  ItemCardComponent,
  ItemCardProps,
} from '../../components/Item/ItemCard.component'
import { AppContext } from '../../context/globalContext'

export const ItemCardController = (props: {
  title: string
  stock: number
  pic: string
  price: number
  id: string
}) => {
  const [quantitySelected, setQuantitySelected] = useState(1)
  const { state, addToCart, removeFromCart } = useContext(AppContext)

  const addQuantity = () => {
    setQuantitySelected(quantitySelected + 1)
  }

  const substractQuantity = () => {
    setQuantitySelected(quantitySelected - 1)
  }

  const navigate = useNavigate()
  const redirectToDetails = () => {
    navigate(`details/${props.id}`)
  }


  return (
    <ItemCardComponent
      {...props}
      quantitySelected={quantitySelected}
      addQuantity={addQuantity}
      substractQuantity={substractQuantity}
      redirectToDetails={redirectToDetails}
      addToCart={addToCart}
    />
  )
}
