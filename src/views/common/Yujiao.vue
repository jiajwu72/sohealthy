<template>
<div class="">
  <Porfolio1 :product="product">
  </Porfolio1>
</div>
</template>

<script>
import Porfolio1 from '@/components/common/Porfolio1';
export default{
  name:"Ynyanwo",
  components: {
    Porfolio1
  },
  data() {
    return {
      product:{},
    }
  },
  created() {
    const t1="🌺苏里南/委内瑞拉北海花胶";
    const txt1="苏里南/委内瑞拉北海花胶是北海胶中品质最好的。胶体洁净、不油腻、胶质细腻。苏里南北海公花胶可媲美赤嘴鳘鱼胶公花胶。"

    const t2="🌺巴西北海花胶";
    const txt2="巴西北海胶的制作方法一般不同于苏里南北海，是将鱼鳔剪开后两边折叠（不展开）起来，而且是从胶的后面剪开，胶身两边收拢，胶体看起来比较瘦长。巴西北海的“耳朵”比苏里南北海的“耳朵”略大，油脂相对苏里南北海稍多一些。"

    const t3="🌺北海阴阳肚";
    const txt3="墨西哥北海花胶又被叫做“老鼠头”因为其胶型像一只老鼠，尤其胶身顶部的两只耳朵跟老鼠耳朵很像。";

    const t4="🌺巴西北海花胶";
    const txt4="北海阴阳肚的主产区在苏里南和巴西，每支一般都不大，至多50~100克左右。阴阳肚胶身有两条比较明显的透明纹路，两个“耳朵”比其它北海胶都要长，而且不像其它北海胶耳朵只长在胶体头部，而是从胶体中上部一直延伸至头部。"+
    "相比于其他北海花胶品种，北海阴阳肚上半部分比较厚实，下半部较薄，而且更长。";


    this.product={

      items:[
        {
          title:t1,
          text:txt1,
          img:"https://25.media.tumblr.com/tumblr_mef6quv5pq1qi1a91o1_1280.jpg"
        },
        {
          title:t2,
          text:txt2,
          img:"https://25.media.tumblr.com/tumblr_mef66y4dyg1qi1a91o1_1280.jpg"
        },
        {
          title:t3,
          text:txt3,
          img:"https://24.media.tumblr.com/tumblr_mef649hlGH1qi1a91o1_1280.jpg"
        },
        {
          title:t4,
          text:txt4,
          img:"https://24.media.tumblr.com/tumblr_mdji3d4gz01qi1a91o1_1280.jpg"
        },

      ]
    }

  }

}

</script>
<style scoped>

</style>
