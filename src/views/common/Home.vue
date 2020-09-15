<template>

  <div>
    <Carousel :slides="slidesItem" ></Carousel>

    <b-container >
      <b-row>
        <b-col md="1"></b-col>
        <b-col md="11" style="display:flex;">
          <b-button-group style="margin:0 auto;">
            <b-button
            :variant="optSelect==0?'primary':''"
            @click="optSelect=0">
              公司简介
            </b-button>
            <b-button
            :variant="optSelect==1?'primary':''"
            @click="optSelect=1">
              投资前景
            </b-button>
            <b-button
            :variant="optSelect==2?'primary':''"
            @click="optSelect=2">
              招收代理
            </b-button>
          </b-button-group>
        </b-col>
        <b-col md="1" style="border-right:1px solid black;">
          <h1 v-if="optSelect==0">
            公<br>司<br>简<br>介
          </h1>
          <h1 v-else-if="optSelect==1">
            投<br>资<br>前<br>景
          </h1>
          <h1 v-else>
            招<br>收<br>代<br>理
          </h1>
        </b-col>
        <b-col md="10">
          <div class="" v-if="optSelect==0">
            <b-row class="box ">
              <b-col md="6">
                <v-img src="/images/environment/magasin.jpg"></v-img>
              </b-col>
              <b-col md="6">
                <h1>01</h1><br>
                <h3>欧洲最大代理商</h3><br>
                <p>
                  坐标法国巴黎11区，印尼014燕窝工厂欧洲总代理，希腊野生海参厂家直销。
                </p>
              </b-col>
            </b-row>
            <b-row class="box ">
              <b-col md="6">
                <h1>02</h1><br>
                <h3>合作厂家</h3><br>
                <p>
                  荣获最佳供应商
                </p>
              </b-col>
              <b-col md="6">
                <v-img src="/images/environment/mmexport1571631404442.jpg"></v-img>
              </b-col>

            </b-row>
          </div>

          <div class="" v-if="optSelect==1">
            <h3>滋补品行业现状</h3>
            <div >
              <b-row>
                <b-col md="4">
                  <v-img src="/images/environment/91735d2958ba11ae82c64aaff3ef1261.jpg" height="100%"></v-img>
                </b-col>
              </b-row>
            </div>
            <p class="dotTxt">欧洲的滋补品消费即将形成一个潜力巨大的市场</p>
            <p>
              燕窝几百年来一直是华人世界首选的滋补名品，近十年是燕窝快速成长的十年。
              在孕婴、滋补、快餐、礼品等不同领域都是有巨大的发展空间，原来只是台湾、香港人的最爱，如今大陆以及欧洲的富裕/中产人群成为新的消费拉动者。
              官方资料标明，全球燕窝产销量的增长量，主要是应对华人市场的增量。
              在中国传统的滋补观念影响下以燕窝为首的滋补名品的市场将越来越快速的增长，也让整个燕窝行业迅速发展。
            </p>
            <b-row style="text-align:center;">
              <b-col md="4">
                <div class="bound">
                  <v-icon size="60">mdi-account-multiple-outline</v-icon><br>
                  <h3>人群覆盖广</h3>
                  <p>
                    中老年人首选
                  </p>
                </div><br>
              </b-col>
              <b-col md="4">
                <div class="bound">
                  <v-icon size="60">mdi-arm-flex</v-icon><br>
                  <h3>强大合作伙伴</h3>
                  <p>
                    全球最大的燕窝加工厂
                  </p>
                </div><br>
              </b-col>
              <b-col md="4">
                <div class="bound">
                  <v-icon size="60">mdi-head-dots-horizontal-outline</v-icon><br>
                  <h3>滋补观念</h3>
                  <p>
                    燕窝为首的滋补市场在欧洲极速增长
                  </p>
                </div><br>
              </b-col>
            </b-row>
            <h3>滋补品加盟首选</h3>
            <b-row>
              <b-col md="6">
                <p>
                  请把专业的事，交给专业的我们。<br>
                  工厂透明产链，保障产品的品质。
                </p>
              </b-col>
              <b-col md="6">
                <v-img src="/images/environment/6f699e5dd1ca3eccf337541ed0b55116.jpg" height="100%"></v-img>
              </b-col>
            </b-row>
          </div>

          <div class="" v-if="optSelect==2">
            <h3>谁能成为代理？</h3>
            <p>
              无论您是全职母亲，在校学生亦或者是上班族都能成为我们燕参堂的代理商。
            </p>
            <h3>有哪些入门的条件？</h3>
            <p>
              只要您有一个微信/Facebook等社交软件就是您最好的赚钱工具。您所需要做的就是在朋友圈推广，一件代发，方便快捷，让赚钱不再成为一件难事。
            </p>
            <h3>代理的优势</h3>
            <p>
              有一份副业，有一份网络副业，变得让人尤为羡慕，通过手机做副业，时间、地点、方式都不受任何限制。

副业的重要性，从疫情可以感受出来。有了一份副业，人生有了Plan B，有另一种选择。

有价值时，公司欢迎你；价值降低时，公司抛弃你。也不能怪公司，优胜劣汰乃社会法则。

随着年龄的增长，时间、精力、能力跟不上，生个病、有个事、出点意外，工作也就没了。

对低收入人群来说，人生一直陷入负循环，想辞职不敢辞，想学习没多余钱，想努力家庭束缚着。

副业不同于创业。

创业需要付出时间、精力、金钱、思维，失败会付出惨重的代价（网络创业除外）。

副业比较自由，没那么多限制。

副业不用担心生活，可以淡定的选择一个长期领域，每天不断的深挖下去。失败了也无所谓，浪费一点时间而已。

而那些时间，很多人本来就打算看电视剧、玩游戏、撸串串……

对于女性：站在高层次的领悟   “女人做自己的事业，不一定是为了养家糊口，但一定是为了证明自己”“别人30买豪车、住豪宅，你30岁骑电动、住出租。时代在变化，不改变等于灭亡”“马云说过：当你看朋友圈广告，发现买不起的时候，你就该奋斗了。
<br>
燕参堂(全欧洲最大的一级燕窝为首的滋补品代理商)2020起招收各级别代理商。
            </p>
            <b-row class="box_daili">
              <b-col md="2" class="">
                <div class="cercle">
                  <span style="font-size:50px;">咨询</span>
                </div>

              </b-col>
              <b-col md="9" >
                <!-- <h3>咨询</h3> -->
                <p>
                  通过电话，微信和我们取得联系
                </p>
              </b-col>
            </b-row>
            <b-row class="box_daili">
              <b-col md="2" class="">
                <div class="cercle">
                  <span style="font-size:50px;">沟通</span>
                </div>

              </b-col>
              <b-col md="9" >
                <!-- <h3>咨询</h3> -->
                <p>
                  由我们专业人士手把手教您快速入门
                </p>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>




  </div>

</template>

<script>

   import Carousel from '@/components/common/Carousel';
   // import TimeLine from '@/components/common/TimeLine';
   // import JQuery from 'jquery'
   // let $ = JQuery;

  export default{
    name:"Home",
    components:{
       // GoogleMap,
       Carousel,
       // TimeLine
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
            src: '/images/environment/_DSC0536.JPG',
          },


        ],
        optSelect:0,

      }
    },

    created() {
      // (function animateUp() {
      //   var obj=$('.box');
      //   console.log("obj:",obj);
      //   var objH=obj.outerHeight();
      //   var num=[];
      //   var wH=$(window).height();
      //   var wScrollTop=$(window).scrollTop();
      //
      //
      //   for (var i = 0; i < obj.length; i++) {
      //     var st=obj.eq(i).offset().top;
      //     console.log("st:",st);
      //     st+=wScrollTop+objH;
      //     console.log("st:",st);
      //     num.push(obj.eq(i).offset().top+(wScrollTop+wH))
      //   }
      //   // console.log("num:",num);
      //   function judgeTop(){
      //     // console.log("judgeTop");
      //     num=[]
      //     for (var i = 0; i < obj.length; i++) {
      //       var st=obj.eq(i).offset().top;
      //       st+=wScrollTop+objH;
      //       num.push(st)
      //     }
      //     for (var j = 0; j < num.length; j++) {
      //       console.log(num[j],wScrollTop,wScrollTop+wH);
      //       if(num[j]>=wScrollTop && num[j]<(wScrollTop+wH)){
      //         console.log("animation"+j);
      //         obj.eq(i).css({
      //           // 'animation':'bounceInBottom 2.45s  linear forwards',
      //           // 'opacity':'1'
      //           'animation-name':'bounceInBottom',
      //                      'opacity':'1'
      //         })
      //       }
      //     }
      //   }
      //
      //   $(window).scroll(function(){
      //     // console.log(event);
      //     wH=$(window).height();
      //     wScrollTop=$(window).scrollTop();
      //     judgeTop();
      //   })
      //
      // })();
    },

    methods: {

    },
  }
</script>

<style scoped>

*{
  font-family: 'Helvetica Neue', Helvetica, 'Microsoft YaHei', STXihei, 'PingFang SC','Hiragino Sans GB', Arial, sans-serif;
}

h1{
  float: left;
  font-family: "Conv_DINNEXTW1G-MEDIUM";
  color: #999;
  margin-right: 30px;
  -webkit-transition: all 0.6s;
  -o-transition: all 0.6s;
  transition: all 0.6s;
  font-size: 60px;
}

p{
  /* padding: 5px; */
}

.box{
  padding:15px;
  width: 100%;
  height: auto;
  border: 1px solid #eee;
  margin-bottom: 60px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.6s;
  -o-transition: all 0.6s;
  transition: all 0.6s;
  margin-left: 20px;
  /* opacity: 0; */
  /* animation: bounceInBottom 2.45s  linear forwards; */
}

.box:hover{
  box-shadow: 4px 13px 30px 1px rgba(152, 152, 152, 0.6);
}

.box_daili{
  border-radius: 83px;
    background-color: #f5f5f5;
    margin-bottom: 70px;
    position: relative;
}

.cercle{
  width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: #eb6100;
    text-align: center;
    line-height: 130px;
    font-family: "Conv_DINNEXTW1G-MEDIUM";
    color: #fff;
    position: relative;
    float: left;
}

.dotTxt{
  color: #eb6100;
  font-weight: bold;
  font-size: 18px;
  line-height: 2.2em;
}

.bound{
  border: 1px solid #eee;
}

@keyframes bounceInLeft {
        from, 60%, 75%, 90%, to {animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);}
        0% {;transform: translate3d(-3000px, 0, 0);}
        60% {;transform: translate3d(25px, 0, 0);}
        75% {transform: translate3d(-10px, 0, 0);}
        90% {transform: translate3d(5px, 0, 0);}
        100% {;transform: none;}
}
@keyframes bounceInRight {
        from, 60%, 75%, 90%, to {animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);}
        0% {;transform: translate3d(3000px, 0, 0);}
        60% {;transform: translate3d(-25px, 0, 0);}
        75% {transform: translate3d(10px, 0, 0);}
        90% {transform: translate3d(-5px, 0, 0);}
        100% {;transform: none;}
}

@keyframes bounceInBottom {
        from, 60%, 75%, 90%, to {animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);}
        0% {;transform: translate3d(0, 3000px, 0);}
        60% {;transform: translate3d(0, -25px, 0);}
        75% {transform: translate3d(0, 10px, 0);}
        90% {transform: translate3d(0, -5px, 0);}
        100% {;transform: none;}
}

.anim1{
  animation: bounceInBottom 2.45s  linear forwards;
}

.anim2{
  animation: bounceBottom 3.75s linear forwards;
}

/* .anim1{
  animation: bounceInLeft 0.7s 0.65s linear forwards;
} */

</style>
