import axios from 'axios'
import { API_BASE_URL } from '../constants'

class ApiClient {
  constructor(remoteHostUrl) {
    this.remoteHostUrl = remoteHostUrl
    this.token = null
    this.tokenName = 'TerraLearn_token'
  }
  setToken(token) {
    this.token = token
    localStorage.setItem(this.tokenName, token)
  }
  async request({ endpoint, method = 'GET', data = {} }) {
    const url = `${this.remoteHostUrl}/${endpoint}`

    const headers = {
      'Content-Type': 'application/json',
    }
    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`
    }
    try {
      const res = await axios({ url, method, data, headers })
      return { data: res.data, error: null }
    } catch (error) {
      // console.error({ errorResponse: error.response })
      const message = error?.response?.data?.error?.message
      return { data: null, error: message || String(error) }
    }
  }
  // async createNutrition(nutrition) {
  //   return await this.request({
  //     endpoint: `nutrition/create`,
  //     method: `POST`,
  //     data: nutrition,
  //   })
  // }
  async loginUser(credentials) {
    return await this.request({
      endpoint: `auth/login`,
      method: `POST`,
      data: credentials,
    })
  }
  async signupUser(credentials) {
    return await this.request({
      endpoint: `auth/register`,
      method: `POST`,
      data: credentials,
    })
  }
  async fetchUserFromToken() {
    return await this.request({ endpoint: `auth/me`, method: 'GET' })
  }
  // async fetchNutrition() {
  //   return await this.request({ endpoint: `nutrition`, method: `GET` })
  // }
  async logoutUser() {
    this.setToken(null)
    localStorage.setItem(this.tokenName, '')
  }

  //function calls for places 
  async fetchCountries(){
    return await this.request({endpoint: `places`, method: 'GET'})
  }
  async fetchCities(){
    return await this.request({endpoint: `places/cities`, method: 'GET'})
  }
  async fetchCitiesByCountryId(countryId){
    return await this.request({endpoint: `places/id/${countryId}`, method: 'GET'})
  }
  async createFavorite(favorite) {
    // console.log(favorite)
    return await this.request({
      endpoint: `favorites/add`,
      method: `POST`,
      data: favorite,
    })
   

  }
  async deleteFavorite(favorite)
  
  {
   
      return await this.request({
      endpoint:`favorites/delete`,
      method:`DELETE`,
      data:favorite
    })
  }
  

  async fetchCategory(id) {
    return await this.request({ endpoint: `favorites/category/${id}`, method: `GET` })
  }
  
}

const API = new ApiClient(API_BASE_URL)

export default API
