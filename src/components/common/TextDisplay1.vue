<template>
  <!-- <div class="box">
    <p class="split">
      {{text}}
    </p>
  </div> -->
  <div id="box">
    <p>
      {{text}}
    </p>
  </div>

</template>

<script>
// import $ from 'jquery'
// import "../../../public/js/porfolio1.js"
export default{
  name:"textDisplay1",
  props: ['text'],
  components: {

  },
  data() {
    return {

    }
  },
  created() {

  },
  mounted() {
    this.$loadScript("/js/text1.js")
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
#box {
  margin-top: 12%;
  /* margin-left: 20%;
  margin-right: 20%; */
  background-color: #d0ece7;
  box-shadow: 10px 5px 5px #5d6d7e;
  border-width: 5px;
  border-style: double;
  border-color: #154360;
  opacity: 0.4;
  border-radius: 30px;
  transition-duration:1.5s;
}

#box p {
  text-align: justify;
  margin: 5%;
  font-weight: bold;
  color: #292c2f;
  transition-duration:.5s;
  font-size: 18px;
}


#box p:hover {
    font-weight: bold;
    font-size: 22px;
}


#box:hover{
  opacity: 1;
}
</style>
