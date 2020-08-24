<template>
<div class="">
  <div class="head">

  </div>
  <div class="content">
    <v-icon dark right>mdi-checkbox-marked-circle</v-icon>

    <b-container class="">
      <!-- <div class="" v-for="(item, index) in huotui" :key="index">
        <h2>{{item.name}}</h2>
        <b-row v-for="(el, index) in item.elemnts" :key="index">
          <b-col md="6">
            <v-img
            :src="el.img"
            ></v-img>
          </b-col>
          <b-col md="6" class="text_block">
            {{el.desc}}
          </b-col>
        </b-row>
        <br>
      </div> -->

      <h1>西班牙 5J火腿</h1>
      <b-row>
        <b-col md="6">
          <v-img
          src="/images/火腿/TB2jbFhjiRnpuFjSZFCXXX2DXXa_!!479954274.jpg"
          ></v-img>
        </b-col>
        <b-col md="6">
          <v-img
          src="/images/火腿/TB2O8hzhHXlpuFjSszfXXcSGXXa_!!479954274.jpg"
          ></v-img>
          <div class="text_block">
            <p>
              只要提到火腿，相信每个吃货都会自然而然想到中国三大火腿，除此之外，不得不提到的当数西班牙火腿，而西班牙火腿却分为很多品牌和等级，排名第一的火腿毫无疑问就是伊比利亚火腿（jamón ibérico），而伊比利亚火腿中质量最好的毫无疑问就是西班牙5J伊比利亚火腿，其被誉为全世界最高级别的火腿品牌。
            </p>
          </div>
        </b-col>

        <b-col md="12">
          <v-img
          src="/images/火腿/TB2kZd7jbBmpuFjSZFAXXaQ0pXa_!!479954274.jpg"
          ></v-img>
        </b-col>

        <b-col md="6">
          <v-img
          src="/images/火腿/TB2LYpNjiRnpuFjSZFCXXX2DXXa_!!479954274.jpg"
          ></v-img>
        </b-col>
        <b-col md="6">
          <!-- <v-img
          src="/images/火腿/TB2LYpNjiRnpuFjSZFCXXX2DXXa_!!479954274.jpg"
          ></v-img> -->
          <div class="text_block">
            <p>
            好的伊比利亚火腿因选用橡树果喂养而充满果香与油脂的香气，丝毫不会过咸，可以直接食用。需注意的是，不要用刀叉，直接用手把切好的火腿片送入口中，才能享受到细腻的肉质和毫不油腻的脂肪部位。
<br>
除了口感鲜美，伊比利亚火腿的营养价值也很高。据最新研究表明，它不仅富含人体组织所需的蛋白质和维他命B1、B6及B12，还含有对人体神经系统和大脑有益的叶酸和对骨骼有益的铜、铁和磷等矿物质。
            </p>
          </div>
        </b-col>
      </b-row>
      <br>
      <h1>西班牙火腿-Cebo de campo</h1>
      <b-row>
        <b-col md="6">
          <v-img
          src="/images/火腿/mmexport1498589569141.jpg"
          ></v-img>
        </b-col>
        <b-col md="6">
          <v-img
          src="/images/火腿/IMG_20181123_140857_mh1588085422249.jpg"
          ></v-img>
          <div class="text_block">
            <p>
              谷饲林地散养伊比利亚黑猪火腿，成品为白色标签
            </p>

          </div>
        </b-col>

        <!-- <b-col md="6" class="text_block">

        </b-col>
        <b-col md="6">
          <v-img
          src="/images/火腿/IMG_20181123_140857_mh1588085422249.jpg"
          ></v-img>
        </b-col> -->
      </b-row>


    </b-container>
  </div>

</div>
</template>

<script>

export default{
  name:"Huotui",
  components: {

  },
  metaInfo: {
      title: '燕参堂',
      // override the parent template and just use the above title only
      titleTemplate: '%s | 西班牙火腿',
      meta: [
        { name: 'description', content: '销售西班牙5J火腿/Cebo de campo' },
        { name: 'keywords', content: '西班牙火腿,5J火腿,Cebo de campo' },
      ]

  },
  data() {
    return {
      huotui:[],
    }
  },
  created() {
    // var cat1={
    //   name:"西班牙 5J火腿",
    //   elemnts:[
    //     {
    //       img:"",
    //       desc:"",
    //     },
    //     {
    //       img:"",
    //       desc:"",
    //     },
    //     {
    //       img:"",
    //       desc:"",
    //     }
    //   ]
    // };
    // var cat1={
    //   name:"火腿-Cebo de campo",
    //   elemnts:[
    //     {
    //       img:"",
    //       desc:"",
    //     },
    //     {
    //       img:"",
    //       desc:"",
    //     },
    //     {
    //       img:"",
    //       desc:"",
    //     }
    //   ]
    // };



  }

}

</script>
<style scoped>
.head{
  height: 600px;
  width: 100%;
  /* background-color: red; */
  background-image: url("/images/火腿/head_bg.jpg");
  background-position: center;
  background-size: cover;
}

.content{
  background-color: #F2EDE3;
  overflow: hidden;
}

.stepper{
  position: sticky;
}

.fullSreen{
  margin: 0px;
  padding: 0px;
}

.text_block{
  border: 1px solid #FEFEEE;
  border-radius: 10px;
  padding: 10px;
  margin-top: 15px;
}

h1{
  font-family: "Cardo", serif;
  color: #A1907C;
}

p{
  color: #4A4A4A;
  font-family: "Cardo", serif;
}

</style>
