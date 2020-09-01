<template>
<div class="top" >
  <div class="player-container">
    <!-- <vue-core-video-player src="/videos/燕窝-工厂视频/1572398251550.mp4"></vue-core-video-player> -->
    <VideoPlayer></VideoPlayer>


    <!-- <b-container class="sp_card">
      <h4>燕窝泡发</h4>
      <b-row>

        <b-col md="4">

            <v-img
              class="white--text align-end"
              height="200px"
              src="/images/燕窝/展示/燕窝-泡发图/mmexport1558049524889.jpg"
            >
            </v-img>
            <v-card-subtitle class="pb-0">主题</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>xxxxx</div>

              <div>xxxxxx</div>
            </v-card-text>
        </b-col>

        <b-col md="4">

            <v-img
              class="white--text align-end"
              height="200px"
              src="/images/燕窝/展示/燕窝-泡发图/mmexport1558049524889.jpg"
            >
            </v-img>
            <v-card-subtitle class="pb-0">主题</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>xxxxx</div>

              <div>xxxxxx</div>
            </v-card-text>
        </b-col>

        <b-col md="4">
            <v-img
              class="white--text align-end"
              height="200px"
              src="/images/燕窝/展示/燕窝-泡发图/mmexport1558049524889.jpg"
            >
            </v-img>
            <v-card-subtitle class="pb-0">主题</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>xxxxx</div>

              <div>xxxxxx</div>
            </v-card-text>
        </b-col>
      </b-row>
    </b-container> -->
    <div class="content">
      <b-container>
      <b-row>
        <!-- <b-col md="6">
          <Porfolio3 v-if="isMobile==false" :imgs="imgs" title="泡发实景图"></Porfolio3>
          <Porfolio4 v-else></Porfolio4>
        </b-col> -->
        <b-col md="6" style="text-align:center;">
          <div class="module" >
            <h3>炖煮步骤</h3>
            <!-- <article class="recipe count-1" v-for="(item, index) in dunzhu" :key="index"> -->
            <article :class="['recipe','count-1',index==id?'active':'']" v-for="(item, index) in dunzhu" :key="index">

              <div class="counter">
                <span>{{index+1}}</span>
              </div>

              <div class="post-details">
              <!-- <div :class="['post-details',index==id?'active':'']"> -->
                <p class="title">
                  <a style="cursor:pointer" @click="id=index">
                    {{item.title}}
                  </a>
                </p>
              </div>
            </article>
          </div>
          <!-- <TextDisplay1 :text="yanwo.paofa.desc"></TextDisplay1> -->
        </b-col>
        <b-col md="6">
          <v-card>
            <!-- <v-img
              height="250"
              :src="dunzhu[id].src"
            ></v-img> -->
            <Porfolio3 :imgs="imgs" title="泡发实景图"></Porfolio3>
            <v-card-text>
              <span>{{dunzhu[id].desc}}</span>
            </v-card-text>
          </v-card>
          <!-- <TextDisplay1 :text="dunzhu[id].desc"></TextDisplay1> -->
        </b-col>
      </b-row>
      </b-container>
    </div>
    <div class="">
      <b-container>
        <b-card
          header="燕窝展"
          header-tag="header">
          <b-card-text>
            <div id="scrollspy-nested" style="position:relative; height:500px; overflow-y:auto">
            <b-row>
              <b-col md="4" v-for="(item, index) in imgsG" :key="index">
                <b-card
                  class="mx-auto card_personel"
                  max-width="344"
                >
                  <v-img
                    :src="item"
                    height="200px"
                    @click="overlay = !overlay"
                  ></v-img>
                </b-card>
              </b-col>
            </b-row>
            </div>
          </b-card-text>
          <!-- <b-button href="#" variant="primary">了解更多</b-button> -->
        </b-card>
      </b-container>
    </div>

  </div>
</div>
</template>

<script>

import Porfolio3 from '@/components/common/Porfolio3';
// import Porfolio4 from '@/components/common/Porfolio4';
import VideoPlayer from '@/components/common/Main';
// import TextDisplay1 from '@/components/common/TextDisplay1';
// import MenuPlay0 from '@/components/common/MenuPlay0';

import yanwo from '@/assets/yanwo'


export default{
  name:"Ynyanwo",
  metaInfo: {
      title: '燕参堂',
      // override the parent template and just use the above title only
      titleTemplate: '%s | 印尼燕窝',
      meta: [
        { name: 'description', content: '印尼燕窝' },
        { name: 'keywords', content: '印尼燕窝, 燕窝代理, 法国燕窝' },
      ]

  },
  components: {
    Porfolio3,
    // Porfolio4,
    // TextDisplay1,
    VideoPlayer,

    // MenuPlay0,
  },
  data() {
    return {
      toMatchDevice : [
          /Android/i,
          /webOS/i,
          /iPhone/i,
          /iPad/i,
          /iPod/i,
          /BlackBerry/i,
          /Windows Phone/i
      ],
      isMobile:false,
      imgs:[],
      imgsG:[],
      yanwo:{},
      dunzhu:[],
      dunzhuDisplay:[],
      id:0,
    }
  },
  created() {
    this.isMobile=this.detectMob();
    this.yanwo=yanwo;
    this.dunzhu=yanwo.dunzhu;
    this.imgs=yanwo.imgs;
    this.imgsG=yanwo.galery.imgs;
    var i=-1;
    while (++i<this.dunzhu.length){
      this.dunzhuDisplay.push(false);
    }
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
    defineTexts(){
      this.texts.paofa={
        title:"泡发方法",
        desc:""
      }
    },
    display(index)
    {
      console.log("display",index);
      this.$set(this.dunzhuDisplay,index,true);
      console.log("fin display");
    }
  }

}

</script>
<style scoped>

.active{
  color: red;
}

h4{
  font-family: "Cardo", serif;
    font-size: 32px;
    line-height: 40px;
}

@media screen and (min-width: 600px) {
  .top{
    /* margin-top:100px; */
    /* background-color: #f5f5f5; */
    /* padding-top: 120px; */
    padding-bottom: 120px;
    /* background-color: #F2EDE3; */
  }
}

.sp_card{
  margin-top: 20px;
  text-align: center;
  /* border:0px solid black; */
}

.top{
  background-color: #F2EDE3;
}
@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700);
@import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700,300);

.module {
  max-width: 300px;
  box-shadow: 0 0 2px rgba(0, 0, 0, .8);
  -webkit-box-shadow: 0 0 2px rgba(0, 0, 0, .8);
  -moz-box-shadow: 0 0 2px rgba(0, 0, 0, .8);
  margin: 20px auto;
}
.module::after {
  background: inherit;
  z-index: 1;
  content: '';
  position: absolute;
  top: 50%;
  right:0;
  width: 7vmin;
  height: 7vmin;
  transform: translate(calc(-50% + 1px), -50%) rotate(-45deg);
  /* clip-path: polygon(-15% -15%, 110% 0%, 0% 110%); */
  clip-path: polygon(-15% -15%, 110% 0%, 0% 110%);
  box-shadow: -4px -2px 8px rgba(0,0,0,.4);
  border-radius: 1.5vmin 0 0 0;
}

.module h3 {
  background: #f1f1f1;
  font-family: "Source Sans Pro";
  font-weight: 700;
  text-align: center;
  padding: 10px;
  text-transform: uppercase;
  font-size: 16px;
}

.module h3 span {
  /* color: #1797D2; */
  border-bottom: 2px solid;
}

.module .recipe {
  display: table;
  border-bottom: 2px solid #f1f1f1;
  padding: 15px 20px;
}

.module .recipe:last-child {
  border-bottom: 0;
}

.module .recipe .counter, .module .recipe .post-details {
  display: table-cell;
  vertical-align: middle;
}

.module .recipe .counter span {
  display: block;
  padding: 5px 10px;
  background: #ffdf00;
  font-family: "Roboto Condensed";
  font-weight: 700;
  color: #666;
  font-size: 25px;
  margin-right: 10px;
}

.module .recipe .post-details {
  font-family: "Roboto Condensed";
  font-weight: 700;
  /* color: #666; */
}

.module .recipe .post-details .title {
  font-size: 17px;
  line-height: 20px;
  margin: 0;
}

.module .recipe .post-details .title a {
  /* color: #222; */
  text-decoration: none;
  display: block;
  -o-transition: .25s;
  -ms-transition: .25s;
  -moz-transition: .25s;
  -webkit-transition: .25s;
  transition: .25s;
}

.module .recipe .post-details .title a:hover {
  color: #e31d38;
}

.module .recipe .post-details .title a:active {
  color: #e31d38;
}

</style>
