import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//components
import { HomeComponents as HomeComponent } from '../../components/Home/Home.components'

//interfaces
import { StoreType } from '../../store/reducers/index'

//actions
import * as productAction from '../../store/actions/product.action'

export const HomeController = () => {
  const dispatch = useDispatch()
  const productReducer = useSelector((store: StoreType) => store.productReducer)

  useEffect(() => {
    dispatch(productAction.getAll())
  }, [dispatch])

  const productList = useMemo(() => {
    if (productReducer.fetched && productReducer.data) {
      return productReducer.data
    } else return []
  }, [productReducer])

  return (
    <HomeComponent productList={productList} productReducer={productReducer} />
  )
}
