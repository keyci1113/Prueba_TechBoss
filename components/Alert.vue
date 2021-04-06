<template>
  <transition name="slide-from-top-fade">
    <div class="alert" :class="alertObject" v-if="active">
      <span>{{ message }}</span>
      <i class="material-icons ml-2" @click="dismiss" style="cursor:pointer">close</i>
    </div>
  </transition>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      dismiss: 'REMOVE_ALERT'
    })
  },
  computed: {
    ...mapGetters({
      message: 'getAlertMessage',
      active: 'isAlertActive',
      type: 'getAlertType'
    }),
    alertObject() {
      switch (this.type) {
        case 'success':
          return 'alert-success'
        case 'danger':
          return 'alert-danger'
        default:
          return 'alert-warning'
      }
    }
  }
}
</script>

<style>
.slide-from-top-fade-enter-active,
.slide-from-top-fade-leave-active {
  -webkit-transition: all 0.5s linear 0s;
  -moz-transition: all 0.5s linear 0s;
  -o-transition: all 0.5s linear 0s;
  transition: all 0.5s linear 0s;
}
.slide-from-top-fade-enter,
.slide-from-top-fade-leave-to {
  opacity: 0;
  bottom: -100%;
  overflow: hidden;
}
</style>
