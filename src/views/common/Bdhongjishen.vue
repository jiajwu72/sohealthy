<template>
<div class="font_sp">
  <div class="" v-for="(item, index) in product.items" :key="index">
    <Porfolio1 :product="item">
    </Porfolio1>
    <b-row class="fullSreen">
      <b-col md="6" class="text_block fullSreen">
        <!-- <TextDisplay1 :text="item.text"></TextDisplay1> -->
        <div id="scrollspy-nested" style="position:relative; height:100%; overflow-y:auto">
          {{item.text}}
        </div>
      </b-col>
      <b-col md="6" class="fullSreen">
        <video height="420px" width="100%" autoplay muted loop>
          <source :src="item.video" type="video/mp4">
        </video>
      </b-col>
    </b-row>
  </div>
  <div class="text_pf_color bg_pf_color" style="text-align:center;padding:20px;">
    <b-container class="bg_pf_color2">
    <h1>燕参堂教您发制海参</h1>
    <b-row class="bg_pf_color" style="margin:20px;">
      <b-col md="4" class="little_overplay">
        <v-img
          src="/images/海参/1.png"
          @click="overlay = !overlay"
        ></v-img>
        <h4>浸泡</h4>
        <p>将海参洗净放入冰箱浸泡72小时，每天换水一次。</p>
      </b-col>
      <b-col md="4" class="little_overplay">
        <v-img
          src="/images/海参/2.png"
          @click="overlay = !overlay"
        ></v-img>
        <h4>去沙嘴</h4>
        <p>将海参剖开，扣掉沙嘴清理沙质，把海参筋剪成2，3段。</p>
      </b-col>
      <b-col md="4" class="little_overplay">
        <v-img
          src="/images/海参/3.png"
          @click="overlay = !overlay"
        ></v-img>
        <h4>水煮</h4>
        <p>上锅加盖煮沸，再改用文火煮30-60分钟。</p>
      </b-col>
      <b-col md="4" class="little_overplay">
        <v-img
          src="/images/海参/4.png"
          @click="overlay = !overlay"
        ></v-img>
        <h4>冷却</h4>
        <p>闷在锅内，自然冷却后换水，放入冰箱继续泡一夜。</p>
      </b-col>
      <b-col md="4" class="little_overplay">
        <v-img
          src="/images/海参/5.png"
          @click="overlay = !overlay"
        ></v-img>
        <h4>水煮</h4>
        <p>把软的海参继续水煮，用筷子夹起来俩边自然下垂就可以了。</p>
      </b-col>
      <b-col md="4" class="little_overplay">
        <v-img
          src="/images/海参/6.png"
          @click="overlay = !overlay"
        ></v-img>
        <h4>冷藏</h4>
        <p>换凉水放入冰箱低温再泡3天，泡发完成，每天换水可保存2，3周，也可以单独冷藏保存。</p>
      </b-col>

    </b-row>
    <b-row style="margin:80px;">
      <b-col class="bg_pf_color" md="2" style="box-shadow: 10px 5px 5px #5d6d7e;">
        <h3>小贴士</h3>
      </b-col>
      <b-col class="bg_pf_color" md="10" style="box-shadow: 10px 5px 5px #5d6d7e;">
        <p>海参遇油污即化，请确保泡发或制煮器皿无油。海参因个体差异极小，在泡发时间上，可适度调整。</p>
      </b-col>
    </b-row>
    </b-container>
  </div>

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
    const txt1="红极参是一种生长于靠近北极圈的冰岛共和国深海水域的野生海参，参龄10年以上。红极参体壁总氨基酸、药效氨基酸和鲜味氨基酸总量均为最高，脂肪量少，含有丰富的海参皂甙，肉质呈金黄色，体大肉厚，为天然补钙食品。1 冰岛红极参被称为“长寿之神”红极参含有50多种天然营养成分，其中酸性粘多糖和软骨素具有延缓衰老的特效，能快速修复体内受损的细胞，延长寿命，增强器官的功能。<br>2 冰岛红极参被称为“亚健康克星”红极参含有丰富的海参皂甙、海参多糖，能提供给大脑丰富而均衡的营养促使大脑智商提高，记忆力增强，消除大脑疲劳。3 冰岛红极参被称为“抗癌灵丹”红极参具有的很强的细胞毒性及鱼毒，能抑制癌细胞生长，有提高人体免疫力和抗癌杀菌作用，抗癌能力强。4 冰岛红极参被称为“补血佳品”红极参含有微量元素铁和钒，使机体更加充分利用铁元素，刺激造血机制，达到补血益气的功效。5 冰岛红极参被称为“美容之宝”红极参富含的精氨酸，粘多糖对保持皮肤水分、增强皮肤弹性，有神奇的效果，其胶原蛋白可使肌肤保持光滑及富有弹性，延缓机体衰老。6 冰岛红极参被称为“血管清道夫”红极参所含的海参多糖是防止动脉粥硬化、修复陈旧性心机梗塞最有效的物质。它具有清洗血管、抑制栓塞形成、降低血脂作用，对脑血栓和缺血性心脏病有明显的改善。"


    const t2="";
    const txt2="希腊刺参，产自希腊北方萨索斯岛（Thasos Island）南端海滩，被称作是环保达标的“蓝旗海域”的地方。该区域水质纯净、温度低、盐分适中。希腊人不食用海参，加上该海域人迹罕至，野生欧然海参物产丰富，符合海参天然慢生长的特性。海参鉴别 首先要了解产地：生长在高温海域的海参，海参长得很快但营养成分不高；而极寒海域，很少有海参生长。所以最优质的海参，都是生长在北纬39~45°之间的温带、亚寒带交界海域。希腊附近多个海域都有海参生长，都在北纬39度以北区域的,，希腊海参闻起来有淡淡的海水的咸味，泡发时间：希腊野生干刺海参，如果是九到十成干，在泡发的第一步，往往需要浸泡24小时。如果是人工养殖的，1小时足矣。这时因为野生海参肉质更紧的原因。涨发比率：希腊野生海参，泡发后涨发率至少是2倍以上，部分可以达到3倍以上。试试口味：优质海参泡发食用，壁厚半透明，咬起来感觉到弹牙，在不添加佐料的时候，几乎是无味的。"

    // const t3="";
    // const txt3="“红极参”就是在这优良的水域中生长的一种高档海参。由于红极参产量少，生长期长，冰岛政府以前限量捕捞，而捕捞的少量红极参也只供给香港和新加坡的高档餐厅，或者用于提炼有效成分生产奢侈品级的美容品，保健品和减肥食品及一些药品，极少进入国内。";

    // const t4="";
    // const txt4="";


    this.product={

      items:[
        {
          title:t1,
          text:txt1,
          img:"images/海参/冰岛红极参/IMG_20170509_015634.jpg",
          video:"images/海参/冰岛红极参/1583275494958.mp4"
        },
        {
          title:t2,
          text:txt2,
          img:"/images/希腊海参/希腊大号刺参/03.jpg",
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
  box-shadow: 10px 5px 5px #5d6d7e;
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
  color:rgb(65,99,137)
}

.little_overplay{
  padding-left:75px;
  padding-right:75px;
}

.bg_pf_color{
  background-color:rgb(159, 194, 236);
}

.bg_pf_color2{
  background-color:rgb(223, 237, 253);
}

@font-face {
  font-family: 'xingliti';
  src: url(/fonts/ZCOOLxingliti-Regular.ttf);
}

.font_sp{
  font-family: 'xingliti', Arial, Helvetica, san-serif;
}



</style>
