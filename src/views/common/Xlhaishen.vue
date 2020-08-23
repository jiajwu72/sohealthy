<template>
  <div>
    
  </div>
</template>

<script>

// import Porfolio3 from '@/components/common/Porfolio3';
// import Porfolio4 from '@/components/common/Porfolio4';
// import VideoPlayer from '@/components/common/Main';
// import TextDisplay1 from '@/components/common/TextDisplay1';




export default{
  name:"Ynyanwo",
  metaInfo: {
      title: 'Xlhaishen',
      // override the parent template and just use the above title only
      titleTemplate: '%s | 希腊海参',
      meta: [
        { name: 'description', content: '希腊海参' },
        // { name: 'keywords', content: '印尼燕窝, 燕窝代理, 法国燕窝' },
      ]

  },
  components: {
    // Porfolio3,
    // Porfolio4,
    VideoPlayer,
    // TextDisplay1,
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
      imgs:[
        "/images/燕窝/展示/燕窝-泡发图/mmexport1558049524889.jpg",
        "/images/燕窝/展示/燕窝-泡发图/mmexport1558049531798.jpg",
        "/images/燕窝/展示/燕窝-泡发图/mmexport1571563262845.jpg",
        "/images/燕窝/展示/燕窝-泡发图/mmexport1571995192437.jpg",
        "/images/燕窝/展示/燕窝-泡发图/mmexport1571995198281.jpg",
        "/images/燕窝/展示/燕窝-泡发图/mmexport1571995200889.jpg",
        "/images/燕窝/展示/燕窝-泡发图/mmexport1572043763067.jpg",
        "/images/燕窝/展示/燕窝-泡发图/mmexport1572043767971.jpg",
        "/images/燕窝/展示/燕窝-泡发图/mmexport1572043816418.jpg",
      ],
      yanwo:{},
    }
  },
  created() {
    this.isMobile=this.detectMob();
    this.yanwo=yanwo;
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
  }

}

</script>
<style scoped>


@media screen and (min-width: 600px) {

</style>
