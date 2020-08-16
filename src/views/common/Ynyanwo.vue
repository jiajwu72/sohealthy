<template>
<div class="top">
  <div class="player-container">
    <!-- <vue-core-video-player src="/videos/燕窝-工厂视频/1572398251550.mp4"></vue-core-video-player> -->
    <VideoPlayer></VideoPlayer>
    <Porfolio3></Porfolio3>
  </div>
</div>
</template>

<script>
import Porfolio3 from '@/components/common/Porfolio3';
import VideoPlayer from '@/components/common/Main';
// import VuePlaylist from 'vue-playlist';
export default{
  name:"Ynyanwo",
  components: {
    Porfolio3,
    VideoPlayer,
    // VuePlaylist
  },
  data() {
    return {

    }
  },
  created() {


  },
  methods: {

  }

}

</script>
<style scoped>
.top{
  margin-top:100px;
}
</style>
