import { yourwayAPI } from '../../lib/api/yourway-api'
import { config } from '../../lib/config/config'

export const getAll = () => {
  const project = {}
  const match = {
    operationType: { $ne: 'D' },
  }
  const sort = {}
  const group = {}
  const limit = 0
  const skip = 0

  const aggregations = {
    project,
    match,
    sort,
    group,
    limit,
    skip,
  }

  let response: any = yourwayAPI.get(
    `/product/withauth/${config.database}?aggregations=${JSON.stringify(
      aggregations
    )}`
  )

  return {
    type: 'GET_PRODUCT',
    payload: response,
  }
}

export const reset = () => {
  return {
    type: 'REINTENTAR',
  }
}

export const getOne = (id: string) => {
  const project = {}
  const match = {
    operationType: { $ne: 'D' },
    _id: { $oid: id}
  }
  const sort = {}
  const group = {}
  const limit = 1
  const skip = 0

  const aggregations = {
    project,
    match,
    sort,
    group,
    limit,
    skip,
  }

  let response: any = yourwayAPI.get(
    `/product/withauth/${config.database}?aggregations=${JSON.stringify(
      aggregations
    )}`
  )

  return {
    type: 'GET_PRODUCT_BY_ID',
    payload: response,
  }
}


