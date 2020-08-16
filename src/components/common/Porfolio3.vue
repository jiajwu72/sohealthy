<template>
  <div style="margin-bottom:180px;margin-top:100px;">
    <div id="drag-container">
  <div id="spin-container">
    <!-- Đổi <div> (theo video) thành <img> để dễ dàng thêm, sửa, xoá các hình -->
    <!-- Muốn thêm ảnh thì chỉ cần thêm tag <img> hoặc <video> -->
    <img src="https://25.media.tumblr.com/tumblr_mef6quv5pq1qi1a91o1_1280.jpg" alt="">
    <img src="https://25.media.tumblr.com/tumblr_mef66y4dyg1qi1a91o1_1280.jpg" alt="">
    <img src="https://24.media.tumblr.com/tumblr_mef649hlGH1qi1a91o1_1280.jpg" alt="">
    <img src="https://24.media.tumblr.com/tumblr_mdji3d4gz01qi1a91o1_1280.jpg" alt="">
    <img src="https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
    <img src="https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">

    <!-- Ví dụ thêm ảnh chứa link -->
    <a target="_blank" href="https://25.media.tumblr.com/tumblr_mef6quv5pq1qi1a91o1_1280.jpg">
      <img src="https://25.media.tumblr.com/tumblr_mef6quv5pq1qi1a91o1_1280.jpg" alt="">
    </a>

    <!-- Ví dụ thêm video  -->
    <!-- <video controls autoplay="autoplay" loop>
      <source src="https://player.vimeo.com/external/322244668.sd.mp4?s=338c48ac2dfcb1d4c0689968b5baf94eee6ca0c1&profile_id=165&oauth2_token_id=57447761" type="video/mp4">
    </video> -->

    <!-- Dòng chữ ở giữa vòng xoay -->
    <p>3D Tiktok Carousel</p>
  </div>
  <div id="ground"></div>
</div>

<div id="music-container"></div>
	</div>
</template>

<script>
// import TextDisplay1 from '@/components/common/TextDisplay1';
export default{
  name:"Porfolio3",
  props: ['product'],
  components: {
    // TextDisplay1
  },
  data() {
    return {

    }
  },
  created() {

  },
  mounted() {
    this.$loadScript("/js/porfolio3.js")
    .then((res) => {
      console.log("res",res);
    })
    .catch((e) => {
      console.log("e:",e);
    })
  },

}

</script>

<style scoped>
* {
margin: 0;
padding: 0;
}

html,
body {
height: 100%;
}

body {
overflow: hidden;
display: flex;
background: #111;
perspective: 1000px;
transform-style: preserve-3d;
}

#drag-container, #spin-container {
position: relative;
display: flex;
margin: auto;
transform-style: preserve-3d;
transform: rotateX(-10deg);
}

#drag-container img, #drag-container video {
transform-style: preserve-3d;
position: absolute;
left: 0;
top: 0;
width: 100%;
height: 100%;
line-height: 200px;
font-size: 50px;
text-align: center;
box-shadow: 0 0 8px #fff;
-webkit-box-reflect: below 10px linear-gradient(transparent, transparent, #0005);
}

#drag-container img:hover, #drag-container video:hover {
box-shadow: 0 0 15px #fffd;
-webkit-box-reflect: below 10px linear-gradient(transparent, transparent, #0007);
}

#drag-container p {
font-family: Serif;
position: absolute;
top: 100%;
left: 50%;
transform: translate(-50%,-50%) rotateX(90deg);
color: #fff;
}

#ground {
width: 900px;
height: 900px;
position: absolute;
top: 100%;
left: 50%;
transform: translate(-50%,-50%) rotateX(90deg);
background: -webkit-radial-gradient(center center, farthest-side , #9993, transparent);
}

#music-container {
position: absolute;
top: 0;
left: 0;
}

#carousel-container {
width: 100%;
height: 100%;
}

@keyframes spin {
from{
  transform: rotateY(0deg);
} to{
  transform: rotateY(360deg);
}
}
@keyframes spinRevert {
from{
  transform: rotateY(360deg);
} to{
  transform: rotateY(0deg);
}
}
</style>
