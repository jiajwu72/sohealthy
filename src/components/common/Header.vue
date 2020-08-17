<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div class="container">
        <!-- <a class="navbar-brand js-scroll-trigger" href="#page-top"><img src="images/environment/651596877739_.pic.jpg" alt="" /></a> -->
            <a class="navbar-brand js-scroll-trigger" href="/"><img src="images/environment/logo.jpg" alt="" /></a>

            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                菜单
                <i class="fas fa-bars ml-1"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav text-uppercase ml-auto">
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/ynyanwo">印尼014燕窝</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/xlhaishen">希腊野生海参</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="bdhongjishen"> 冰岛红极参 </a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="bhyujiao"> 北海鱼胶 </a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="bdxueyujiao"> 冰岛鳕鱼胶 </a></li>
                    <!-- <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#team">鱼胶</a></li> -->
                    <!-- <li class="nav-item">
                      <span class="nav-link js-scroll-trigger list_parent">
                        鱼胶
                      </span>
                      <div class="list">
                        display me
                      </div>
                      <ul class="list">
                        <li><a class="nav-link js-scroll-trigger" href="">北海鱼胶</a></li>
                        <li><a class="nav-link js-scroll-trigger" href="#services">冰岛鳕鱼胶</a></li>
                      </ul>

                    </li> -->
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#team">伊朗藏红花</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#team"> 西班牙火腿 </a></li>
                </ul>
            </div>
      </div>
    </nav>




  </div>
</template>

<script>

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("mainNav").style.top = "0";
    } else if(prevScrollpos <= currentScrollPos && window.scrollY>80) {
      document.getElementById("mainNav").style.top = "-150px";
    }
    prevScrollpos = currentScrollPos;
}
console.log("start");

export default{

  name:"Header",
  components: {

  },
  data() {
    return {
      drawer:false,

      items: [
          { title: '印尼014燕窝', icon: 'mdi-home-city' },
          { title: '希腊野生海参', icon: 'mdi-home-city' },
          { title: '冰岛红极参', icon: 'mdi-home-city' },
          { title: '北海鱼胶', icon: 'mdi-home-city' },
          { title: '冰岛鳕鱼胶', icon: 'mdi-home-city' },
          { title: '伊朗藏红花', icon: 'mdi-home-city' },
          { title: '西班牙火腿', icon: 'mdi-home-city' },

        ],
    };

  },

  props:[

  ],
  created() {

  },

  methods: {

  },
  watch: {

  }
}
</script>

<style scoped>

span{
  cursor: pointer;
}

li>span{
  color:blue;
}

.list_parent:hover {
  /* display: block; */
  color:red;
}
li{
  list-style: none;
}
/* .list{
  display: none;
} */

</style>
