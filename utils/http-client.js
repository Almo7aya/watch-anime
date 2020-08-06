import Axios from 'axios'

const httpClient = Axios.create({
  baseURL: 'https://watch-anime-api.netlify.app/.netlify/functions/server/v1/',
  params: {
    _limit: 15
  },
  headers: {
    'X-CLIENT-TYPE': 'Watch Anime Web'
  }
})

export default httpClient
