import AsyncStorage from '@react-native-async-storage/async-storage'

import Config from './config/Api.config.js'
const BASE_API = Config.url

export default {
  Login: async (email, password) => {
    try {
      const request = await fetch(`${BASE_API}/clients/auth/login`, {
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

  RefreshToken: async () => {
    try {
      const token = await AsyncStorage.getItem('token')
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
  SignUp: async (username, email, password) => {
    try {
      const request = await fetch(`${BASE_API}/clients/signup`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
      })
      const response = await request.json()
      return response
    } catch (error) {
      console.log(error.message)
      return error
    }
  },
  ConfirmCode: async (confirmationCode, email) => {
    try {
      const request = await fetch(`${BASE_API}/clients/auth/confirmcode`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ confirmationCode, email })
      })
      const response = await request.json()
      return response
    } catch (error) {
      console.log(error.message)
      return error
    }
  },
  SetAppointments: async (estid, clientid, serviceid, date, hour) => {
    try {
      const request = await fetch(`${BASE_API}/appointments/post`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ estid, clientid, serviceid, date, hour })
      })
      const response = await request.json()
      return response
    } catch (error) {
      console.log(error.message)
      return error
    }
  },
  UpdateClient: async (option, id, param, current) => {
    try {
      const request = await fetch(`${BASE_API}/clients/update`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ option, id, param, current })
      })
      const response = await request.json()
      return response
    } catch (error) {
      console.log(error.message)
      return error
    }
  },
  VerifyEmailToResetPassword: async email => {
    try {
      const request = await fetch(`${BASE_API}/clients/resetpassword`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      })
      const response = await request.json()
      return response
    } catch (error) {
      console.log(error.message)
      return error
    }
  },
  VerifyCodeToResetPassword: async (email, resetPasswordCode) => {
    try {
      const request = await fetch(
        `${BASE_API}/clients/verifyresetpasswordcode`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, resetPasswordCode })
        }
      )
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
  },
  getServ: async servId => {
    try {
      const request = await fetch(`${BASE_API}/services/serv/${servId}`)
      const response = await request.json()
      return response
    } catch (error) {
      console.log(error.message)
    }
  },
  getAppointments: async clientId => {
    try {
      const request = await fetch(`${BASE_API}/appointments/${clientId}`)
      const response = await request.json()
      return response
    } catch (error) {
      console.log(error.message)
    }
  },
  getAppointmentsByServiceId: async serviceId => {
    try {
      const request = await fetch(
        `${BASE_API}/appointments/service/${serviceId}`
      )
      const response = await request.json()
      return response
    } catch (error) {
      console.log(error.message)
    }
  },
  getAppointmentsDate: async (serviceId, date) => {
    try {
      const request = await fetch(
        `${BASE_API}/appointments/services/${serviceId}/${date}`
      )
      const response = await request.json()
      return response
    } catch (error) {
      console.log(error.message)
    }
  },
  setAvatar: async data => {
    try {
      const request = await fetch(`${BASE_API}/clients/teste`, {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data'
        }
      })
      const response = await request.json()
      return response
    } catch (error) {
      console.log(error.message)
    }
  }
}
