<template>
  <div id="app">
    <head-comp></head-comp>
    <b-container fluid>
      <b-row>
        <b-col>
          <bright-slide></bright-slide>
          <demo-seconds title="Demo-Seconds"></demo-seconds>
          <blend-radio></blend-radio>
          <breath-radio></breath-radio>
          <seconds-radio></seconds-radio>
          <display-pattern></display-pattern>
        </b-col>
        <b-col>
          <b-row>
            <b-col>
               <disp-animations name="hour" icon="fas fa-angle-double-up fa-lg"></disp-animations>
               <disp-animations name="quarterAft" icon="fa fa-angle-double-right fa-lg"></disp-animations>
            </b-col>
            <b-col>
              <disp-animations name="half" icon="fa fa-angle-double-down fa-lg"></disp-animations>
              <disp-animations name="quarterTo" icon="fa fa-angle-double-left fa-lg"></disp-animations>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <div class="w3-bar-block w3-center mx-auto" style="width:100px">
                <div class="w3-bar-item my-3" :style="{'background-color':hourColor}">{{hourColor}}</div>
                <div class="w3-bar-item my-3" :style="{'background-color':minuteColor} ">{{minuteColor}}</div>
                <div class="w3-bar-item my-3" :style="{'background-color':secColor} ">{{secColor}}</div>
              </div>
            </b-col>
          </b-row> 
        </b-col>
        <b-col>
          <color-array name="red" title="HOUR"></color-array>
          <color-array name="green" title="MINUTE"></color-array>
          <color-array name="blue" title="SECONDS"></color-array>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>
import headComp from "./components/HeadForm.vue";
import BrightSlide from "./components/BrightnessSlider.vue";
import blendRadio from "./components/Blend.vue";
import breathRadio from "./components/Breath.vue";
import secondsRadio from "./components/SecondAnimate.vue";
import displayPattern from "./components/DisplayPattern.vue";
//import colorPick from "./components/ColorChoice.vue";
import dispAnimations from "./components/DisplayAnimations.vue";
import DemoSeconds from "./components/Rate.vue";
import { home } from "./Util/homeURL.js";
import colorArray from "./components/ColorArrays";

const defaultPatterns = {
  hour: "Pride",
  half: "Color_Waves",
  quarterAft: "Juggle",
  quarterTo: "Theater_Chase",
  timeDisplay: "Arc"
};

const defaultData = {
  brightness: 125,
  demoSeconds: 30,
  framerate: 90,
  blending: "true",
  breath: "false",
  aSec: "false",
  tDisplay: "0",
  red: "#FF0000",
  green: "#00805E",
  blue: "#3812FA"
};

export default {
  name: "app",

  components: {
    headComp,
    BrightSlide,
    blendRadio,
    breathRadio,
    secondsRadio,
    displayPattern,
    colorArray,
    dispAnimations,
    DemoSeconds
  },

  data() {
    return {};
  },

  beforeCreate() {
    this.$http.get(home + "current").then(
      function(response) {
        this.$store.dispatch("UpdateFirst", response.body);
        this.$notify.success(response.body);
        setTimeout(() => {
          this.$store.commit("first");
        }, 1000);
      },
      function() {
        this.$store.dispatch("UpdateFirst", defaultData);
        this.$notify.info("current: used default");
        setTimeout(() => {
          this.$store.commit("first");
        }, 1000);
      }
    );

    this.$http.get(home + "patterns").then(
      function(response) {
        this.$store.dispatch("UpdateSecond", response.body);
        this.$notify.success(response.body);
        setTimeout(() => {
          this.$store.commit("second");
        }, 1000);
      },
      function() {
        this.$store.dispatch("UpdateSecond", defaultPatterns);
        this.$notify.info("patterns: used default");
        setTimeout(() => {
          this.$store.commit("second");
        }, 1000);
      }
    );
  },

  computed: {
    hourColor: function hourColor() {
      return this.$store.state.current.red;
    },
    minuteColor: function minuteColor() {
      return this.$store.state.current.green;
    },
    secColor: function secColor() {
      return this.$store.state.current.blue;
    }
  },
  methods: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1,
h2 {
  font-weight: normal;
}
</style>
