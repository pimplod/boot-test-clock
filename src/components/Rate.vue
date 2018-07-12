<template>
    <b-container class="text-center w3-topbar">
          <h1 class="my-3"><b-badge pill variant="dark">{{title}}</b-badge></h1>
        <div class="my-3">
           <vue-slider v-model="rate"  v-bind="stats" @callback="updateRate"></vue-slider>
        </div>
    </b-container>
</template>

<script>
import vueSlider from "vue-slider-component";

export default {
  name: "DemoSeconds",
  components: {
    vueSlider
  },
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  computed: {
    rate: {
      get() {
        return this.$store.state.current.demoSeconds;
      },
      set(value) {
        if (this.first === true) {
          this.$store.dispatch("newDemoSeconds", value);
        }
      }
    },
    stats() {
      return this.$store.state.slideOptions.demoSeconds;
    },
    first() {
      return this.$store.state.firstAccess;
    }
  },
  methods: {
    updateRate(value) {
      if (this.first === true) {
        this.$http
          .get("http://espclock.local/demoSeconds", {
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
