<template>
<div class="">

  <div style="">
    <div class="" v-for="(item, index) in product.items" :key="index" >
      <Porfolio1 :product="item">
      </Porfolio1>
      <b-row class="fullSreen" style="background-color:rgb(102,102,102);" v-if="item.text">
        <b-col md="9"  style="">
          <!-- <TextDisplay1 :text="item.text"></TextDisplay1> -->
          <div class="text_block fullSreen" style="background-color:rgb(45,43,54);">
            <p id="scrollspy-nested" style="position:relative; height:100%; overflow-y:auto;color:white;">
              {{item.text}}
            </p>
          </div>
        </b-col>
        <b-col md="3" class="fullSreen video_font" >
          <!-- <img src="/images/environment/131.png" alt="" style="width:100%;border:1px red solid;" usemap="#workmap"> -->
          <!-- <map name="workmap">
            <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm">
          </map> -->
          <video height="420px" width="100%" autoplay muted loop style="">
            <source :src="item.video" type="video/mp4">
          </video>
        </b-col>
      </b-row>
    </div>
  </div>
  <Porfolio1 :product="item">
  </Porfolio1>
  <b-row class="text_pf_color bg_pf_color">
    <b-col md="6">
      <div >
      <!-- <b-container class="bg_pf_color2 shadow"> -->
      <div class="bg_pf_color2 shadow" style="text-align:center;padding:20px;">
      <h1>
        燕参堂教您发制希腊野生海参</h1>
        www.SoHealthy.eu
      <b-row class="bg_pf_color shadow" style="margin:20px;">
        <b-col md="4" sm="6" xs="6" class="little_overplay">
          <v-img
            src="/images/海参/1.png"
            @click="overlay = !overlay"
          ></v-img>

          <h4> <div class="cercle bg_pf_color2 shadow">1</div> 浸泡</h4>
          <p>将海参洗净放入冰箱浸泡72小时，每天换水一次。</p>
        </b-col>
        <b-col md="4" sm="6" xs="6" class="little_overplay">
          <v-img
            src="/images/海参/2.png"
            @click="overlay = !overlay"
          ></v-img>
          <h4><div class="cercle bg_pf_color2 shadow">2</div>去沙嘴</h4>
          <p>将海参剖开，扣掉沙嘴清理沙质，把海参筋剪成2，3段。</p>
        </b-col>
        <b-col md="4" sm="6" xs="6" class="little_overplay">
          <v-img
            src="/images/海参/3.png"
            @click="overlay = !overlay"
          ></v-img>
          <h4 style="display:inline;"><div class="cercle bg_pf_color2 shadow">3</div>水煮</h4>（第一次）
          <p>上锅加盖煮沸，再改用文火煮30-60分钟。</p>
        </b-col>
        <b-col md="4" sm="6" xs="6" class="little_overplay">
          <v-img
            src="/images/海参/4.png"
            @click="overlay = !overlay"
          ></v-img>
          <h4><div class="cercle bg_pf_color2 shadow">4</div>冷却</h4>
          <p>闷在锅内，自然冷却后换水，放入冰箱继续泡一夜。</p>
        </b-col>
        <b-col md="4" sm="6" xs="6" class="little_overplay">
          <v-img
            src="/images/海参/5.png"
            @click="overlay = !overlay"
          ></v-img>
          <h4 style="display:inline;"><div class="cercle bg_pf_color2 shadow">5</div>水煮</h4>(第二次)
          <p>把软的海参继续水煮，用筷子夹起来俩边自然下垂就可以了。</p>
        </b-col>
        <b-col md="4" sm="6" xs="6" class="little_overplay">
          <v-img
            src="/images/海参/6.png"
            @click="overlay = !overlay"
          ></v-img>
          <h4><div class="cercle bg_pf_color2 shadow">6</div>冷藏</h4>
          <p>换凉水放入冰箱低温再泡3天，泡发完成，每天换水可保存2，3周，也可以单独冷藏保存。</p>
        </b-col>

      </b-row>
      </div>

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
    <b-col md="6" style="display:flex;text-align:center;">
      <div class="bg_pf_color2 shadow" style="margin:0 auto;width:75%;padding:20px;">
        <h1>燕参堂海参泡发教程视频</h1>
        <video height="auto" width="100%"  autoplay="false">
          <source src="/images/海参/aleo 2020-09-09 16.59.05.mp4" type="video/mp4">
        </video>
      </div>
    </b-col>
  </b-row>
</div>
</template>

<script>
import Porfolio1 from '@/components/common/Porfolio1';
// import TextDisplay1 from '@/components/common/TextDisplay1';

export default{
  name:"Bdhongjishen",
  components: {
    Porfolio1,
    // TextDisplay1,
  },
  metaInfo: {
      title: '燕参堂',
      // override the parent template and just use the above title only
      titleTemplate: '%s | 海参',
      meta: [
        { name: 'description', content: '销售冰岛红极参/希腊海参' },
        { name: 'keywords', content: '冰岛红极参,希腊海参,海参' },
      ]

  },
  data() {
    return {
      product:{},
    }
  },
  created() {
    this.$loadScript("/js/porfolio1.js")
    .then((res) => {
      console.log("res",res);
    })
    .catch((e) => {
      console.log("e:",e);
    })
    const t1="";
    const txt1="希腊刺参，产自希腊北方萨索斯岛（Thasos Island）南端海滩，被称作是环保达标的“蓝旗海域”的地方。该区域水质纯净、温度低、盐分适中。希腊人不食用海参，加上该海域人迹罕至，野生欧然海参物产丰富，符合海参天然慢生长的特性。海参鉴别 首先要了解产地：生长在高温海域的海参，海参长得很快但营养成分不高；而极寒海域，很少有海参生长。所以最优质的海参，都是生长在北纬39~45°之间的温带、亚寒带交界海域。希腊附近多个海域都有海参生长，都在北纬39度以北区域的，希腊海参闻起来有淡淡的海水的咸味。"


    const t2="";
    const txt2="泡发时间：希腊野生干刺海参，如果是九到十成干，在泡发的第一步，往往需要浸泡24小时。如果是人工养殖的，1小时足矣。这时因为野生海参肉质更紧的原因。涨发比率：希腊野生海参，泡发后涨发率至少是2倍以上，部分可以达到3倍以上。试试口味：优质海参泡发食用，壁厚半透明，咬起来感觉到弹牙，在不添加佐料的时候，几乎是无味的。"

    // const t3="";
    // const txt3="“红极参”就是在这优良的水域中生长的一种高档海参。由于红极参产量少，生长期长，冰岛政府以前限量捕捞，而捕捞的少量红极参也只供给香港和新加坡的高档餐厅，或者用于提炼有效成分生产奢侈品级的美容品，保健品和减肥食品及一些药品，极少进入国内。";

    // const t4="";
    // const txt4="";


    this.product={

      items:[
        {
          title:t1,
          text:txt1,
          img:"images/environment/_DSC0538的副本.png",
          video:"images/海参/冰岛红极参/1583275494958.mp4"
        },
        {
          title:t2,
          text:txt2,
          img:"/images/environment/_DSC0490.png",
          video:"images/海参/希腊海参/1586896135418.mp4",
        },
        {
          title:"",
          text:"",
          img:"/images/海参/WechatIMG89.jpeg",
          video:"images/海参/希腊海参/1586896135418.mp4",
        },
        // {
        //   title:t3,
        //   text:txt3,
        //   img:"images/海参/冰岛红极参/冰岛/3.jpg"
        // },
        // {
        //   title:t4,
        //   text:txt4,
        //   img:"images/海参/冰岛红极参/冰岛/4.jpg"
        // },

      ]
    }

  }

}

</script>
<style scoped>
.fullSreen{
  margin: 0px;
  padding: 0px;
}

.text_block{
  background-color: #deebef;
  box-shadow: 10px 5px 5px #2d2d2e;
  border-radius: 30px;
  padding: 20px;
}

.text_block p{
  text-align: justify;
  margin: 5%;
  font-weight: bold;
  color: #292c2f;
  transition-duration:.5s;
  font-size: 18px;
}

.text_pf_color{
  /* color:rgb(65,99,137) */
  color: white;
}

.little_overplay{
  padding-left:25px;
  padding-right:25px;
}

@media screen and (max-width: 700px) {
  .little_overplay{
    padding-left:75px;
    padding-right:75px;
  }
}
.bg_pf_color2{
  /* background-color:rgb(45, 43, 53); */
  background-color:rgba(102, 102, 102,0.3);;
}

.bg_pf_color{
  /* background-color:rgb(90, 86, 106); */
  background-color:rgb(45, 43, 53);
}

@font-face {
  font-family: 'xingliti';
  src: url(/fonts/ZCOOLxingliti-Regular.ttf);
}

.font_sp{
  font-family: 'xingliti', Arial, Helvetica, san-serif;
}

.shadow{
  box-shadow: 10px 5px 5px #5d6d7e;
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



.video_font{

  /* background: url("/images/environment/131.JPG"); */
}
</style>
