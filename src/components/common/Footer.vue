<template>

  <!-- <v-footer
    dark
    class="footer"
  > -->
  <div class="">
    <section class="page-section" id="contact">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">地图坐标</h2>
                <GoogleMap></GoogleMap>

                <!-- <h3 class=" text-muted">
                  11 rue de la présentation <br>
                  75011 PARIS 11
                </h3> -->
            </div>

        </div>
    </section>
    <!-- <footer class="footer py-4">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-4 text-lg-left">Copyright © SoHealthy 2020</div>
                <div class="col-lg-1 my-3 my-lg-0">
                </div>
                <div class="col-lg-2 my-3 my-lg-0">
                    <b-img src="/images/environment/scan_shop.jpg" fluid alt="Responsive image"></b-img>
                </div>
                <div class="col-lg-1 my-3 my-lg-0">
                </div>
                <div class="col-lg-4 text-lg-right">
                    <a class="mr-3" href="#!">Privacy Policy</a>
                    <a href="#!">Terms of Use</a>
                </div>
            </div>
        </div>
    </footer> -->
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

</style>
