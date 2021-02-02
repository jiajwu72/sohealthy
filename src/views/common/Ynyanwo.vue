<template>
<div class="top" >
  <div class="player-container">
    <!-- <vue-core-video-player src="/videos/燕窝-工厂视频/1572398251550.mp4"></vue-core-video-player> -->
    <VideoPlayer class="bg_pf_color2"></VideoPlayer>




    <div class="text_pf_color bg_pf_color">
    <b-container >
    <b-row >
      <b-col md="12">
      <div >
        <!-- <b-container class="bg_pf_color2 shadow"> -->
        <div class="bg_pf_color2 shadow" style="text-align:center;padding:20px;">
        <h1>
          燕参堂教您发制燕窝</h1>
          www.SoHealthy.eu
        <b-row class="bg_pf_color shadow" style="margin:20px;">
          <b-col md="4" sm="6" xs="6" class="little_overplay">
            <v-img
              src="/images/燕窝/1.png"
              @click="overlay = !overlay"
            ></v-img>

            <h4> <div class="cercle bg_pf_color2 shadow">1</div> 浸泡</h4>
            <p>准备无油器皿，倒入纯净水，放入燕窝，浸泡8个小时以上(尽量延长泡发时间)。</p>
          </b-col>
          <b-col md="4" sm="6" xs="6" class="little_overplay">
            <v-img
              src="/images/燕窝/2.png"
              @click="overlay = !overlay"
            ></v-img>
            <h4><div class="cercle bg_pf_color2 shadow">2</div>撕条</h4>
            <p>燕窝泡开后，顺着纹路撕成一条条丝状，燕角部位尽量搓开，再继续泡发几个小时。
3.用镊子去除小细毛(由于我们的燕窝品质上乘，干净度极高，清洗时毫不费神)。</p>
          </b-col>
          <b-col md="4" sm="6" xs="6" class="little_overplay">
            <v-img
              src="/images/燕窝/3.png"
              @click="overlay = !overlay"
            ></v-img>
            <h4 style="display:inline;"><div class="cercle bg_pf_color2 shadow">3</div>清洗去杂毛</h4>
            <p>用镊子去除小细毛(由于我们的燕窝品质上乘，干净度极高，清洗时毫不费神)。</p>
          </b-col>
          <b-col md="4" sm="6" xs="6" class="little_overplay">
            <v-img
              src="/images/燕窝/4.png"
              @click="overlay = !overlay"
            ></v-img>
            <h4><div class="cercle bg_pf_color2 shadow">4</div>炖煮</h4>
            <p>将泡发好的燕窝放入炖盅，加入适量的水，盖上盖子隔水炖，水开后改用文火炖30-40分钟左右即可。</p>
          </b-col>
          <b-col md="4" sm="6" xs="6" class="little_overplay">
            <v-img
              src="/images/燕窝/5.png"
              @click="overlay = !overlay"
            ></v-img>
            <h4 style="display:inline;"><div class="cercle bg_pf_color2 shadow">5</div>炖好出盅</h4>
            <p>炖好的燕窝，色泽晶莹剔透，非常爽滑。自然冷却后放入冰箱可保存一周左右。</p>
          </b-col>
          <b-col md="4" sm="6" xs="6" class="little_overplay">
            <v-img
              src="/images/燕窝/6.png"
              @click="overlay = !overlay"
            ></v-img>
            <h4><div class="cercle bg_pf_color2 shadow">6</div>燕窝的搭配</h4>
            <p>炖好的燕窝可搭配牛奶，红枣，枸杞，龙眼...等等， 也可以搭配任何新鲜水果。</p>
          </b-col>

        </b-row>
        </div>
        <!-- </b-container> -->
        <!-- <b-container> -->
        <div style="padding:20px;">
          <b-row>
            <b-col class="bg_pf_color2 shadow" md="2" style="border-radius: 10% 0% 0% 10%;">
              <h3>小贴士</h3>
            </b-col>
            <b-col md="1"></b-col>
            <b-col class="bg_pf_color2 shadow" md="9">
              <p>海参遇油污即化，请确保泡发或制煮器皿无油。海参因个体差异极小，在泡发时间上，可适度调整。</p>
            </b-col>
          </b-row>
        </div>
        <!-- </b-container> -->
      </div>
      </b-col>
    </b-row>
    </b-container>
    </div>

    <div class="bg_pf_color2">
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

// import Porfolio3 from '@/components/common/Porfolio3';
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
    // Porfolio3,
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
    /* padding-bottom: 120px; */
    /* background-color: #F2EDE3; */
  }
}

.sp_card{
  /* margin-top: 20px; */
  text-align: center;
  /* border:0px solid black; */
}

/* .top{
  background-color: #F2EDE3;
} */
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
.shadow{
  box-shadow: 5px 5px 5px #5d6d7e;
}

.cercle{
  display: inline;
  padding: 8px 12px 8px 12px;
  border-radius: 50%;
  /* background-color: orange; */
  width: 40px;
  height: 40px;
}
.font-black{
  background-color: black;
  height: 60px;
  /* margin-bottom: px;  */
}

.bg_pf_color2{
  /* background-color:rgb(45, 43, 53); */
  background-color:rgb(255, 245, 244);
}

.bg_pf_color{
  /* background-color:rgb(90, 86, 106); */

  background-color:rgba(238, 222, 223,1);
}

</style>
