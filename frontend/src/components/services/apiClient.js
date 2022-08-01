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

  //functions call feedback endpoints from feedback routes file
  async fetchFeedback() {
    return await this.request({ endpoint: `feedback`, method: 'GET' })
  }
  async fetchFeedbackForUser(userId) {
    return await this.request({ endpoint: `feedback/id/${userId}`, method: 'GET' })
  }
  async addFeedback(feedback) {
    return await this.request({ endpoint: `feedback`, method: 'POST', data: feedback})
  }
  //function calls places endpoint to add guess to guess table
  async addGuess(guess){
    return await this.request({ endpoint: `places/addGuess`, method: 'POST', data: guess})
  }
  //function calls game endpoint to get all games for certain user
  async fetchGamesForUser(userId) {
    return await this.request({ endpoint: `game/id/${userId}/user`, method: 'GET' })
  }
  //function calls game endpoint to get all games for certain country
  async addGame(game) {
    return await this.request({ endpoint: `game`, method: 'POST', data: game})
  }
  //function calls game endpoint to get all games for certain country
  async fetchGamesForCountry(countryId){
    return await this.request({ endpoint: `game/id/${countryId}/country`, method: 'GET' })
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

  async fetchFavorites(){
    return await this.request({endpoint:`favorites`, method: `GET`})
}

  async createFavorite(favorite) {
    // 
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
  async addGuess(guess){
    return await this.request({endpoint: `places/addGuess`, method: `POST`, data: guess})
  }
  async fetchGuesses(){
    return await this.request({endpoint: `places/guess`, method: 'GET'})
  }

  async fetchCategory(id) {
    return await this.request({ endpoint: `favorites/category/${id}`, method: `GET` })
  }
  
}

const API = new ApiClient(API_BASE_URL)

export default API
