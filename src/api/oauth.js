import { post } from 'axios'

const clientId = '0fb069ca7fda4d3aa41ab91168d95af6'
const clientSecret = 'o00imH75OGxDU5TfL96vgXPnRlCeFozg'

const region = 'eu'

const API_URL = `https://${region}.battle.net/oauth/token`

function getToken () {
  const body = new FormData()
  body.append('grant_type', 'client_credentials')

  const config = {
    headers: { 'Content-type': 'multipart/form-data' },
    auth: { username: clientId, password: clientSecret }
  }

  return post(API_URL, body, config)
}

export {
  getToken
}
