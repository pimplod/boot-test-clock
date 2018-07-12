<template>
   <b-container class="text-center">
          <h1 class="my-3"><b-badge pill variant="dark">Brightness</b-badge></h1>
        <div class="my-5">
           <vue-slider v-model="bright"  v-bind="stats" @callback="updateBright"></vue-slider>
        </div>
    </b-container>
</template>

<script>
import vueSlider from "vue-slider-component";

export default {
  name: "BrightSlide",
  components: {
    vueSlider
  },
  data() {
    return {};
  },
  computed: {
    bright: {
      get() {
        return this.$store.state.current.brightness;
      },
      set(value) {
        if (this.first === true) {
          this.$store.commit("updateBrightness", value);
        }
      }
    },
    stats: function stats() {
      return this.$store.state.slideOptions.brightness;
    },
    first: function first() {
      return this.$store.state.firstAccess;
    }
  },

  methods: {
    updateBright: function updateBright(value) {
      //this.$store.dispatch("newBrightness", value);

      if (this.first === true) {
        this.$http
          .get("http://espclock.local/brightness", {
            params: { value: value }
          })
          .then(
            function(response) {
              let res = response.body;
              this.$notify.success(res);
            },
            function(response) {
              let res = response.body;
              this.$notify.error(res);
            }
          );
      }
    }
  }
};
</script>

<style>
</style>
