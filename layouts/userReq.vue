<template>
  <div class="app-root">
    <agh-alert/>
    <div v-if="!appReady" class="layout-content">
      <agh-spinner :errorTimeout="true" :timeoutDuration="20000"/>
    </div>
    <agh-navbar v-if="appReady" class="layout-header"/>
    <nuxt v-if="appReady" class="layout-content"/>
    <agh-footer v-if="appReady" class="layout-footer"/>
    <agh-snackbar :yPosition="'bottom'" v-if="!areCookiesAccepted">
      <div class="mb-3">Al utilizar este sitio web estas aceptando a nuestra
        <nuxt-link to="/politicas/politica-de-cookies" class="text-underline">política de cookies.</nuxt-link>
      </div>
      <button class="btn btn-8" @click="acceptCookies">Aceptar y Cerrar</button>
    </agh-snackbar>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'

export default {
  scrollToTop: true,
  data() {
    return {
      ready: false
    }
  },
  computed: {
    ...mapGetters({
      isLoading: 'isAppLoading',
      areCookiesAccepted: 'areCookiesAccepted',
      isAuth: 'auth/isAuthenticated',
      token: 'auth/getToken',
      isProfileLoaded: 'user/isProfileLoaded'
    }),
    appReady() {
      return this.ready && !this.isLoading
    }
  },
  methods: {
    ...mapActions({
      acceptCookies: 'acceptCookies',
      checkCookies: 'checkCookies',
      hondurasFbRq: 'hondurasFbRq',
      getUser: 'user/userRq',
      setToken: 'auth/setToken',
      logout: 'auth/logout',
      deptRq: 'items/departmentsRq'
    }),
    axiosConfig() {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.token
      axios.interceptors.response.use(
        res => {
          return res
        },
        err => {
          if (err.response && err.response.status === 401) {
            this.logout()
          }
          return Promise.reject(err)
        }
      )
    }
  },
  mounted() {
    this.checkCookies()
  },
  created() {
    // Check if profile is loaded, if not proceed to set token and get profile
    if (!this.isProfileLoaded) {
      this.setToken()
        .then(() => {
          this.axiosConfig()
          if (this.isAuth) {
            this.getUser()
              .then(() => {
                this.ready = true
              })
              .catch(() => {
                this.ready = true
              })
          } else {
            this.ready = true
          }
        })
        .catch(() => {
          this.ready = true
        })
    } else {
      this.ready = true
    }
    this.deptRq()
    this.hondurasFbRq()
  }
}
</script>
