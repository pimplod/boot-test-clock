<template>
     <div class="text-center w3-topbar my-5">
         <h1 class="my-3 text-capitalize"> <b-button variant="primary" size="lg" @click="demoPattern" ><i v-bind:class="icon"></i></b-button> {{name}}</h1>
         <b-form-select v-model="selected" :options="options" @change="changePattern"/>
     </div>
</template>

<script>
const nameToNum = {
  hour: 0,
  half: 1,
  quarterAft: 2,
  quarterTo: 3
};
const patToNum = {
  Pride: 0,
  Color_Waves: 1,
  Juggle: 2,
  Theater_Chase: 3,
  Sinelon: 4,
  Bounce: 5
};

export default {
  name: "dispAnimations",
  props: {
    name: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: "fas fa-plug"
    }
  },

  data() {
    return {
      localAnimation: this.selected
    };
  },

  computed: {
    selected: {
      get() {
        return this.$store.state.patterns[this.name];
      },
      set(value) {
        if (this.second == true) {
          this.$store.dispatch("newPattern", {
            name: this.name,
            val: value
          });
        }
      }
    },

    options() {
      return this.$store.getters.patternArray;
    },

    second: function second() {
      return this.$store.state.secondAccess;
    }
  },

  watch: {
    selected(newVal, oldVal) {
      this.localAnimation = this.selected;
    },

    localAnimation(newVal, oldVal) {}
  },

  methods: {
    demoPattern() {
      let nameNumber = nameToNum[this.name];

      this.$http
        .get("http://espclock.local/demo", {
          params: { value: nameNumber }
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
    },

    changePattern: function changePattern(value) {
      this.$nextTick(function() {
        /*  let patToNum = {
          Pride: 0,
          Color_Waves: 1,
          Juggle: 2,
          Theater_Chase: 3,
          Sinelon: 4,
          Bounce: 5
        }; */

        let nameNumber = nameToNum[this.name];
        let patternNumber = patToNum[value];
        let querry = {
          value: patternNumber,
          name: nameNumber
        };
        console.log(querry);
        if (this.second === true) {
          this.$http
            .get("http://espclock.local/animate", {
              params: querry
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
