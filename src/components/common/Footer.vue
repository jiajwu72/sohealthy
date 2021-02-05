<template>

  <!-- <v-footer
    dark
    class="footer"
  > -->
  <div class="">
    <section class="page-section" id="contact" style="padding:25px">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase" style="color:white;">地图坐标</h2>
                <GoogleMap></GoogleMap>
            </div>

        </div>
    </section>

    <div class="footer">
      <div class="container">
        <b-row>
          <b-col md="2" sm="2" cols="2">
            <b-img src="/images/environment/WechatIMG80.jpeg" fluid alt="Responsive image" style="width:100px;height:auto;"></b-img>
            <br><span style="color:white;line-height:25px;">欧洲地区负责人</span>
          </b-col>
          <b-col md="2" sm="2" cols="2">
            <b-img src="/images/environment/WechatIMG45.jpeg" fluid alt="Responsive image" style="width:100px;height:auto;"></b-img>
            <br><span style="color:white;line-height:25px;">中国地区负责人</span>
          </b-col>
          <b-col md="8" sm="8" cols="8" style="text-align:left;">
            <h6 style="color:white;line-height:25px;">
              11 rue de la présentation <br>
              75011 PARIS 11 <br>
              Métro Belleville ligne 11 2 <br>
              tél : +337 69 88 20 88
            </h6>
          </b-col>
        </b-row>
      </div>
    </div>

  </div>

  <!-- </v-footer> -->

</template>

<script>
import GoogleMap from '@/components/common/GoogleMap';
export default{
  name:"Footer",
  components:{
     GoogleMap,
  },
  data(){
    return{
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }
  }
}
</script>

<style scoped>


.footer{
  /* position: fixed; */
  /* background-color: white; */
  /* bottom: 0; */
  /* left: 0; */
  width: 100%;
  //height: 160px;
  background-image: url(/images/environment/_DSC0506.png);
  background-size: cover;
  background-position: 40% 20%;
  /* filter: blur(4px); */
  /* position: relative;
  left:0;
  bottom: 0; */
}

h6{
  /* position: fixed; */
    /* left:0;
    top: 0; */
  z-index: 99;
}

section#contact {
  background-color: #212529;
  background-image: url("/assets/img/map-image.png");
  background-repeat: no-repeat;
  background-position: center;
}

</style>
