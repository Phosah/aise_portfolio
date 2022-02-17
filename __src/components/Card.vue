<template>
    <div>
        <div class="block">
            <div class="mb-6"><img class="mx-auto" :src="require(`@/assets/${imgName}`)"  alt="Survey photo"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        imgName: String
    }
}
</script>

<style>

</style>