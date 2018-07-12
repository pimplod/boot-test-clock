<template>
    <div class="text-center w3-topbar">
         <h1 class="my-3"><b-badge pill variant="dark">Display Pattern</b-badge></h1>
         <b-form-group>
           <b-form-radio-group id="radiosDisplay" v-model="display" name="radioDisplay" buttons  button-variant="outline-primary" @change="changeDisplay">
           <b-form-radio v-for="item in displayArray" v-bind:key="item.id" :value="item">{{item}}</b-form-radio>
           
           </b-form-radio-group>
         </b-form-group>
     </div>
</template>

<script>
export default {
  name: "displayPattern",

  data() {
    return {
      localDisplay: this.display
    };
  },

  computed: {
    display: {
      get() {
        return this.$store.state.current.tDisplay;
      },
      set(value) {
        this.$store.dispatch("newTimeDisplay", value);
      }
    },
    displayArray() {
      return this.$store.getters.displayArray;
    },
    first() {
      return this.$store.state.firstAccess;
    }
  },
  watch: {
    display(newVal, oldVal) {
      this.localDisplay = this.display;
    },
    localDisplay(newVal, oldVal) {
      /* if (this.first) {
        this.$http
          .get("http://espclock.local/display", { params: { value: newVal } })
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
    }*/
    }
  },
  methods: {
    changeDisplay: function changeDisplay(value) {
      let valueToIndex = {
        arc: 0,
        point: 1,
        third: 3
      };

      console.log(
        "value->" +
          value +
          " local->" +
          this.localDisplay +
          " store->" +
          this.display
      );
      if (this.first === true) {
        this.$http
          .get("http://espclock.local/display", {
            params: { value: valueToIndex[value] }
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
