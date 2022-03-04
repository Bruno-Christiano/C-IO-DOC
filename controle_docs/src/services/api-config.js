import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://api-controle-docs.herokuapp.com/'
  // baseURL: 'http://localhost:3333/'
})