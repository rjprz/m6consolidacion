<template>
  <v-container>
    <h1>{{ title }}</h1>
    <v-row>
      <v-col cols="4" lg="3" xl="2" v-for="(juego) in juegos" :key="juego.id">
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            :src="juego.background_image"
          >
          </v-img>
          <v-card-title>{{ juego.name }}</v-card-title>

          <v-card-text class="text--primary">
            <div>Rating: {{ juego.rating }}</div>
            <div>Realised: {{ juego.released }}</div>
            <div>Update: {{ juego.updated }}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn @click="redirectTo(juego.name)" color="orange" text> Opinar </v-btn>
            <v-btn text>
              <v-icon>mdi-heart-outline</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
  name: "cards-comp",
  props:{
    title:{
      type:String,
      required: true
    }
  },
  data: function () {
    return {
    };
  },
  computed: {
    ...mapState(['juegos'])
  },
  methods: {
    ...mapActions(['fetchJuegos']),
    redirectTo(nombreJuego){
      this.$router.push('/opiniones/'+nombreJuego)
    }
  },
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  created(){
        this.fetchJuegos();
    }
  // -- End Lifecycle Methods
};
</script>

<style scoped></style>
