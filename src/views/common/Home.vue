<template>

  <div>
    <!-- <header class="masthead index">
        <div class="container">
            <div class="masthead-subheading">Welcome To Our Studio!</div>
            <div class="masthead-heading text-uppercase">It's Nice To Meet You</div>
            <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#contact">联系我们</a>
        </div>
    </header> -->
    <Carousel :slides="slidesItem" ></Carousel>
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

                  <!-- <v-expand-transition>
                    <div v-show="show">
                      <v-divider></v-divider>

                      <v-card-text>
                        I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                      </v-card-text>
                    </div>
                  </v-expand-transition> -->
                  <div class="go-corner" href="#">
                    <div class="go-arrow">
                      火爆
                    </div>
                  </div>
                </b-card>
              </b-col>
            </b-row>
          </b-card-text>
          <!-- <b-button href="#" variant="primary">了解更多</b-button> -->
        </b-card>
      </div>
    </div>
    <div class="plural common parallax" id="contact">
      <TimeLine></TimeLine>
    </div>





  </div>

</template>

<script>

   import Carousel from '@/components/common/Carousel';
   import TimeLine from '@/components/common/TimeLine';
   // import Card from '@/components/commun/Card';

  export default{
    name:"Home",
    components:{
       // GoogleMap,
       Carousel,
       TimeLine
    },
    props:[

    ],
    metaInfo: {
        title: '燕参堂',
        // override the parent template and just use the above title only
        titleTemplate: '%s',
        meta: [
          { name: 'description', content: '寻找欧洲代理商' },
          { name: 'keywords', content: 'so healthy,sohealthy.eu,欧洲代理,兼职' },
        ]

    },
    data() {
      return{
        products_hot:[1,2,3,4,5,6,],
        show:false,
        slidesItem:[
          {
            src: '/images/environment/magasin.jpg',
          },
          {
            src: '/assets/img/header-bg.jpg',
          },

        ],

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

    background-color: #f2f8f9;

    /* &:before {
     content: "";
     position: absolute;
     z-index: -1;
     top: -16px;
     right: -16px;
     background: #00838d;
     height: 32px;
     width: 32px;
     border-radius: 32px;
     transform: scale(1);
     transform-origin: 50% 50%;
     transition: transform 0.25s ease-out;
   }

   &:hover:before {
     transform: scale(21);
   } */
}

.card_personel:hover {
  z-index:999;
  /* background-color: red; */
  /* 135,206,250  (135,206,250,0.22)*/
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(200,206,250,0.22);
  -webkit-transition: all 200ms ease-in;
   -webkit-transform: scale(1.5);
   -ms-transition: all 200ms ease-in;
   -ms-transform: scale(1.5);
   -moz-transition: all 200ms ease-in;
   -moz-transform: scale(1.5);
   transition: all 300ms ease-in;
   transform: scale(1.1);
   /* background-color: #f2f8f9; */

   background: #87CEFA;

}

/* #00838d; */
.go-corner {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 32px;
  height: 32px;
  overflow: hidden;
  top: 0;
  right: 0;
  background-color: red;
  border-radius: 0 4px 0 32px;
}

.go-arrow {
  margin-top: -4px;
  margin-right: -4px;
  color: white;
  font-family: courier, sans;
}


</style>
