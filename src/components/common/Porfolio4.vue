<template>

  <div class="porfolio4">
    <link href='https://fonts.googleapis.com/css?family=Handlee' rel='stylesheet' type='text/css'>
    <div class="container">
      <!-- <div class="heading">
        <h1>Gallery concept</h1>
        <span>Click on the first image</span>
      </div> -->
      <div id="gallery"></div>
    </div>
  </div>

</template>

<script>
// import TextDisplay1 from '@/components/common/TextDisplay1';
export default{
  name:"Porfolio4",
  props: ['product'],
  components: {
    // TextDisplay1
  },
  data() {
    return {

    }
  },
  created() {

  },
  mounted() {
    this.$loadScript("/js/porfolio4.js")
    .then((res) => {
      console.log("res",res);
    })
    .catch((e) => {
      console.log("e:",e);
    })
  },

}

</script>

<style scoped>

</style>
