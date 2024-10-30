<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-icon size="37px">mdi-controller</v-icon>
        <span class="mr-2"> Games Opinion</span>
      </div>

      <v-spacer></v-spacer>

      <v-btn @click="goHome" text>
        <v-icon size="37px">mdi-home</v-icon>
        <span class="mr-2">Home</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
  methods: {
    goHome() {
      if (this.$route.name == "home") return;
      this.$router.push("/");
    },
  },
};
</script>
