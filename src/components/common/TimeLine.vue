<template>
  <div>
    <section class="timeline">
      <ul>
        <li>
          <div>
            <time>1687</time>
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
