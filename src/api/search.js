import { get } from 'axios'
import store from '../store/index'
import { locals } from '../utils/regions'

const protocol = 'https://'
const host = '.api.blizzard.com/'

/**
 * Returns the specified account profile
 * GET - /d3/profile/{account}
 * - @param region {String}
 * - @param account {String}
 * @returns {Promise}
 */
function getApiAccount ({ region, account }) {
  const resource = `d3/profile/${account}/`
  const API_URL = `${protocol}${region}${host}${resource}`
  const locale = locals[region]

  const params = {
    access_token: store.state.oauth.accessToken,
    locale
  }

  return get(API_URL, { params })
}

export {
  getApiAccount
}
