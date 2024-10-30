<template>
  <v-container>
    <Juego :nombreJuego='nombreJuego'></Juego>
  </v-container>
</template>

<script>
import {mapActions} from 'vuex'
import Juego from '@/components/Juego.vue';
export default {
  name: 'opiniones-comp',
  // props: {},
  data: function(){
    return {
      nombreJuego:this.$route.params.name
    }
  },
  // computed: {},
  methods: {
    ...mapActions(['fetchJuegos']),
  },
  // watch: {},
  components: {
    Juego,
  },
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  created(){
        this.fetchJuegos();
    }
  // -- End Lifecycle Methods
}
</script>

<style scoped>
  
</style>