<template>
  <!-- App.vue -->

  <v-app>
    <menu-drawer app />

    <!-- Sizes your content based upon application components -->
    <v-content app>
      <div class="page-wrapper">
        <nuxt />

     
      </div>
      <!-- App Footer -->
      <v-footer height="auto" class="white pa-3 app--footer">
        <span class="caption">&copy; {{ new Date().getFullYear() }}</span>
        <v-spacer></v-spacer>
        <span class="caption mr-1"> Made with love </span>
        <v-icon color="pink" small>favorite</v-icon>
      </v-footer>
    </v-content>

    <v-footer></v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>
<style scoped>
.page-wrapper {
  min-height: calc(100vh - 64px - 50px - 81px);
  margin-bottom: 50px;
}

.app--footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
