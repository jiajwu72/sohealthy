<template>
<div class="">

  <Porfolio2 :product="product">
  </Porfolio2>
  <b-row>
    <b-col md="6">

    </b-col>

    <b-col md="6">

    </b-col>
  </b-row>
</div>
</template>

<script>
import Porfolio2 from '@/components/common/Porfolio2';
export default{
  name:"Yujiao",
  components: {
    Porfolio2
  },
  data() {
    return {
      product:{},
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
    const t1="北海鱼胶";
    const txt1="苏里南北海公肚，北海鱼胶中的佼佼者，外观较漂亮，看起来没有巴西的厚，但是肉质比巴西的更紧致，炖后变厚，吃起来爽口。北海鱼胶是近年来的新宠，在香港被称为扎胶，功效受到广大人士的认可，有赤嘴鳘的功效，价格又不及赤嘴鳘鱼胶贵，性价比是非常高的．北海鱼胶的胶原蛋白质量很好，能滋补气血，增强抵抗力，美容，术后修复，滋润修复子宫．所以对于备孕，孕期补充营养，产后月子，下奶都是不错的选择！有抵抗力差的朋友反映，吃上一斤后，在换季的时候能明显感觉到不那么容易感冒了！"

    const t2="冰岛鳕鱼胶";
    const txt2="鳕鱼胶产自冰岛常年温度 5 摄氏度以下海域，纯正深海鱼胶。冰岛鳕鱼胶的特点是有厚度，煲起不腥不潺和不溶化，嫩滑又爽口，堪称极品。鳕鱼胶食疗功效高，含有丰富的蛋白质、胶质、磷质及钙质，女士视为养颜珍品。对身体各部分均有补益能力，无论男女老少均可食用，是补而不燥之珍贵佳品。"

    // const t3="🌺北海阴阳肚";
    // const txt3="墨西哥北海花胶又被叫做“老鼠头”因为其胶型像一只老鼠，尤其胶身顶部的两只耳朵跟老鼠耳朵很像。";
    //
    // const t4="🌺巴西北海花胶";
    // const txt4="北海阴阳肚的主产区在苏里南和巴西，每支一般都不大，至多50~100克左右。阴阳肚胶身有两条比较明显的透明纹路，两个“耳朵”比其它北海胶都要长，而且不像其它北海胶耳朵只长在胶体头部，而是从胶体中上部一直延伸至头部。"+
    // "相比于其他北海花胶品种，北海阴阳肚上半部分比较厚实，下半部较薄，而且更长。";


    this.product={

      items:[
        {
          title:t1,
          text:txt1,
          img:"/images/鱼胶/北海鱼胶/IMG_20200211_183115.jpg",
          video:"/images/鱼胶/北海鱼胶/1592951088253.mp4",
        },
        {
          title:t2,
          text:txt2,
          img:"/images/鱼胶/冰岛雪鱼胶/IMG_20190811_131337.jpg"
          // video:"/images/鱼胶/冰岛雪鱼胶/1592951088253.mp4",
        },
        // {
        //   title:t3,
        //   text:txt3,
        //   img:"https://24.media.tumblr.com/tumblr_mef649hlGH1qi1a91o1_1280.jpg"
        // },
        // {
        //   title:t4,
        //   text:txt4,
        //   img:"https://24.media.tumblr.com/tumblr_mdji3d4gz01qi1a91o1_1280.jpg"
        // },

      ]
    }

  }

}

</script>
<style scoped>

</style>
