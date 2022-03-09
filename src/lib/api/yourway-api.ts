import axios from 'axios'
import { config } from '../config/config'

export const yourwayAPI = axios.create({ baseURL: config.url })
