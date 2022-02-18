import { get } from 'axios'
import store from '../store/index'
import { locals } from '../utils/regions'

const protocol = 'https://'
const host = '.api.blizzard.com/'

/**
 * Returns the specified account profile
 * GET - /d3/profile/{account}
 * @param region {String}
 * @param account {String}
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

/**
 * Returns a single hero
 * GET - /d3/profile/{acount}/hero/{heroId}
 * @param {String} region
 * @param {String} account
 * @param {Number} heroId
 * @returns {Promise}
 */
function getApiHero ({ region, account, heroId }) {
  const resource = `d3/profile/${account}/hero/${heroId}`
  const API_URL = `${protocol}${region}${host}${resource}`
  const locale = locals[region]

  const params = {
    access_token: store.state.oauth.accessToken,
    locale
  }

  return get(API_URL, { params })
}

/**
 * Returns a list of items for the specific hero
 * GET - /d3/profile/{account}/hero/{heroId}/items
 * @param region {String}
 * @param account {String}
 * @param heroId {Number}
 * @returns {Promise}
 */
function getApiDetailedHeroItems ({ region, account, heroId }) {
  const resource = `d3/profile/${account}/hero/${heroId}/items`
  const API_URL = `${protocol}${region}${host}${resource}`
  const locale = locals[region]

  const params = {
    access_token: store.state.oauth.accessToken,
    locale
  }

  return get(API_URL, { params })
}

export {
  getApiAccount,
  getApiHero,
  getApiDetailedHeroItems
}
