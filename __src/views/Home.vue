<template>
  <div>
    <div class="dark:bg-brand-black-1">
      <!-- Header -->
      <div class="dark:bg-brand-black-1">
        <header
          class="h-screen flex items-center justify-center max-w-7xl mx-auto mb-10 md:mb-0 py-32 md:px-16"
        >
          <div class="flex flex-col md:block items-center">
            <h3
              class="mb-12 md:mb-0 md:w-2/3 px-4 md:px-0 text-3xl md:text-4xl lg:text-6xl dark:text-white font-extrabold font-playfair leading-snug"
            >Simplifying user experiences through digital solutions</h3>
            <div class="mb-16 md:mb-0 md:transform md:-translate-y-16">
              <img
                v-if="themeColor == 'light'"
                src="../assets/solutions.png"
                alt="Creative solutions image"
              />
              <img v-else src="../assets/solutions-dark.png" alt="Creative solutions image" />
            </div>
            <div
              class="md:flex md:w-1/2 md:ml-auto px-4 md:px-0 -translate-y-20 text-sm lg:text-lg dark:text-white"
            >Aise is a User Experience designer focused on maximizing business need and user satisfaction through the creation of simple digital experiences.</div>
          </div>
        </header>
      </div>
      <!-- End of Header -->
      <!-- Main page -->
      <main class="max-w-7xl mx-auto mb-32 md:px-16">
        <h2
          class="works-header dark:works-header-dark mb-6 md:mb-2 text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-transparent text-center md:text-left"
        >SOME WORKS</h2>
        <section
          class="works-box md:flex md:items-center md:justify-between mb-10 md:mb-20 py-28 px-14 md:px-0 bg-hero-image bg-no-repeat bg-cover bg-brand-blue-8 text-white"
        >
          <div class="flex-1 md:text-left text-center">
            <div class="md:ml-16 mb-20 md:mb-0 md:pr-6">
              <h2 class="mb-4 text-3xl lg:text-5xl font-semibold font-playfair">Collect Africa</h2>
              <p class="mb-12 text-xl lg:text-3xl font-light">Fintech Solution</p>
              <router-link
                to="/collectafrica"
                class="inline-block pb-1 text-xl lg:text-2xl font-semibold border-b-2"
              >Case Study</router-link>
            </div>
          </div>
          <div class="flex-1">
            <img src="../assets/collect-africa-home.png" alt="Collect home photo" />
          </div>
        </section>
        <section
          class="works-box md:flex md:items-center md:justify-between mb-10 md:mb-20 py-28 px-14 md:px-0 bg-hero-image bg-no-repeat bg-cover bg-brand-orange-1 text-white"
        >
          <div class="flex-1 md:text-left text-center">
            <div class="md:ml-16 mb-20 md:mb-0 md:pr-6">
              <h2 class="mb-4 text-3xl lg:text-5xl font-semibold font-playfair">Trigle</h2>
              <p class="mb-12 text-xl lg:text-3xl font-light">Food delivery, Commerce</p>
              <router-link
                to="/trigle"
                class="inline-block pb-1 text-xl lg:text-2xl font-semibold border-b-2"
              >Case Study</router-link>
            </div>
          </div>
          <div class="flex-1">
            <img src="../assets/trigle-home.png" alt="Trigle home photo" />
          </div>
        </section>
        <section
          class="works-box md:flex md:items-center md:justify-between mb-10 md:mb-20 py-28 px-14 md:px-0 bg-hero-image bg-no-repeat bg-cover bg-brand-green-1 text-white"
        >
          <div class="flex-1 md:text-left text-center">
            <div class="md:ml-16 mb-20 md:mb-0 md:pr-6">
              <h2 class="mb-4 text-3xl lg:text-5xl font-semibold font-playfair">Doorstep</h2>
              <p class="mb-12 text-xl lg:text-3xl font-light">Logistics</p>
              <router-link
                to="/doorstep"
                class="inline-block pb-1 text-xl lg:text-2xl font-semibold border-b-2"
              >Case Study</router-link>
            </div>
          </div>
          <div class="flex-1">
            <img src="../assets/doorstep-home.png" alt="Trigle home photo" />
          </div>
        </section>
        <section
          class="works-box md:flex md:items-center md:justify-between mb-10 md:mb-20 py-28 px-14 md:px-0 bg-hero-image bg-no-repeat bg-cover bg-brand-red-5 text-white"
        >
          <div class="flex-1 md:text-left text-center">
            <div class="md:ml-16 mb-20 md:mb-0 md:pr-6">
              <h2 class="mb-4 text-3xl lg:text-5xl font-semibold font-playfair">TrustBreed</h2>
              <p class="mb-12 text-xl lg:text-3xl font-light">Customer Service, B2C</p>
              <router-link
                to="/trustbreed"
                class="inline-block pb-1 text-xl lg:text-2xl font-semibold border-b-2"
              >Case Study</router-link>
            </div>
          </div>
          <div class="flex-1">
            <img src="../assets/trustbreed-home.png" alt="Trustbreed home photo" />
          </div>
        </section>
        <section
          class="works-box md:flex md:items-center md:justify-between md:mb-20 py-28 px-14 md:px-0 bg-hero-image bg-no-repeat bg-cover bg-brand-blue-1 text-white"
        >
          <div class="flex-1 md:text-left text-center">
            <div class="md:ml-16 mb-20 md:mb-0 md:pr-6">
              <h2 class="mb-4 text-3xl lg:text-5xl font-semibold font-playfair">Powr Finance</h2>
              <p class="mb-12 text-xl lg:text-3xl font-light">Logistics</p>
              <router-link
                to="/powrfinance"
                class="inline-block pb-1 text-xl lg:text-2xl font-semibold border-b-2"
              >Case Study</router-link>
            </div>
          </div>
          <div class="flex flex-1 justify-end">
            <div>
              <img class src="../assets/powrfinance-home.png" alt="Powr Finance devices" />
            </div>
          </div>
        </section>
      </main>
      <section
        class="flex items-center md:min-h-screen py-20 dark:bg-white bg-text-brand-black-1 bg-brand-black-1 text-white dark:text-brand-black-1"
      >
        <div class="hidden md:block max-w-7xl mx-auto md:px-16">
          <h2
            class="testimonials-header dark:testimonials-header-dark mb-20 md:mb-8 text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-center md:text-left text-transparent"
          >TESTIMONIALS</h2>
          <div class="md:flex md:items-center md:justify-between md:space-x-12 mb-8">
            <div class="flex-1 mb-8 md:mb-0">
              <img
                class="w-full mx-auto object-cover"
                src="../assets/testimonial-man.png"
                alt="Testimonial man"
              />
            </div>
            <div class="flex-1 px-16 md:px-0">
              <div class="flex items-center space-x-4 mb-12 text-2xl">
                <p class="mr-2">1.0</p>
                <div class="h-14 border-r border-2"></div>
                <div class="flex items-end pb-2">
                  <img src="../assets/logo.png" alt="Aise Logo" />
                  <p class="pb-2">cunad</p>
                </div>
              </div>
              <h3 class="mb-8 text-2xl md:text-3xl">Emma Dorsey</h3>
              <p
                class="mb-8"
              >Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.</p>
              <div class="flex items-center space-x-6">
                <img src="../assets/twitter.png" alt="Twitter Logo" />
                <img src="../assets/linkedin.png" alt="LinkedIn Logo" />
              </div>
            </div>
          </div>
          <div class="flex items-center space-x-12 px-16 md:px-0 dark:text-brand-black-1">
            <div class="flex flex-1 space-x-4">
              <div class="border-b border-2 w-1/4"></div>
              <div class="border-b border-2 w-1/4"></div>
              <div class="border-b border-2 w-1/4"></div>
              <div class="border-b border-2 w-1/4"></div>
            </div>
            <div class="flex-1 flex items-center justify-end space-x-4">
              <button class="rounded p-3">
                <img src="../assets/left.png" alt="Left arrow" />
              </button>
              <button class="rounded-full p-4 bg-white">
                <img src="../assets/right.png" alt="Right arrow" />
              </button>
            </div>
          </div>
        </div>
        <div class="block md:hidden max-w-7xl mx-auto">
          <h2
            class="testimonials-header mb-20 text-5xl sm:text-6xl text-center text-transparent"
          >TESTIMONIALS</h2>
          <div class="mb-8">
            <div class="flex-1 mb-4">
              <img
                class="w-full mx-auto object-cover"
                src="../assets/testimonial-man.png"
                alt="Testimonial man"
              />
            </div>
            <div class="flex flex-1 space-x-4 mb-10 px-16">
              <div class="border-b border-2 w-1/4"></div>
              <div class="border-b border-2 w-1/4"></div>
              <div class="border-b border-2 w-1/4"></div>
              <div class="border-b border-2 w-1/4"></div>
            </div>
            <div class="flex-1 px-16">
              <div class="flex items-center space-x-4 mb-12 text-2xl">
                <p class="mr-2">1.0</p>
                <div class="h-14 border-r border-2"></div>
                <div class="flex items-end pb-2">
                  <img src="../assets/logo.png" alt="Aise Logo" />
                  <p class="pb-2">cunad</p>
                </div>
              </div>
              <h3 class="mb-8 text-2xl">Emma Dorsey</h3>
              <p
                class="mb-8"
              >Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.</p>
              <div class="flex items-center space-x-6">
                <img src="../assets/twitter.png" alt="Twitter Logo" />
                <img src="../assets/linkedin.png" alt="LinkedIn Logo" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <BookAppointment />
      <!-- End of Main page -->
    </div>
  </div>
</template>

<script>
import BookAppointment from '@/components/BookAppointment.vue'
export default {
  components: { BookAppointment },
  data() {
    return {
    }
  },
  mounted() {
    window.scrollTo(0, 0)
  },
  computed: {
    themeColor() {
      return this.$store.state.themeColor;
    }
  },
  methods: {
    changeTheme() {
      this.$store.commit('changeTheme');
    }
  },

}
</script>

<style scoped>
div {
  font-family: "Euclid Circular A", sans-serif;
}
.works-header {
  color: #000;
  -webkit-text-fill-color: #fff;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #0e0f14;
}
.works-header-dark {
  color: #fff;
  -webkit-text-fill-color: #0e0f14;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #fff;
}
@media screen and (min-width: 768px) {
  .works-box {
    height: 650px;
  }
}
.testimonials-header {
  color: #fff;
  -webkit-text-fill-color: #0e0f14;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #fff;
}
.testimonials-header-dark {
  color: #0e0f14;
  -webkit-text-fill-color: #fff;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #0e0f14;
}
</style>