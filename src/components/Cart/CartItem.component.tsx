import { HStack, Image, Text } from '@chakra-ui/react'
import React, { Fragment } from 'react'
import { IoTrash } from 'react-icons/io5'
import { useCurrencyFormater } from '../../hooks/useCurrencyFormater'

export interface CartItemProps {
  id: string
  image: string
  title: string
  quantity: string
  price: string
  onDelete: (id: string) => void
}

export const CartItemComponent = ({
  id,
  image,
  title,
  quantity,
  price,
  onDelete
}: CartItemProps) => {
  const convertedPrice = useCurrencyFormater(parseInt(price))

  return (
    <Fragment>
      <HStack width="100%">
        <Image
          width={'100px'}
          height={'80px'}
          src={image}
          alt={title}
        />

        <Text>{title}</Text>
        <Text> {quantity && `(${quantity})`} </Text>

        <HStack position="absolute" right={10} w={100}>
          <Text fontWeight="bold">{convertedPrice}</Text>
          <IoTrash size={25} onClick={() => onDelete(id)}/>
        </HStack>
      </HStack>
    </Fragment>
  )
}
