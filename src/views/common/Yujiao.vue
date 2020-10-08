<template>
<div class="">

  <!-- <Porfolio2 :product="product">
  </Porfolio2> -->
  <div style="">
    <div class="" v-for="(item, index) in product.items" :key="index" >
      <Porfolio1 :product="item">
      </Porfolio1>
      <b-row class="fullSreen" style="background-color:rgb(102,102,102);">
        <b-col md="9"  style="">

          <div class="text_block fullSreen" style="background-color:rgb(45,43,54);">
            <p id="scrollspy-nested" style="position:relative; height:100%; overflow-y:auto;color:white;">
              {{item.text}}
            </p>
          </div>
        </b-col>
        <b-col md="3" class="fullSreen video_font" >
          <video height="420px" width="100%" autoplay muted loop style="">
            <source :src="item.video" type="video/mp4">
          </video>
        </b-col>
      </b-row>
    </div>
  </div>

  <b-row class="text_pf_color bg_pf_color">
    <b-col md="6">
      <div >
      <!-- <b-container class="bg_pf_color2 shadow"> -->
      <div class="bg_pf_color2 shadow" style="text-align:center;padding:20px;">
      <h1>
        燕参堂教您发制北海黄鱼胶</h1>
        www.SoHealthy.eu
      <b-row class="bg_pf_color shadow" style="margin:20px;">
        <b-col md="6" sm="6" xs="6" class="little_overplay">
          <v-img
            src="/images/鱼胶/1.png"
            @click="overlay = !overlay"
          ></v-img>

          <h4> <div class="cercle bg_pf_color2 shadow">1</div> </h4>
          <p>准备一个干净的锅，加入饮用水，水要多，开火把水烧开，放入姜片，少量料酒，葱去腥，加入鱼胶</p>
        </b-col>
        <b-col md="6" sm="6" xs="6" class="little_overplay">
          <v-img
            src="/images/鱼胶/2.png"
            @click="overlay = !overlay"
          ></v-img>
          <h4><div class="cercle bg_pf_color2 shadow">2</div></h4>
          <p>把鱼胶放入锅内，盖上锅盖关火，把鱼胶闷在锅里面，等开水自然冷却。这是鱼胶明显变大变厚！</p>
        </b-col>
        <b-col md="6" sm="6" xs="6" class="little_overplay">
          <v-img
            src="/images/鱼胶/3.png"
            @click="overlay = !overlay"
          ></v-img>
          <h4 style="display:inline;"><div class="cercle bg_pf_color2 shadow">3</div></h4>
          <p>鱼胶换水，继续泡发5-6个小时即可完成第二次泡发。此时鱼胶已经完整而充分泡发了。</p>
        </b-col>
        <b-col md="6" sm="6" xs="6" class="little_overplay">
          <v-img
            src="/images/鱼胶/4.png"
            @click="overlay = !overlay"
          ></v-img>
          <h4><div class="cercle bg_pf_color2 shadow">4</div></h4>
          <p>泡发好的鱼胶放入冰箱备用。鱼胶可以搭配桂圆，枸杞，核桃，桃胶等等...可以加入牛奶，
            再放入冰箱放一晚上就变成牛奶鱼胶冻了，也可以搭配排骨，鸡，鸭等肉类食物一起炖煮。</p>
        </b-col>


      </b-row>
      </div>


      <!-- </b-container> -->
    </div>
    </b-col>
    <b-col md="6" style="display:flex;text-align:center;">
      <div class="bg_pf_color2 shadow" style="margin:0 auto;width:75%;padding:20px;">
        <div class="bg_pf_color2">
          <b-container>
            <b-card
              header=""
              header-tag="header" style="color:black;">
              <b-card-text>
                <div id="scrollspy-nested" style="position:relative; height:700px; overflow-y:auto">
                <b-row>
                  <b-col md="12" v-for="(item, index) in imgsG" :key="index">
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
            </b-card>
          </b-container>
        </div>

      </div>
    </b-col>
  </b-row>

</div>
</template>

<script>
// import Porfolio2 from '@/components/common/Porfolio2';
import Porfolio1 from '@/components/common/Porfolio1';
export default{
  name:"Yujiao",
  components: {
    // Porfolio2
    Porfolio1
  },
  data() {
    return {
      product:{},
      imgsG:[],
    }
  },
  metaInfo: {
      title: '燕参堂',
      // override the parent template and just use the above title only
      titleTemplate: '%s | 鱼胶',
      meta: [
        { name: 'description', content: '鱼胶' },
        { name: 'keywords', content: '北海鱼胶,冰岛鳕鱼胶' },
      ]

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
    const txt1="苏里南北海公肚，北海鱼胶中的佼佼者，外观较漂亮，看起来没有巴西的厚，但是肉质比巴西的更紧致，炖后变厚，吃起来爽口。北海鱼胶是近年来的新宠，在香港被称为扎胶，功效受到广大人士的认可，有赤嘴鳘的功效，价格又不及赤嘴鳘鱼胶贵，性价比是非常高的．北海鱼胶的胶原蛋白质量很好，能滋补气血，增强抵抗力，美容，术后修复，滋润修复子宫．所以对于备孕，孕期补充营养，产后月子，下奶都是不错的选择！有抵抗力差的朋友反映，吃上一斤后，在换季的时候能明显感觉到不那么容易感冒了！"

    const t2="";
    const txt2="鳕鱼胶产自冰岛常年温度 5 摄氏度以下海域，纯正深海鱼胶。冰岛鳕鱼胶的特点是有厚度，煲起不腥不潺和不溶化，嫩滑又爽口，堪称极品。鳕鱼胶食疗功效高，含有丰富的蛋白质、胶质、磷质及钙质，女士视为养颜珍品。对身体各部分均有补益能力，无论男女老少均可食用，是补而不燥之珍贵佳品。"

    // const t3="🌺北海阴阳肚";
    // const txt3="墨西哥北海花胶又被叫做“老鼠头”因为其胶型像一只老鼠，尤其胶身顶部的两只耳朵跟老鼠耳朵很像。";
    //
    // const t4="🌺巴西北海花胶";
    // const txt4="北海阴阳肚的主产区在苏里南和巴西，每支一般都不大，至多50~100克左右。阴阳肚胶身有两条比较明显的透明纹路，两个“耳朵”比其它北海胶都要长，而且不像其它北海胶耳朵只长在胶体头部，而是从胶体中上部一直延伸至头部。"+
    // "相比于其他北海花胶品种，北海阴阳肚上半部分比较厚实，下半部较薄，而且更长。";
    this.imgsG=[
      "/images/鱼胶/屏幕快照 2020-10-07 16.23.48.png",
      "/images/鱼胶/屏幕快照 2020-10-07 16.20.34.png",
      "/images/鱼胶/屏幕快照 2020-10-07 16.24.24.png",

    ]

    this.product={

      items:[
        {
          title:t1,
          text:txt1,
          img:"/images/鱼胶/北海鱼胶/_DSC0591.JPG",
          video:"/images/鱼胶/北海鱼胶/1592951088253.mp4",
        },
        {
          title:t2,
          text:txt2,
          img:"/images/鱼胶/yujiao.png"
          // video:"/images/鱼胶/冰岛雪鱼胶/1592951088253.mp4",
        },
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
