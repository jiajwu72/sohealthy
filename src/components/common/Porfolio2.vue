<template>

  <article>
    <figure v-if="product.items[0]">
      <img :src='product.items[0].img' alt />
    </figure>
    <section v-if="product.items[0]">
        <div>
          <h1>{{product.items[0].title}}</h1>
          <p><TextDisplay1 :text="product.items[0].text"></TextDisplay1></p>
        </div>
    </section>

    <figure v-if="product.items[1]">
      <img :src='product.items[1].img' alt />
    </figure>
    <section v-if="product.items[1]">
        <div>
          <h1>{{product.items[1].title}}</h1>
          <p><TextDisplay1 :text="product.items[1].text"></TextDisplay1></p>
        </div>
    </section>

    <figure v-if="product.items[2]">
      <img :src='product.items[2].img' alt />
    </figure>
    <section v-if="product.items[2]">
        <div>
          <h1>{{product.items[2].title}}</h1>
          <p><TextDisplay1 :text="product.items[2].text"></TextDisplay1></p>
        </div>
    </section>

    <figure v-if="product.items[3]">
      <img :src='product.items[3].img' alt />
    </figure>
    <section v-if="product.items[3]">
        <div>
          <h1>{{product.items[3].title}}</h1>
          <p><TextDisplay1 :text="product.items[3].text"></TextDisplay1></p>
        </div>
    </section>
  </article>


</template>

<script>
import TextDisplay1 from '@/components/common/TextDisplay1';
export default{
  name:"Porfolio2",
  props: ['product'],
  components: {
    TextDisplay1
  },
  data() {
    return {

    }
  },
  created() {

  },
  mounted() {
    // this.$loadScript("/js/porfolio2.js")
    // .then((res) => {
    //   console.log("res",res);
    // })
    // .catch((e) => {
    //   console.log("e:",e);
    // })
  },

}

</script>

<style scoped>
@media screen and (min-width: 700px) {
  article{
    /* background-color:  #ccc; */
    /* border: 5px red solid; */
  }

	article {
		display: flex;
		flex-wrap: wrap;

	}
	figure {
		/* background: #eee; */
		width: calc( 50% + 1px);
		height: 100vh;
		margin: 0 auto 10vh 0;
		position: sticky;
		top: 0;
		overflow: hidden;
		/* box-shadow: 4px -4px 8px rgba(0,0,0,.4); */

	}
	figure::after {
		content: '';
		position: absolute;
		top: 5vmin;
		right: 5vmin;
		bottom: 5vmin;
		left: 45%;
		/* border: 2px dashed #fff; */
		/* outline: 1px solid #fff; */
		outline-offset: -5vmin;
		/* backdrop-filter: grayscale(1); */
		pointer-events: none;
	}
	figure:nth-of-type(2n)::after {
		right: 45%;
		left: 5vmin;
	}
	section {
		background: #e5e5e5;
		width: calc(50% + 1px);
		height: 100vh;
		margin: 0 0 10vh auto;
		position: sticky;
		top: 0;
		padding: 5vmin;
		box-shadow: -4px -4px 8px rgba(0,0,0,.4);
	}
	figure:nth-of-type(1),
	section:nth-of-type(1) {
		width: 50%;
	}



	figure:nth-of-type(2n) {
		margin: 0 0 10vh auto;
		box-shadow: -4px -4px 8px rgba(0,0,0,.4);
	}
	section:nth-of-type(2n) {
		margin: 0 auto 10vh 0;
		box-shadow: 4px -4px 8px rgba(0,0,0,.4);
		}
	figure:last-of-type,
	section:last-of-type {
		margin-bottom: 0;
	}
	section::before {
		background: inherit;
		z-index: 1;
		content: '';
		position: absolute;
		top: 50%;
		left:0;
		width: 7vmin;
		height: 7vmin;
		transform: translate(calc(-50% + 1px), -50%) rotate(-45deg);
		clip-path: polygon(-15% -15%, 110% 0%, 0% 110%);
		box-shadow: -4px -2px 8px rgba(0,0,0,.4);
		border-radius: 1.5vmin 0 0 0;
	}
	section:nth-of-type(2n)::before {
		left:auto;
		right: 0;
		transform: translate(calc(50% - 1px), -50%) rotate(-45deg) scale(-1);
	}
	section::after {
		content: '';
		position: absolute;
		top: 5vmin;
		right: 45%;
		bottom: 5vmin;
		left: 5vmin;
		/* border: 2px dashed #fff;
		outline: 1px solid #fff; */
		outline-offset: -5vmin;
		/* backdrop-filter: invert(1); */
		pointer-events: none;
	}
	section:nth-of-type(2n):after {
		right: 5vmin;
		left: 45%;
	}
	figure img {
		/* min-width: 100%;
		min-height: 100%; */
		/* object-fit: cover; */
		/* object-position: center; */
    width: 100%;
    height: 100%;
	}
	section > div {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
		padding: 1rem;
	}
	h1,
	h2 {
		margin: 15% 0 auto;
		font-size: calc(5vmin + 3vmax);
		text-align: center;
		font-weight: 700;
		line-height: 1;
		word-spacing: .5rem;
	}
	p {
		text-align: right;
		width: 100%;
		font-family: "Cormorant", serif;
		font-weight: 400;
		font-style: italic;
		font-size: calc(1.5vmin + 1.75vmax);
		margin-bottom: 5%;
	}
	a {
		color: transparent;
		-webkit-text-stroke: 2px #212121;
		text-decoration: none;
    font-weight: 900;
    letter-spacing: 2px;
	}
	a:hover, a:focus {
		-webkit-text-stroke: 1px #999;
	}
}

@media screen and (max-width: 700px) {
  img{
    width: 100%;
    height: auto;
  }
}

</style>
