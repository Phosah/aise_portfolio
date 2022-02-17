<template>
    <ul class="flex space-x-4 items-center">
        <li
            v-for="(_, index) in elements"
            :key="index"
            class="border-brand-black-2 border-b-4 w-1/4 h-0"
            :class="{'line-selected': currentElementIndex === index}"
        >
            <button
                class="absolute border-transparent border-b-4 w-1/4 h-0"
                @click='showElement(index)'
                :disabled="currentElementIndex === index"
            >
            </button>
        </li>
    </ul>
</template>

<script>
export default {
    name: "Indicator",
    props: { elements: Array, currentElementIndex: Number, showElement: Function }
}
</script>

<style>
.line-selected {
  opacity: .25;
  cursor: default;
}
.line-btn {
    color: blue;
}
</style>