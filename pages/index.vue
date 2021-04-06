<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex><h3>Centro de Ayuda Seif</h3></v-flex>
       
 
      </v-layout>
        <v-divider></v-divider>
              <v-card
  elevation="2"
  class="d-flex justify-center"
  outlined
>

 <v-btn
      :loading="loading"
      :disabled="loading"
      
      class="btn btn-btncolor ma-2 white--text justify-center"
      @click="loader = 'loading'"
    >
      Añadir Material de Apoyo
      <v-icon
        right
        dark
      >
        mdi-pencil
      </v-icon>
    </v-btn></v-card>
     <v-flex><h4  class=" m-3 d-flex justify-center">Nuestros Productos</h4></v-flex>
       <v-divider></v-divider>
    <v-row >
        <v-col cols="4"  v-for="items in item_card" :key="items.title" >
            <v-card 
    class="mx-auto d-flex justify-center "
    max-width="250"
  >
  <v-col>
    <v-list-item  class="d-flex justify-center">
      <v-list-item-avatar  class="d-flex justify-center"
        tile
        size="80"
      
      >  <img :src="items.img" alt=""  width="50" height="50"/></v-list-item-avatar>
    </v-list-item>
  <v-list-item-content >
    
        <v-list-item-subtitle  class="d-flex justify-center">{{items.title}}</v-list-item-subtitle>
      </v-list-item-content>
    <v-card-actions class="d-flex justify-center">
      <v-btn
        outlined
        rounded
        text
          class="btn btn-btncolor ma-2 white--text "
      >
        Ver
      </v-btn>
    </v-card-actions>
    </v-col>
  </v-card>
        </v-col>
    </v-row>
      
    </v-container>
    
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
    data() {
    return {
  item_card:[{
    title:"Seif",
     img: 'https://www.flaticon.com/svg/vstatic/svg/4403/4403145.svg?token=exp=1617676032~hmac=1524782d375955f34810bcc6ac39112f',
  },
  {
    title:"Seif módulos",
      img: 'https://www.flaticon.com/svg/vstatic/svg/4403/4403100.svg?token=exp=1617676062~hmac=690c17d4505ec402d5c017218330f191',
  },
  {
    title:"Controller",
 img: 'https://www.flaticon.com/svg/vstatic/svg/4403/4403097.svg?token=exp=1617676082~hmac=ff9684e48596166d925d9f3e3e74a146',
  },
  {
    title:"Visitantes Robustos",
     img: 'https://www.flaticon.com/svg/vstatic/svg/4403/4403191.svg?token=exp=1617676108~hmac=86f61c2af37469cd0a889b8a1270dfac',
  },
  {
    title:"PPT",
     img: 'https://www.flaticon.com/svg/vstatic/svg/4403/4403216.svg?token=exp=1617676108~hmac=8b120d4256eac48eb5b295f248e70d04',
  },
    {
    title:"Controlpharm",
     img: 'https://www.flaticon.com/svg/vstatic/svg/4403/4403181.svg?token=exp=1617676108~hmac=c5d68e9898486ee44ebe41d37890fe0e',
  }]
    }
    }
}
</script>
