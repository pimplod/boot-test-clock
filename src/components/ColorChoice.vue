<template>
 <div class="text-center w3-topbar">
   <h1 class="my-3"><b-badge pill v-bind:style="{'background-color': newColor}">{{title}}</b-badge></h1>
    <div class="form__field">
    <swatches v-model="color" :colors="colorArray"  fallbackOkText="Push" swatch-size="50" show-border shapes="squares" inline @close="change"></swatches>
    </div>
  </div>
</template>

<script>
import Swatches from "vue-swatches";

// Import the styles too, globally
import "vue-swatches/dist/vue-swatches.min.css";
import debounce from "lodash.debounce";

export default {
  name: "colorPick",
  components: {
    Swatches
  },

  props: {
    place: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    },
    colorArray: {
      type: Array
    },
    title: {
      type: String,
      default: "TITLE"
    }
  },

  data() {
    return {
      internalColor: this.newColor,
      internalPlace: this.place
    };
  },

  computed: {
    newColor: {
      get() {
        return this.$store.state.current[this.place];
      },
      set(value) {
        this.$store.dispatch("newColor", {
          time: this.place,
          val: value
        });
      }
    },

    first: function first() {
      return this.$store.state.firstAccess;
    }
  },
  created: {
    function() {
      this.debouncedChange = debounce(this.sendChange, 500);
    }
  },
  watch: {
    newColor: function newColor(newVal, oldVal) {
      this.internalColor = this.newColor;
    },

    internalColor: function internalColor(newVal, oldVal) {
      console.log("new- " + newVal + " old- " + oldVal);
      this.debouncedChange();
    }
  },
  methods: {
    change: function change(value) {
      this.internalColor = value;
      this.$store.commit("updateColor", {
        time: this.place,
        val: value
      });
    },

    sendChange: function sendChange() {
      let hexcolor = this.newColor.substring(1);

      if (this.first == true) {
        this.$http
          .get("http://espclock.local/" + this.place, {
            params: { value: hexcolor }
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
