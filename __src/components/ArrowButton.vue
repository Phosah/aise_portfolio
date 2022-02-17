<template>
    <button class="btn rounded-full p-2 bg-red-100">
        <img 
            class="transparent opacity-75 h-6"
            :src="require(`../assets/${arrowType}.svg`)" 
            :alt="arrowType + ' arrow'"
        >
    </button>
</template>

<script>
export default {
    name: "ArrowButton",
    props: {
        arrowType: String,
        // disabled: Boolean
    }
}
</script>

<style scoped>
.btn:disabled {
    opacity: .25;
}
</style>