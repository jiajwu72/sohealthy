<template>
<div class="">
  <Carousel :slides="slidesItem" >
  </Carousel>
  <div class="container-fluid getHeight"
       style="display:flex;min-height:100px;background:#000;color:#bb994e;">
    <div class="container text-center" style="margin:auto;">
      <h1 class="vline" style="">产品 • PROUDUITS</h1>
    </div>
  </div>

  <b-row style="background-color:black;padding:20px;color:white;">
    <b-col md="6" style="text-align:center;">
      <h2>凯罗斯一世雪利白兰地 Carlos I Sherry Brandy</h2> &nbsp;
      <p>品牌神奇诞生</p>

      <p>凯罗斯一世品牌诞生于1889年。当年，一位酿酒师在酒窖中偶然发现了几个装有酒液的橡木桶，年代已经相当久远。尽管没有人知道这些橡木桶的来历，但处于丰富的经验，这位酿酒师意识到桶中的酒液质量上乘，意义非凡。由此，采用桶中酒液的白兰地被命名为凯罗斯一世，向西班牙最伟大的君主致敬。</p>
      &nbsp;
      <p><strong>世界第一的索来拉格兰珍藏雪利白兰地（IWSR 2015)</strong></p>&nbsp;
      <p>凯罗斯一世雪利白兰地作为高端烈酒的代表，享誉世界，畅销全球40多个国家。</p>&nbsp;
      <p>A Magical History</p>
      <p>The history of Carlos I begins in 1889, when a cellar master found some mysterious barrels in his old cellar in Jerez. Neither the cellar master nor anyone else knew where they came from. But he immediately realized these barrels contained the most exquisite brandy he had ever tasted. He decided to call it Carlos I, because in its flavour he sensed the destiny of a great conqueror who built one of the greatest known empires.</p>
      <p><strong>The No.1 Brandy de Jerez Solera Gran Reserva in the world.*</strong></p>
      <p>&nbsp;</p>
      <p>An infinite number of spirit drinks exist in the world, but only a few can be considered premium spirits on an international level. Carlos I is present in more than 40 countries with strong presence in Germany, Spain, Philippines, Italy and Mexico among others. Carlos I is a benchmark in its category being the brand with the most awareness in Spain and market leader in Germany, the most important brandy market in Europe.</p>
    </b-col>

    <b-col>
      <v-img
        src="/images/红酒/carlos_i.jpg"

      ></v-img>
    </b-col>
  </b-row>

  <!-- <div>
    <div
          :href="item.link" v-for="(item, index) in LinkItems" :key="index"
          :style="'background:url('+item.src+') center center no-repeat; background-size:cover;'"
          class="sp-container">
          <div class="element">
              <h2>{{item.title}}</h2>
              <p> {{item.content}}</p>
          </div>
    </div>
  </div> -->
</div>
</template>

<script>
import Carousel from '@/components/common/Carousel';
export default{
  name:"Huotui",
  components: {
    Carousel,
  },
  metaInfo: {
      title: '燕参堂',
      // override the parent template and just use the above title only
      titleTemplate: '%s | CarlosXo',
      meta: [
        { name: 'description', content: '销售西班牙5J火腿/Cebo de campo' },
        { name: 'keywords', content: '西班牙火腿,5J火腿,Cebo de campo' },
      ]

  },
  data() {
    return {
      huotui:[],

      slidesItem:[
        {src:"/images/红酒/homepage-1_0.jpg"},
        {src:"/images/红酒/homepage-4.jpg"},
        // {src:"/images/红酒/homepage-5.jpg"},
      ],
      LinkItems:[
        {
          src:"/images/红酒/homepage-wines_1.jpg",
          link:"",
          title:"雪利酒 / Sherries",
          content:"敖司堡雪利酒以卓越的品质享誉世界。雪利酒被誉为酒中珍品。西班牙南部独特而宜人的气候条件赋予了雪利酒至臻至 纯的特性。欧盟原产地名称保护级认证,使得西班牙雪利酒绝无仅有。",
        },
        {
          src:"/images/红酒/homepage-spirits.jpg",
          link:"",
          title:"烈酒 / Spirits",
          content:"我们为您带来西班牙独树一帜的雪利白兰地以及金酒系列。"
        },

      ]
    }
  },
  created() {

  }

}

</script>
<style scoped>
.container-fluid {
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
}
.sp-container{
  text-align:center;
  display: flex;
  height:380px;
  padding-left: 100px;
  padding-right: 100px;
  cursor: pointer;
  opacity: .85;
}

.sp-container:hover{
  opacity: 1;
}

.element{
  margin: auto;
  color: white;
}



</style>
