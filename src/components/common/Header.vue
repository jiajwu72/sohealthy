<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div class="container">
            <!-- <a class="navbar-brand js-scroll-trigger" href="#page-top"><img src="assets/img/navbar-logo.svg" alt="" /></a> -->
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars ml-1"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav text-uppercase ml-auto">
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#services">印尼014燕窝</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#portfolio">希腊野生海参</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">冰岛红极参</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#team">北海鱼胶</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#team">冰岛鳕鱼鱼胶</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#team">伊朗藏红花</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#contact">地图坐标</a></li>
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
      document.getElementById("mainNav").style.top = "-70px";
    }
    prevScrollpos = currentScrollPos;
}

export default{

  name:"Header",
  components: {

  },
  data() {
    return {

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


</style>
