<template>

  <div>
    <header class="masthead">
        <div class="container">
            <div class="masthead-subheading">Welcome To Our Studio!</div>
            <div class="masthead-heading text-uppercase">It's Nice To Meet You</div>
            <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">了解更多</a>
        </div>
    </header>

    <!-- <v-row class="product">
      <b-col md="12">
        <b-breadcrumb :items="items" ></b-breadcrumb>
      </b-col>

      dskmf,kldf,skd
    </v-row> -->
    <div class="singular common parallax">
      <div class="container">
        <b-card
          header="热销产品"
          header-tag="header"
        >
          <b-card-text>
            <b-row>
              <b-col md="4" v-for="(item, index) in products_hot" :key="index">
                <b-card
                  class="mx-auto card_personel"
                  max-width="344"
                >
                  <v-img
                    src="images/concombre-mer.png"
                    height="200px"
                  ></v-img>

                  <v-card-title>
                    海参
                  </v-card-title>

                  <v-card-subtitle>
                    简介
                  </v-card-subtitle>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                      icon
                      @click="show = !show"
                    >
                      <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                  </v-card-actions>

                  <v-expand-transition>
                    <div v-show="show">
                      <v-divider></v-divider>

                      <v-card-text>
                        I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                      </v-card-text>
                    </div>
                  </v-expand-transition>
                </b-card>
              </b-col>
            </b-row>
          </b-card-text>
          <!-- <b-button href="#" variant="primary">了解更多</b-button> -->
        </b-card>
      </div>
    </div>
    <div class="plural common parallax">
      <!-- <v-parallax
        dark
        src="images/bg1.jpg"
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center" cols="18">
            <h1 class="display-1 font-weight-thin mb-4">我们的工厂</h1>

          </v-col>
        </v-row>
      </v-parallax> -->
    </div>



    <section class="page-section" id="contact">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">地图坐标</h2>
                <GoogleMap></GoogleMap>

                <h3 class=" text-muted">
                  11 rue de la présentation <br>
                  75011 PARIS 11
                </h3>
            </div>
            <!-- <form id="contactForm" name="sentMessage" novalidate="novalidate">
                <div class="row align-items-stretch mb-5">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input class="form-control" id="name" type="text" placeholder="您的称呼 *" required="required" data-validation-required-message="Please enter your name." />
                            <p class="help-block text-danger"></p>
                        </div>
                        <div class="form-group">
                            <input class="form-control" id="email" type="email" placeholder="您的邮箱 *" required="required" data-validation-required-message="Please enter your email address." />
                            <p class="help-block text-danger"></p>
                        </div>
                        <div class="form-group mb-md-0">
                            <input class="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number." />
                            <p class="help-block text-danger"></p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group form-group-textarea mb-md-0">
                            <textarea class="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                            <p class="help-block text-danger"></p>
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <div id="success"></div>
                    <button class="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Send Message</button>
                </div>
            </form> -->
        </div>
    </section>

  </div>

</template>

<script>

   // import Carousel from '@/components/common/Carousel';
   import GoogleMap from '@/components/common/GoogleMap';
   // import Card from '@/components/commun/Card';

  export default{
    name:"Home",
    components:{
       GoogleMap,
    },
    props:[

    ],
    data() {
      return{
        products_hot:[1,2,3,4,5,6,],
        show:false,
      }
    },

    created() {

    },

    methods: {

    },
  }
</script>

<style scoped>

.common{
  /* margin-left:10px; */
}

.singular{
  /* width:100%; */
  background-color: #F7F5F4;

}

.card_personel{
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  -webkit-transition: all 200ms ease-in;
    -webkit-transform: scale(1);
    -ms-transition: all 200ms ease-in;
    -ms-transform: scale(1);
    -moz-transition: all 200ms ease-in;
    -moz-transform: scale(1);
    transition: all 200ms ease-in;
    transform: scale(1);
}

.card_personel:hover {
  z-index:999;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  -webkit-transition: all 200ms ease-in;
   -webkit-transform: scale(1.5);
   -ms-transition: all 200ms ease-in;
   -ms-transform: scale(1.5);
   -moz-transition: all 200ms ease-in;
   -moz-transform: scale(1.5);
   transition: all 300ms ease-in;
   transform: scale(1.1);
}


</style>
