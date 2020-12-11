<template>
    <div class="imagecontainer">
        <img :src="src">
    </div>
</template>

<script>
export default {
    props: ['choise'],
    data() {
        return {
            src: require("../../img/" + this.choise.name + '.jpg')
        }
    },

}
</script>

<style>
    .imagecontainer {
        width: 100%;
        height: 100%;
    }
    img {
        width: 200px;
        height: 200px;
    }
</style>