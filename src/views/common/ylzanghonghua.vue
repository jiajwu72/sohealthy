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
      titleTemplate: '%s | 伊朗藏红花',
      meta: [
        { name: 'description', content: '伊朗藏红花' },
        { name: 'keywords', content: '伊朗藏红花' },
      ]

  },
  created() {
    const t1="伊朗藏红花";
    const txt1="伊朗有五宝——石油、地毯、黑鱼子酱、开心果和藏红花。伊朗是藏红花的最大产地，世界80%的藏红花都产自伊朗。虽然在国际市场上藏红花是名贵的药材，但伊朗人却并不看重它的药效，而是把它当成普通的调料，藏红花那诱人的黄色经常出现在伊朗普通人家的米饭、糕点上。"

    const t2="藏红花泡水";
    const txt2="一般的吃法是每次取5~8根泡水喝，喝三天停一天、或者隔日一次，每天6~8根花丝泡水喝3~4杯，坚持使用，可以起到很好的预防和保健作用，每天都可以食用一次，也可以隔天食用一次。"

    const t3="藏红花泡酒";
    const txt3="像一些比较喜欢饮酒的，可以用藏红花泡酒，藏红花泡酒时可以单独泡，也可以和其他药材搭配一起泡。藏红花与其他药材搭配泡酒的方法请咨询医生或相关专业人士。藏红花单独泡酒的方法是用藏红花1-4克，白酒一斤，浸泡一周后即可饮用，每次20ml左右，不可贪杯。藏红花泡酒喝的食用方法可补肾生精、健脾益气、养血活络，对肾虚血亏、头晕腰疼、食少神疲、失眠、女子月经不调等均有一定的效果。";

    const t4="藏红花煮粥";
    const txt4="做法一：大米100克、藏红花10～20根，加水适量，煮粥，每日一次。适用于气滞血瘀所致的外伤疼痛、慢性肝炎、冠心病、心绞痛中风后遗症等。\n　　做法二：藏红花10～20根用开水浸泡，大米100克煮沸后加入藏红花水，然后煮成粥即可食用。藏红花煲汤的食用方法";


    this.product={

      items:[
        {
          title:t1,
          text:txt1,
          img:"/images/伊朗藏红花/ylzhhban.jpg",
          video:"/images/鱼胶/北海鱼胶/1592951088253.mp4",
        },
        {
          title:t2,
          text:txt2,
          img:"/images/伊朗藏红花/088.jpg"
          // video:"/images/鱼胶/冰岛雪鱼胶/1592951088253.mp4",
        },
        {
          title:t3,
          text:txt3,
          img:"/images/伊朗藏红花/1536065608530395.jpg"
        },
        {
          title:t4,
          text:txt4,
          img:"/images/伊朗藏红花/1539768379664071.jpg"
        },

      ]
    }

  }

}

</script>
<style scoped>

</style>
