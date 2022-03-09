export default interface State {
  status: number
  message: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any | any[] | {}
  fetching: boolean
  fetched: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any
}
