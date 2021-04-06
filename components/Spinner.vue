<template>
  <div class="spinner-container">
    <div v-bind:style="styles" class="spinner" v-if="!timeoutExpired"></div>
    <div v-else class="text-center">
      Ocurrió un error <br />Intente de nuevo
    </div>
  </div>
</template>
<script>
export default {
  props: {
    size: {
      default: '60px'
    },
    background: {
      default: 'rgba(0,0,0,0.10)'
    },
    color: {
      default: '#f04f23'
    },
    stroke: {
      default: '3px'
    },
    errorTimeout: {
      default: false
    },
    timeoutDuration: {
      default: 10000
    }
  },
  data() {
    return {
      timeoutExpired: false
    }
  },
  computed: {
    styles() {
      return {
        width: this.size,
        height: this.size,
        border: this.stroke + ' solid ' + this.background,
        borderTopColor: this.color
      }
    }
  },
  mounted() {
    if (this.errorTimeout) {
      setTimeout(() => {
        this.timeoutExpired = true
      }, this.timeoutDuration)
    }
  }
}
</script>
