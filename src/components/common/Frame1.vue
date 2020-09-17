<template>
  <div>
    <Header></Header>
    <div class="content">
      <slot>
      </slot>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from './Footer';
  import Header from './Header';
  export default{
    name:"Home",
    components:{
      Header,
      Footer,
    },
    // props:[
    //   //'category'
    //   'notConnected'
    // ],
  }
</script>

<style scoped>
@media screen and (max-width: 600px) {
  .content{
    /* margin-top:58px;
    background-color: #faf9f8; */
    /* margin-top:80px; */
  }
  .container{
    /* padding: 12px; */
  }
}
</style>
