
<template>

  <v-carousel
    cycle
    height="600"
    hide-delimiter-background
    :show-arrows="false"
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      :src="slides[i].src"
      class="bloc"

    >
    </v-carousel-item>
  </v-carousel>
<!-- <div>
</div> -->

</template>

<script>
  export default {
    name:"Carousel",
    props: ['slides'],
    data () {
      return {
        isMobile:false,
        items:[],
      }
    },
    created() {
      this.isMobile=this.detectMob();
      console.log(this.isMobile)
      this.items=["/images/environment/WechatIMG254.jpeg","/images/environment/WechatIMG255.jpeg","/images/environment/WechatIMG256.jpeg","/images/environment/WechatIMG257.jpeg","/images/environment/WechatIMG258.jpeg"]
    },

    methods: {
      detectMob() {
          const toMatch = [
              /Android/i,
              /webOS/i,
              /iPhone/i,
              /iPad/i,
              /iPod/i,
              /BlackBerry/i,
              /Windows Phone/i
          ];

          return toMatch.some((toMatchItem) => {
              return navigator.userAgent.match(toMatchItem);
          });
      },

    }

  }
</script>
<!-- <script src="../../../public/js/jquery-1.11.0.min.js"></script>
<script src="../../../public/js/jquery.firefly-0.7.min.js"></script>
<script type="text/javascript">
</script> -->

<style scoped>
@import '/css/normalize.css';
@import '/css/style.css';


.fullScreen{
  padding: 0px;
  margin: 0px;
}

.v-image{
  max-width: 100%;
}
img{
  max-width: 100%;
}

</style>
