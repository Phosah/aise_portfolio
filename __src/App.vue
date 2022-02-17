<template>
  <div :class="themeColor">
    <div class="dark:bg-brand-black-1">
      <!-- <Navbar /> -->
      <router-view></router-view>
      <Footer />
      <!-- <Menu /> -->
    </div>
  </div>
</template>

<script>
// import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
// import Menu from "./components/Menu.vue";
export default {
  name: 'App',
  components: {
    // Navbar,
    Footer,
    // Menu
  },
  computed: {
    themeColor() {
      return this.$store.state.themeColor;
    },
  },
}
</script>

<style>
@font-face {
  font-family: "Euclid Circular A";
  src: local("Euclid Circular A"),
    url("./fonts/Euclid-Circular-A-Light.ttf") format("OpenType");
}
.header-box {
  height: 600px;
}
</style>