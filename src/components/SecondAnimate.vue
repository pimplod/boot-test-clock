<template>
     <div class="text-center w3-topbar">
         <h1 class="my-3"><b-badge pill variant="dark">Seconds Animation</b-badge></h1>
         <b-form-group>
           <b-form-radio-group id="radiosSeconds" v-model="animation" name="radioSeconds" buttons  button-variant="outline-primary" @change="changeSecAnimate">
           <b-form-radio value="true">ON</b-form-radio>
             <b-form-radio disabled button-variant="outline-info"></b-form-radio>
           <b-form-radio value="false">OFF</b-form-radio>
           </b-form-radio-group>
         </b-form-group>
     </div>
</template>

<script>
export default {
  name: "secondsRadio",

  data() {
    return {
      localAnimation: this.animation
    };
  },

  computed: {
    animation: {
      get() {
        return this.$store.state.current.aSec;
      },
      set(value) {
        this.$store.dispatch("newSecondsAnimate", value);
      }
    },
    first: function first() {
      return this.$store.state.firstAccess;
    }
  },

  watch: {
    animation(newVal, oldVal) {
      this.localAnimation = this.animation;
    },
    localAnimation(newVal, oldVal) {}
  },

  methods: {
    changeSecAnimate: function changeSecAnimate(value) {
      this.$nextTick(function() {
        console.log(
          value + " store-" + this.animation + " local-" + this.localAnimation
        );
        if (this.first === true) {
          this.$http
            .get("http://espclock.local/aSec", {
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
      });
    }
  }
};
</script>

<style>
</style>
