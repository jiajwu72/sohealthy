<template>
<div class="top">
  <div class="player-container">
    <!-- <vue-core-video-player src="/videos/燕窝-工厂视频/1572398251550.mp4"></vue-core-video-player> -->
    <VideoPlayer></VideoPlayer>
    <Porfolio3 v-if="isMobile==false"></Porfolio3>
    <Porfolio4 v-else></Porfolio4>
  </div>
</div>
</template>

<script>
import Porfolio3 from '@/components/common/Porfolio3';
import Porfolio4 from '@/components/common/Porfolio4';
import VideoPlayer from '@/components/common/Main';
// import VuePlaylist from 'vue-playlist';
export default{
  name:"Ynyanwo",
  metaInfo: {
      title: '燕参堂',
      // override the parent template and just use the above title only
      titleTemplate: '%s | 印尼燕窝',
      meta: [
        { name: 'description', content: '印尼燕窝' },
        { name: 'keywords', content: '印尼燕窝, 燕窝代理, 法国燕窝' },
      ]

  },
  components: {
    Porfolio3,
    Porfolio4,
    VideoPlayer,
    // VuePlaylist
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
    }
  },
  created() {
    this.isMobile=this.detectMob()

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
  }

}

</script>
<style scoped>

@media screen and (min-width: 600px) {
  .top{
    /* margin-top:100px; */
    /* background-color: #f5f5f5; */
    padding-top: 120px;
    padding-bottom: 120px;
  }
}
.top{
  /* margin-top:100px; */
  background-color: #f5f5f5;
  /* padding-top: 120px;
  padding-bottom: 120px; */
}
.player-container{
  /* margin-top:100px;
  margin-bottom:100px; */
}
</style>
