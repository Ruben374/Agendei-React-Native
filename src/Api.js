import AsyncStorage from '@react-native-async-storage/async-storage'

const BASE_API = 'http://192.168.10.142:3009'

export default {
  Login: async (email, password) => {
    try {
      const request = await fetch(`${BASE_API}/clients/login`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })
      const response = await request.json()
      return response
    } catch (error) {
      console.log(error.message)
    }
  },

  getCategories: async () => {
    try {
      const request = await fetch(`${BASE_API}/category`)
      const response = await request.json()
      return response
    } catch (error) {
      console.log(error.message)
    }
  },
  getEst: async categoryId => {
    try {
      const request = await fetch(`${BASE_API}/est/${categoryId}`)
      const response = await request.json()
      return response
    } catch (error) {
      console.log(error.message)
    }
  },
  SignUp: async (name, email, password) => {
    try {
      const request = await fetch(`${BASE_API}/clients/createuser`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
      })
      const response = await request.json()
      return response
    } catch (error) {
      console.log(error.message)
      return error
    }
  },
  getEstServices: async estId => {
    try {
      const request = await fetch(`${BASE_API}/services/${estId}`)
      const response = await request.json()
      return response
    } catch (error) {
      console.log(error.message)
    }
  }
}
