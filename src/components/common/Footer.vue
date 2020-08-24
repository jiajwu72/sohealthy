<template>

  <!-- <v-footer
    dark
    class="footer"
  > -->
  <div class="">
    <section class="page-section" id="contact">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase" style="color:white;">地图坐标</h2>
                <GoogleMap></GoogleMap>
            </div>

        </div>
    </section>

    <v-footer class="footer">
      <div class="container">
        <b-row>
          <b-col md="2">
            <b-img src="/images/environment/scan_shop.jpg" fluid alt="Responsive image"></b-img>
          </b-col>
          <b-col md="8" style="text-align:left;">
            <h4>
              11 rue de la présentation <br>
              75011 PARIS 11 <br>
              Métro Belleville ligne 11 2 <br>
              tél : +337 69 88 20 88
            </h4>

          </b-col>
          <!-- <b-col md="2">
            <b-btn
                  color="pink"

                >

                  <v-icon>mdi-arrow-collapse-up</v-icon>
            </b-btn>

          </b-col> -->
        </b-row>
      </div>
    </v-footer>
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
  /* position: fixed;
  margin-top: 50px; */
}

.footer{
  /* position: fixed; */
  background-color: white;
  /* bottom: 0; */
  /* left: 0; */
  width: 100%;
}

section#contact {
  background-color: #212529;
  background-image: url("/assets/img/map-image.png");
  background-repeat: no-repeat;
  background-position: center;
}

</style>
