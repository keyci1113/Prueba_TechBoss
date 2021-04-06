/**
 * This module contains all state logic used in components
 */
export const state = () => ({
  appLoading: false,
  alert: false,
  alertType: '',
  alertMessage: '',
  timeouts: [],
  cookiesAccepted: false,
  honduras: {},
  nav_banner: {
    active: false,
    message: '',
    small_message: '',
    bgColor: '#2e2e2e'
  }
})
export const getters = {
  isAppLoading: state => state.appLoading,
  isAlertActive: state => state.alert,
  getAlertType: state => state.alertType,
  getAlertMessage: state => state.alertMessage,
  areCookiesAccepted: state => state.cookiesAccepted,
  getHonduras: state => state.honduras,
  getNavBanner: state => state.nav_banner
}
export const mutations = {
  SET_APP_LOADING: function(state) {
    state.appLoading = true
  },
  SET_APP_LOADED: function(state) {
    state.appLoading = false
  },
  SET_ALERT: function(state, data) {
    state.alert = true
    state.alertType = data.type
    state.alertMessage = data.message
  },
  REMOVE_ALERT: function(state) {
    state.alert = false
    state.alertType = ''
    state.alertMessage = ''
  },
  PUSH_TIMEOUT: function(state, timeout) {
    state.timeouts.push(timeout)
  },
  CLEAR_TIMEOUTS: function(state) {
    for (let i = 0; i < state.timeouts.length; i++) {
      clearTimeout(state.timeouts[i])
    }
    state.timeouts = []
  },
  ACCEPT_COOKIES: function(state) {
    state.cookiesAccepted = true
  }
}
export const actions = {
  alert({ commit }, data) {
    return new Promise(resolve => {
      commit('CLEAR_TIMEOUTS')
      if (!data.duration) {
        data.duration = 3000
      }
      commit('SET_ALERT', { message: data.message, type: data.type })
      if (process.browser) {
        commit(
          'PUSH_TIMEOUT',
          setTimeout(() => {
            commit('REMOVE_ALERT')
          }, data.duration)
        )
      }
      resolve()
    })
  },
  acceptCookies({ commit }) {
    return new Promise((resolve, reject) => {
      if (process.browser) {
        localStorage.setItem('agh-cookies', true)
        commit('ACCEPT_COOKIES')
        resolve('Cookies accepted')
      } else {
        reject('Not browser')
      }
    })
  },
  checkCookies({ commit }) {
    return new Promise((resolve, reject) => {
      if (process.browser) {
        const cookies = localStorage.getItem('agh-cookies')
        if (cookies === 'true') {
          commit('ACCEPT_COOKIES')
          resolve()
        }
      } else {
        reject('Not browser')
      }
    })
  }
}
