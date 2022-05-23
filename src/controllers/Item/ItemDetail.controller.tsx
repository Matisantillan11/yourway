import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ItemDetailComponent } from '../../components/Item/ItemDetail.component'
import { Product } from '../../interfaces/interfaces'
import { StoreType } from '../../store/reducers'
import * as productAction from '../../store/actions/product.action'

export const ItemDetailController = () => {
  const params: any = useParams()
  const dispatch = useDispatch()
  const productReducer = useSelector((store: StoreType) => store.productReducer)
  
  useEffect(() => window.scrollTo(0,0), [])

  useEffect(() => {
    if(!Array.isArray(productReducer.data) && !productReducer.fetched && !productReducer.fetching){
      dispatch(productAction.getOne(params.id))
    }
  }, [productReducer, params])

  
  const product = useMemo(() => {
    if(productReducer.fetched && Array.isArray(productReducer.data)) return productReducer.data.filter((item: Product) => item._id === params.id)[0]
    if(productReducer.fetched && Object.keys(productReducer.data).length > 0) return productReducer.data
    return []
  }, [ productReducer ])

 

  return <ItemDetailComponent product={product} status={productReducer.fetching}/>
  
}
