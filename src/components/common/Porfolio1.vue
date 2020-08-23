<template>
  <div>
    <!-- <div v-for="(item, index) in product.items" :key="index">
      <div class="img"
            :data-img="item.img">
        <span class="multiline" style="margin-top:150px;">
          <div class="container">
            <span class="max">{{item.title}}</span>
              <TextDisplay1 :text="item.text"></TextDisplay1>
          </div>
        </span>
      </div>
    </div> -->
    <div class="img"
          :data-img="product.img">
      <span class="multiline" style="margin-top:150px;">
        <div class="container">
          <span class="max">{{product.title}}</span>
          <!-- <TextDisplay1 :text="product.text"></TextDisplay1> -->
        </div>
      </span>
    </div>
  </div>
</template>

<script>
// import $ from 'jquery'
// import "../../../public/js/porfolio1.js"
// import TextDisplay1 from '@/components/common/TextDisplay1';
export default{
  name:"Porfolio1",
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
    // this.$loadScript("/js/porfolio1.js")
    // .then((res) => {
    //   console.log("res",res);
    // })
    // .catch((e) => {
    //   console.log("e:",e);
    // })
  },

}

</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700,800);


.img
{
position: relative;
height: 900px;
/* attr data-type doesn't work anywhere for the moment :( */
/* Even in chrome canary */
/* So we do it the JS way */
background-image: attr(data-img url); /* Keep it anyway */
background-attachment: fixed;
background-size: cover;
background-position: center;
border-bottom: 3px solid white;
text-align: center;
font-family: 'Open Sans', sans-serif;
font-size: 28px;
font-weight: bold;
letter-spacing: -2px;
color: rgba(255,255,255,0.85);
text-stroke: 1.5px rgba(0,0,0,0.7);
cursor: default;
}
.img:last-of-type
{
border-bottom: none;
}
.img:before
{
content: '';
display: inline-block;
/* height: 100%; */
vertical-align: middle;
}
.multiline
{
display: inline-block;
}
.max
{
display: block;
font-size: 60px;
letter-spacing: 1px;
}
.img .permalink
{
position: absolute;
right: 0;
top: 0;
width: 16px;
height: 16px;
background: url(https://i.imgur.com/wdQCy4F.png) center no-repeat;
opacity: .2;
transition: opacity .5s;
}
.img .permalink:hover
{
opacity: 1;
}
</style>
