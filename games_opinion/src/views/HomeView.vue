<template>
  <Cards :title="title"/>
</template>

<script>
  import Cards from '../components/Cards'

  export default {
    name: 'HomeView',
    data: function () {
    return {
      title: 'Lista de Juegos Disponibles',
    };
  },
    components: {
      Cards,
    },
  }
</script>
