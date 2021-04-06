<template>
  <v-navigation-drawer
    :right="false"
    :expand-on-hover="false"
    color="#15ADC7"
    dark
    :mini-variant="mini"
    permanent
    app
    width="56"
  >
    <v-list nav class="py-0">
  
   <v-list-item-group>
      <v-list-item >
   
      <v-list-item-icon>
            <v-icon color="#fff">mdi-account</v-icon>
          </v-list-item-icon>
      
      </v-list-item>
         </v-list-item-group>

      <v-divider></v-divider>

      <v-list-item-group v-model="item" color="#fff">
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.link">
          <v-list-item-icon>
            <v-icon v-text="item.icon" color="#fff"></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <template v-slot:append> </template>
  </v-navigation-drawer>
</template>
<script>
export default {
  data() {
    return {
      item: 0,
      items: [
        { title: '', icon: 'mdi-view-dashboard', link: '/dashboard' },
        { title: '', icon: 'mdi-account', link: '/login' },
        { title: '', icon: 'mdi-help-box', link: '/' }
      ],
      mini: true
    }
  }
}
</script>
