<template>
 <div class="text-center w3-topbar">
   <h1 class="my-3"><b-badge pill v-bind:style="{'background-color': color}">{{title}}</b-badge></h1>
    <div class="form__field">
    <swatches v-model="color" :colors="colorArray" swatch-size="50" show-border shapes="squares" inline @close="change(value)" @input="sendChange"></swatches>
    </div>
  </div>
</template>

<script>
import Swatches from "vue-swatches";

// Import the styles too, globally
import "vue-swatches/dist/vue-swatches.min.css";
import debounce from "lodash.debounce";

export default {
  name: "colorArray",
  components: {
    Swatches
  },

  props: {
    name: {
      type: String,
      default: ""
    },

    title: {
      type: String,
      default: "TITLE"
    }
  },

  data() {
    return {
      localColor: this.color,
      localName: this.name
    };
  },

  computed: {
    color: {
      get() {
        return this.$store.state.current[this.name];
      },
      set(value) {
        this.$store.commit("updateColor", {
          name: this.name,
          val: value
        });
      }
    },

    colorArray: function colorArray() {
      return this.$store.state.colorArrays[this.name];
    },

    first: function first() {
      return this.$store.state.firstAccess;
    }
  },
  watch: {
    color: function color(newVal, oldVal) {
      this.localColor = this.color;
    },

    localColor: function localColor(newVal, oldVal) {
      console.log("new- " + newVal + " old- " + oldVal);
      //this.sendChange();
      debounce(this.sendChange, 500);
      //this.debouncedChange();
    }
  },
  methods: {
    change: function change(value) {
      if (this.color != value) {
        this.$emit("update:color", value);
      }
    },

    sendChange: function sendChange() {
      let hexcolor = this.color.substring(1);

      if (this.first === true) {
        this.$http
          .get("http://espclock.local/" + this.name, {
            params: { value: hexcolor }
          })
          .then(
            function(response) {
              let res = response.body;
              this.$notify.success(res);
            },
            function(response) {
              let res = response.body;
              this.$notify.error("error" + res);
            }
          );
      }
    },
    debouncedChange: function() {
      debounce(this.sendChange, 500);
    }
  }
};
</script>

<style>
</style>
