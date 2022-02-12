import AsyncStorage from '@react-native-async-storage/async-storage'

const BASE_API = 'http://192.168.10.142:3009'

export default {
  verifyToken: async token => {
    try {
      const request = await fetch(`${BASE_API}/clients/refresh`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token })
      })
      const response = await request.json()
      return response
    } catch (error) {
      console.log(error.message)
    }
  },
  Login: async (email, senha) => {
    try {
      const request = await fetch(`${BASE_API}/clients/login`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, senha })
      })
      const response = await request.json()
      return response
    } catch (error) {
      console.log(error.message)
    }
  },
  Logout: async (token) => {
    try {
      const request = await fetch(`${BASE_API}/clients/logout`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token })
      })
      const response = await request.json()
      return response
    } catch (error) {
      console.log(error.message)
    }
  },
   getCategorys: async () => {
    try {
      const request = await fetch(`${BASE_API}/categorias/`)
      const response = await request.json()
      return response
    } catch (error) {
      console.log(error.message)
    }
  }
}
