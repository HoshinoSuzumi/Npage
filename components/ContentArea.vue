<template>
  <div>
    <div class="title mdui-valign">
      <h1>{{ title }}</h1>
    </div>

    <div class="mdui-container">
      <slot/>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ContentArea",
        props: ['title']
    }
</script>

<style scoped>

  .title {
    width: 80%;
    height: 150px;
    margin: 0 auto;
  }

  .title h1 {
    margin: 0 auto;
    font-size: 2.2rem;
    font-weight: 100;
  }

</style>
