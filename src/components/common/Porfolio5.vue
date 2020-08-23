<template>
  <!-- <div id="app" class="wrapper" v-cloak v-bind:class="{'is-previous': isPreviousSlide, 'first-load': isFirstLoad}">
            <div class="slide-wrapper"
                 v-for="(slide, index) in slides" :key="index"
                 v-bind:class="{ active: index === currentSlide }"
                 v-bind:style="{ 'z-index': (slides.length - index), 'background-image': 'url(' + slide.bgImg + ')' }">
                <div class="slide-inner">
                    <div class="slide-bg-text">
                        <p>{{ slide.headlineFirstLine }}</p>
                        <p>{{ slide.headlineSecondLine }}</p>

                    </div>

                    <div class="slide-rect-filter">
                        <div class="slide-rect" v-bind:style="{'border-image-source': 'url(' + slide.rectImg + ')'}"></div>
                    </div>
                    <div class="slide-content">
                        <h1 class="slide-content-text"><p>{{ slide.headlineFirstLine }}</p><p>{{ slide.headlineSecondLine }}</p></h1><a class="slide-content-cta">Call To Action</a></div>
                    <h2 class="slide-side-text"><span>{{ slide.sublineFirstLine }} / </span><span>{{ slide.sublineSecondLine }}</span></h2></div>
            </div>
        <div class="controls-container">
            <button class="controls-button"
                    v-for="(slide, index) in slides" :key="index"
                    v-bind:class="{ active: index === currentSlide }"
                    v-on:click="updateSlide(index)">{{ slide.headlineFirstLine }} {{ slide.headlineSecondLine }}</button>
        </div>
        <div class="pagination-container">
            <span class="pagination-item"
                  v-for="(slide, index) in slides" :key="index"
                  v-bind:class="{ active: index === currentSlide }"
                  v-on:click="updateSlide(index)"></span>
        </div>
    </div> -->

  <div>
  </div>
</template>

<script>
// import Porfolio5 from '@/components/common/Porfolio5';
export default{
  name:"porfolio5",
  components: {
    // Porfolio5
  },
  data() {
    return {
      currentSlide: 0,
        isPreviousSlide: false,
        isFirstLoad: true,
        slides: [
            {
                headlineFirstLine: "伊朗",
                headlineSecondLine: "藏红花",
                sublineFirstLine: "Nihil sub sole",
                sublineSecondLine: "novum",
                bgImg: "/images/伊朗藏红花/ylzhhban.jpg",
                rectImg: "https://i.postimg.cc/vTW0XkvM/slide-rect0.jpg"
            },
            {
                headlineFirstLine: "Nulla",
                headlineSecondLine: "Auctor",
                sublineFirstLine: "Il n'y a rien de neuf sous",
                sublineSecondLine: "le soleil",
                bgImg: "https://i.postimg.cc/Qx34VNXM/slide1.jpg",
                rectImg: "https://i.postimg.cc/ryWZ8R2b/slide-rect1.jpg"
            },
            {
                headlineFirstLine: "Nullam",
                headlineSecondLine: "Ultricies",
                sublineFirstLine: "Τίποτα καινούργιο κάτω από",
                sublineSecondLine: "τον ήλιο",
                bgImg: "https://i.postimg.cc/t4RBtrnQ/slide2.jpg",
                rectImg: "https://i.postimg.cc/3JFLGMRF/slide-rect2.jpg"
            },
            {
                headlineFirstLine: "Nullam",
                headlineSecondLine: "Ultricies",
                sublineFirstLine: "Τίποτα καινούργιο κάτω από",
                sublineSecondLine: "τον ήλιο",
                bgImg: "https://i.postimg.cc/t4RBtrnQ/slide2.jpg",
                rectImg: "https://i.postimg.cc/3JFLGMRF/slide-rect2.jpg"
            },
            {
                headlineFirstLine: "Nullam",
                headlineSecondLine: "Ultricies",
                sublineFirstLine: "Τίποτα καινούργιο κάτω από",
                sublineSecondLine: "τον ήλιο",
                bgImg: "https://i.postimg.cc/t4RBtrnQ/slide2.jpg",
                rectImg: "https://i.postimg.cc/3JFLGMRF/slide-rect2.jpg"
            }
        ]
    }
  },
  mounted() {
    //do something after mounting vue instance
    var productRotatorSlide = document.getElementById("app");
    var startX = 0;
    var endX = 0;
        productRotatorSlide.addEventListener("touchstart", (event) => startX = event.touches[0].pageX);

        productRotatorSlide.addEventListener("touchmove", (event) => endX = event.touches[0].pageX);

        productRotatorSlide.addEventListener("touchend", function(event) {
            var threshold = startX - endX;
            console.log(event);
            if (threshold < 150 && 0 < this.currentSlide) {
                this.currentSlide--;
            }
            if (threshold > -150 && this.currentSlide < this.slides.length - 1) {
                this.currentSlide++;
            }
        }.bind(this));
  },
  created() {
    this.$loadScript("/js/porfolio5.js")
    .then((res) => {
      console.log("res",res);
    })
    .catch((e) => {
      console.log("e:",e);
    })


  },
  methods: {
    updateSlide(index) {
            index < this.currentSlide ? this.isPreviousSlide = true : this.isPreviousSlide = false;
            this.currentSlide = index;
            this.isFirstLoad = false;
    }
  }


}

</script>
<style scoped>


</style>
