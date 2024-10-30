<template>
  <v-container>
    <v-row>
      <v-col col="4">
        <v-img
          :src="juegos[IdJuego].background_image"
          min-width="400px"
          max-width="50%"
        />
        <h1>Escribe tu opinion para el juego: {{ nombreJuego }}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-form action="">
          <v-text-field v-model="nombre" label="Nombre" required></v-text-field>
          <v-text-field
            v-model="opinion"
            label="Opinión"
            required
          ></v-text-field>
          <v-btn color="success" class="mr-4" @click="agregarComentario">
            Agregar
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
    <v-container v-if="this.juegos[this.IdJuego].comentarios">

      <v-row justify="center">
    <v-expansion-panels accordion>
      <v-expansion-panel
       v-for="comentario in this.juegos[this.IdJuego].comentarios"
        :key="comentario.nombre"
      >
        <v-expansion-panel-header>Opinión creada por: {{ comentario.nombre }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          {{ comentario.opinion }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
    </v-container>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "juego-comp",
  props: {
    nombreJuego: {
      type: String,
      required: true,
    },
  },
  data: function () {
    return {
      nombre: "",
      opinion: "",
      show: false,
    };
  },
  computed: {
    ...mapState(["juegos"]),
    IdJuego() {
      return this.juegos.findIndex((juego) => juego.name === this.nombreJuego);
    },
  },
  methods: {
    agregarComentario() {
      let comentario = {
        nombre: this.nombre,
        opinion: this.opinion,
      };
      if (!this.juegos[this.IdJuego].comentarios)
        this.juegos[this.IdJuego].comentarios = [];
      this.juegos[this.IdJuego].comentarios.push(comentario);

      this.nombre = "";
      this.opinion = "";
    },
  },

  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
};
//console.log(this.juego);
</script>

<style scoped></style>
