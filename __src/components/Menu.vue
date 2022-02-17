<template>
    <div :class="menu" class="menu-overlay">
        <div class="max-w-7xl mx-auto bg-brand-black-1 text-white">
            <header class="flex flex-col h-screen p-2">
                <div class="flex items-center justify-between">
                    <div>
                        <router-link to="/">
                            <img class="w-14" src="../assets/logo.png" alt="Logo icon" />
                        </router-link>
                    </div>
                    <div @click="close()">
                        <button>
                            <svg
                                class="text-white w-16 h-16 bg-[#4466ee]"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <nav class="flex-1 flex items-center px-14">
                    <div class="md:ml-16 text-3xl md:text-4xl lg:text-6xl font-bold">
                        <div class="nav-link-box flex items-center space-x-4 mb-10">
                            <div class="nav-link-line w-4 hover:w-24 h-1 bg-white"></div>
                            <div class>
                                <router-link to="/">Works</router-link>
                            </div>
                        </div>
                        <div class="nav-link-box flex items-center space-x-4 mb-10">
                            <div class="nav-link-line w-0 h-1 bg-white"></div>
                            <div>
                                <router-link to="/about">About me</router-link>
                            </div>
                        </div>
                        <div class="nav-link-box flex items-center space-x-4 mb-10">
                            <div class="nav-link-line w-0 h-1 bg-white"></div>
                            <div>
                                <router-link to="/">Contact me</router-link>
                            </div>
                        </div>
                        <div class="nav-link-box flex items-center space-x-4 mb-10">
                            <div class="nav-link-line w-0 h-1 bg-white"></div>
                            <div>
                                <router-link to="/">Resume</router-link>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        menu() {
            return this.$store.state.menuState;
        },
        themeColor() {
            return this.$store.state.themeColor;
        },
    },
    methods: {
        close() {
            this.$store.commit("closeMenu");
        }
    }
}
</script>
<style>
div {
    font-family: "Euclid Circular A", sans-serif;
}
.menu-overlay {
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 50;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.9);
    transition: 0.5s;
}
/* .nav-link-box:hover > .nav-link-line {
    display: block;
    width: 90px;
}
.nav-link-line {
    display: none;
} */
</style>