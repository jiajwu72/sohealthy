<template>

  <div class="menuPlay0">
    <!-- <h5>燕窝所有产品</h5> -->
    <nav>
      <ul>
        <li class="active"><a href="">First</a></li>
        <li><a href="">Second</a></li>
        <li><a href="">Third</a></li>
        <li><a href="">First</a></li>
        <li><a href="">Second</a></li>
        <li><a href="">Third</a></li>
        <li><a href="">First</a></li>
      </ul>
    </nav>
    <b-row>
      <b-col md="3">

      </b-col>
    </b-row>
  </div>

</template>

<script>
// import $ from 'jquery'
// import "../../../public/js/porfolio1.js"
export default{
  name:"MenuPlay0",
  props: ['items'],
  components: {

  },
  data() {
    return {

    }
  },
  created() {

  },
  mounted() {
    this.$loadScript("/js/menuPlay0.js")
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
