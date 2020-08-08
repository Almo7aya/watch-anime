import Axios from 'axios'

import config from '../config.json'

const httpClient = Axios.create({
  baseURL: config.apiEndpoint,
  headers: {
    'X-CLIENT-TYPE': config['X-CLIENT-TYPE']
  }
})

export default httpClient
