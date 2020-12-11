<template>
  <div class="answerbox">
      <img :src="questImg" alt="">
  </div>
</template>

<script>
export default {
    props: ['questImg']
}
</script>

<style>
    .answerbox {
        width: 100%;
        height: 200px;
        text-align: center;
    }
</style>