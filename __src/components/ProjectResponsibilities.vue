<template>
    <div class="mb-10 px-6 py-6 bg-brand-gray-light-1 shadow-sm rounded-md">
        <div class="mb-8"><img class="p-4 rounded-md" :class="bgColor" :src=iconUrl alt="Discover"></div>
        <h4 class="mb-6 text-2xl font-semibold">{{title}}</h4>
        <p class="mb-6">{{text}}</p>
        <div v-for="(item,index) in items" :key="index" class="flex space-x-4 items-center mb-4">
            <div><img class="p-3 rounded-full" :class="bgColor" :src=tickUrl alt="tick"></div>
            <p>{{item}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectResponsibilities',
    props: {
        iconUrl: {
            type: String,
            default: ""
        },
        title: {
            type: String,
            default: ""
        },
        text: {
            type: String,
            default: ""
        },
        items: {
            type: Array,
            default: () => [],
        },
        bgColor: {
            type: String,
            default: "bg-brand-gray-200"
        },
        tickUrl: {
            type: String,
            default: ""
        }
    },
}
</script>