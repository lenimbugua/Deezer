const corsURL = 'https://deezer-cors-proxy.herokuapp.com/'
const apiURL = 'https://api.deezer.com/'
export default () => ({
  baseURL: `${corsURL}${apiURL}`,
})
