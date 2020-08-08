<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div class="container">
        <!-- <a class="navbar-brand js-scroll-trigger" href="#page-top"><img src="images/environment/651596877739_.pic.jpg" alt="" /></a> -->
            <a class="navbar-brand js-scroll-trigger" href="#page-top"><img src="images/environment/721596877954_.pic_hd.jpg" alt="" /></a>

            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars ml-1"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav text-uppercase ml-auto">
                    <!-- <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#services">印尼014燕窝</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#portfolio">希腊野生海参</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">冰岛红极参</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#team">北海鱼胶</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#team">冰岛鳕鱼胶</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#team">伊朗藏红花</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#team">西班牙火腿</a></li> -->
                    <li class="nav-item">
                      <a class="nav-link js-scroll-trigger"
                          style="cursor:pointer;"
                          @click="drawer = !drawer ">
                        产品
                      </a>
                    </li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#team">联系我们</a></li>

                </ul>
            </div>
      </div>
    </nav>
    <v-navigation-drawer
      app
      v-model="drawer"
      width="160"
      temporary
      right
      style="z-index:9999;">
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          style="text-align:right"
          link
        >

          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>


        </v-list-item>
      </v-list>

    </v-navigation-drawer>

  </div>
</template>

<script>

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("mainNav").style.top = "0";
    } else if(prevScrollpos <= currentScrollPos && window.scrollY>80) {
      document.getElementById("mainNav").style.top = "-120px";
    }
    prevScrollpos = currentScrollPos;
}

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


</style>
