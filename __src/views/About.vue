<template>
    <div>
        <header class="bg-brand-black-1 text-white">
            <div class="hidden md:block max-w-7xl mx-auto px-16">
                <div class="h-screen flex items-center space-x-16">
                    <div class="w-1/2 mb-12 md:mb-0">
                        <h1
                            class="mb-2 text-3xl md:text-5xl lg:text-6xl font-semibold font-playfair"
                        >A little dive</h1>
                        <h1
                            class="mb-8 text-3xl md:text-5xl lg:text-6xl font-semibold font-playfair"
                        >into Aise</h1>
                        <p
                            class="mb-8 text-justify"
                        >I am an Experience designer who is passionate about solving problems and design solutions that has great impact on people's lives</p>
                        <div class="flex space-x-4">
                            <button
                                class="py-3 px-6 bg-white text-brand-black-1 font-semibold"
                            >Book an appointment</button>
                            <button
                                class="flex-auto p-3 border border-white bg-brand-black-1 text-white font-semibold"
                            >Resume</button>
                        </div>
                    </div>
                    <div class="w-2/3">
                        <img class="w-full" src="../assets/aise-photo.png" alt="Aise Photo" />
                    </div>
                </div>
            </div>
            <!-- Mobile version -->
            <div class="block md:hidden max-w-7xl mx-auto py-20">
                <div class="mb-12 px-4">
                    <img class="w-full" src="../assets/aise-photo.png" alt="Aise Photo" />
                </div>
                <div class="px-16">
                    <div class>
                        <h1
                            class="mb-2 text-3xl md:text-5xl lg:text-6xl font-semibold font-playfair"
                        >A little dive</h1>
                        <h1
                            class="mb-8 text-3xl md:text-5xl lg:text-6xl font-semibold font-playfair"
                        >into Aise</h1>
                        <p
                            class="mb-8 text-justify"
                        >I am an Experience designer who is passionate about solving problems and design solutions that has great impact on people's lives</p>
                        <div>
                            <button
                                class="w-full mb-4 p-3 bg-white text-brand-black-1 font-semibold"
                            >Book an appointment</button>
                            <button
                                class="w-full p-3 border border-white bg-brand-black-1 text-white font-semibold"
                            >Resume</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End of Mobile version -->
        </header>
        <section class="max-w-7xl mx-auto py-20 px-16">
            <div class="max-w-5xl mx-auto md:px-16">
                <h1
                    class="mb-4 lg:mb-7 text-4xl md:text-5xl lg:text-6xl font-semibold font-playfair"
                >Who am I?</h1>
                <p
                    class="mb-14 md:text-lg lg:text-xl"
                >I'm Aise Idahor Product Design Lead at Bento Africa and Design consultant at daba where I'm helping to empower businesses and change lives Research and data-driven insights. I help companies build teams and digital products. In my experience, I've come to find that while researching user's needs and pain points, collaborating with partners & stakeholders intimately throughout the design process creates the best product. While being fascinated with all aspects of User Experience design, I specialize in ideation, storytelling, and experience design where I aim to create memorable experiences</p>
                <div
                    class="mb-14 md:w-10/12 pl-6 border-l-4 border-brand-black-4 text-xl md:text-2xl lg:text-4xl font-bold leading-normal lg:leading-normal"
                >“Design is really an act of communication, which means having a deep understanding of the person with whom the designer is communicating ”</div>
                <p
                    class="md:w-4/5 lg:w-5/6 md:text-lg lg:text-xl md:leading-8"
                >When I'm not designing, you can find me playing PC games, watching a movie (series preferably), I am always on my headset listening to good music. Through my design journey, I’ve found myself learning a bit of motion design, 3D design, front-end, and communication skills.</p>
            </div>
        </section>
        <section class="bg-brand-black-1 text-white">
            <div class="max-w-7xl mx-auto px-4 md:px-16 py-20">
                <h2
                    class="guideline-header mb-8 text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-transparent"
                >MY DESIGN GUIDELINES</h2>
                <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <template v-for="(guideline, index) in guidelines" :key="index">
                        <DesignGuidelines
                            :imageUrl="guideline.imageUrl"
                            :title="guideline.title"
                            :text="guideline.text"
                            :altText="guideline.altText"
                            :class="guideline.border"
                        />
                    </template>
                </div>
            </div>
        </section>
        <section class="bg-brand-black-1 text-white">
            <div class="flex flex-col items-center max-w-7xl mx-auto py-20 md:px-16">
                <div class="mb-24">
                    <img src="../assets/project-talk.png" alt="Project talk" />
                </div>
                <div class="px-16 md:px-0">
                    <h1
                        class="mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-center font-semibold font-playfair"
                    >Let's talk about your project</h1>
                    <p class="mb-16 md:text-xl font-light text-center">
                        It takes any designer to design a product, but it takes creative
                        <span
                            class="font-bold"
                        >identification of users needs, and business goals to design the future</span>
                    </p>
                </div>
                <button
                    class="px-8 py-6 font-bold rounded-sm rounded-sm text-brand-black-1 bg-white"
                >Book an appointment</button>
            </div>
        </section>
    </div>
</template>

<script>
import DesignGuidelines from '@/components/DesignGuidelines'
export default {
    name: 'Home',
    components: { DesignGuidelines },
    data() {
        return {
            guidelines: [
                {
                    imageUrl: require("../assets/empower.png"),
                    altText: "Empower icon",
                    title: "Empowering",
                    text: "Empowering design ensures products center on the value they provide to people over the revenue it can generate.",
                    border: "border-t-4 rounded-md"
                },
                {
                    imageUrl: require("../assets/respectful.png"),
                    altText: "Respect icon",
                    title: "Respectful",
                    text: "Respectful design prioritizes people’s time, attention and overall digital well-being.",
                    border: "border-t-4 rounded-md"
                },
                {
                    imageUrl: require("../assets/business-goals.png"),
                    altText: "Business icon",
                    title: "Business Goals",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur congue tempor, ",
                    border: "border-t-4 rounded-md"
                },
                {
                    imageUrl: require("../assets/respectful.png"),
                    altText: "Empathy icon",
                    title: "Empathy",
                    text: "Finite design maximizes the overall quality of time spent by bounding the experience and prioritizing meaningful and relevant content.",
                    border: "border-t-4 rounded-md"
                },
                {
                    imageUrl: require("../assets/business-goals.png"),
                    altText: "Inclusivity icon",
                    title: "Inclusivity",
                    text: "Inclusive design is a methodology that enables and draws on the full range of human diversity.",
                    border: "border-t-4 rounded-md"
                },
                {
                    imageUrl: require("../assets/respectful.png"),
                    altText: "Transparent icon",
                    title: "Transparent",
                    text: "Transparent design is clear about intentions, honest in actions and free of dark patterns.",
                    border: "border-t-4 rounded-md"
                },
            ]
        }
    },
    mounted() {
        window.scrollTo(0, 0)
    }
}
</script>

<style scoped>
.header {
    height: calc(100vh - 80px);
}
.guideline-header {
    color: #fff;
    -webkit-text-fill-color: #0e0f14;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #fff;
}
div {
    font-family: "Euclid Circular A", sans-serif;
}
</style>