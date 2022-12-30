<template>
  <v-app>
   <Header/>
  <v-container fluid fill-height class="banner" style="top: 80px;position: fixed;">
    <v-layout justify-center align-center column pa-5>
      <div class="banner-contant">
        <h4>#1 <span class="random-word">INSTAGRAM</span></h4>
        <h3>CREATOR MARKETPLACE & INFLUENCER MARKETING PLATFORM</h3>
        <h2>
          Accelerate your Influencer <br />
          Marketing with StarNgage+
        </h2>
        <input
          type="text"                             
          name="search"
          class="form-control"
          placeholder="Search by Influencer @starngage, Hashtag #ShareACoke or Keyword Anime"
        />
        <a href="/#/search">
          <button class="orange">Search Now</button>
        </a>
      </div>
    </v-layout>
  </v-container>
</v-app>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header.vue'
export default {
  name: "Home",
  components:{
    Header
  },
  data: () => ({
    i:0,
    animationTime:0,
    animation:0
  }),
  methods: {
    randomizeText(){
      const phrase = document.querySelector(".random-word");
      const compStyles = window.getComputedStyle(phrase);
      console.log(compStyles)
      const animation = compStyles.getPropertyValue("animation");
      console.log(animation)
      this.animationTime = parseFloat(animation.match(/\d*[.]?\d+/)) * 1000;
      this.animationTime = 4000
      console.log(this.animationTime)

      const phrases = ['INSTAGRAM', 'TIKTOK', 'YOUTUBE'];

      this.i = this.randomNum(this.i, phrases.length);
      const newPhrase = phrases[this.i];

      setTimeout(() => {
        phrase.textContent = newPhrase;
      }, 2000); // time to allow opacity to hit 0 before changing word
    },
    randomNum(num, max){
      let j = Math.floor(Math.random() * max);

      // ensure diff num every time
      if (num === j) {
        return this.randomNum(this.i, max);
      } else {
        return j;
      }
    },
    getAnimationTime(){
      const phrase = document.querySelector(".random-word");
      const compStyles = window.getComputedStyle(phrase);
      let animation = compStyles.getPropertyValue("animation");

      // firefox support for non-shorthand property
      animation != ""
        ? animation
        : (animation = compStyles.getPropertyValue("-moz-animation-duration"));

      // webkit support for non-shorthand property
      animation != ""
        ? animation
        : (animation = compStyles.getPropertyValue(
            "-webkit-animation-duration"
          ));

          this.animationTime = parseFloat(animation.match(/\d*[.]?\d+/)) * 1000;
      return this.animationTime;
    },
  },
  mounted() {
    const randomizeText = this.randomizeText();
    setInterval(randomizeText, this.getAnimationTime());
  },
};
</script>
<style scoped>
.random-word {
  display: inline-block;
  text-transform: uppercase;
  color: #BBAADD;
  letter-spacing: 3px;
  width: auto;
/*   transition: all 1.25s; */
  animation: slidedown 4s infinite;
  -webkit-animation: slidedown 4s infinite;
  -moz-animation: slidedown 4s infinite;
}

@keyframes slidedown {
  0% {
    opacity: 50;
  }
  
  5% {
    opacity: 0;
    transform: translateY(0.5em);
  }
  
  7% {
    transform: translateY(-1em);
  }
  
  10% {
    opacity: 0;
  }
  
  20% {
    transform: translateY(0);
    opacity: 100;
  }
}

</style>
