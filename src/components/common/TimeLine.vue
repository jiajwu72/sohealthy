<template>
  <div>
    <section class="timeline">
      <ul>
        <li>
          <div>
            <time>1687</time>
            <!-- <div class="discovery"> -->
              <!-- <h1>主题</h1> -->
              <!-- <p>
                <div>
                  事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件
                </div>

              </p> -->
              <div id="scrollspy-nested" style="position:relative; height:350px; overflow-y:auto">
              事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件
              事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件
              事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件事件
            </div>

          </div>
        </li>
        <li>
          <div>
            <time>1785</time>
            <div class="discovery">
              <h1>主题</h1>
              <p>
                事件
              </p>
            </div>
            <div class="scientist">
              <h1>主题</h1>
              <span>事件</span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>1827</time>
            <div class="discovery">
              <h1>主题</h1>
              <p>
                事件
              </p>
            </div>
            <div class="scientist">
              <h1>主题</h1>
              <span>事件</span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>1831</time>
            <div class="discovery">
              <h1>主题</h1>
              <p>
                事件
              </p>
            </div>
            <div class="scientist">
              <h1>主题</h1>
              <span>事件</span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>1867</time>
            <div class="discovery">
              <h1>主题</h1>
              <p>
                事件
              </p>
            </div>
            <div class="scientist">
              <h1>主题</h1>
              <span>事件</span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>1895</time>
            <div class="discovery">
              <h1>主题</h1>
              <p>
                事件
              </p>
            </div>
            <div class="scientist">
              <h1>主题</h1>
              <span>事件</span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>1897</time>
            <div class="discovery">
              <h1>主题</h1>
              <p>
                事件
              </p>
            </div>
            <div class="scientist">
              <h1>主题</h1>
              <span>事件</span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>主题</time>
            <div class="discovery">
              <h1>主题</h1>
              <p>
                事件
              </p>
            </div>
            <div class="scientist">
              <h1>主题</h1>
              <span>事件</span>
            </div>
          </div>
        </li>

      </ul>
    </section>
  </div>

</template>

<script>
// import $ from 'jquery'
// import "../../../public/js/porfolio1.js"
export default{
  name:"textDisplay1",
  props: ['items'],
  components: {

  },
  data() {
    return {

    }
  },
  created() {

  },
  mounted() {
    this.$loadScript("/js/timeline.js")
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

</style>
