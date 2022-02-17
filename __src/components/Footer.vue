<template>
  <div
    v-if="themeColor === 'light'"
    class="flex justify-between max-w-7xl mx-auto px-4 md:px-16 py-10 text-brand-black-1 font-semibold"
  >
    <a
      class="pb-2 border-b-4 border-transparent hover:border-b-4 hover:border-brand-black-1"
      href="#"
    >LinkedIn</a>
    <a
      class="pb-2 border-b-4 border-transparent hover:border-2 hover:border-brand-black-1"
      href="#"
    >Dribble</a>
    <a
      class="pb-2 border-b-4 border-transparent hover:border-b-4 hover:border-brand-black-1"
      href="#"
    >Twitter</a>
  </div>

  <div
    v-else
    class="flex justify-between max-w-7xl mx-auto px-4 md:px-16 py-10 text-white font-semibold"
  >
    <a
      class="pb-2 border-b-4 border-transparent hover:border-b-4 hover:border-white"
      href="#"
    >LinkedIn</a>
    <a
      class="pb-2 border-b-4 border-transparent hover:border-b-4 hover:border-white"
      href="#"
    >Dribble</a>
    <a
      class="pb-2 border-b-4 border-transparent hover:border-b-4 hover:border-white"
      href="#"
    >Twitter</a>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    themeColor() {
      return this.$store.state.themeColor;
    }
  },
}
</script>