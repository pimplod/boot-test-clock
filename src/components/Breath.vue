<template>
    <div class="text-center w3-topbar">
         <h1 class="my-3"><b-badge pill variant="dark">Breathing</b-badge></h1>
         <b-form-group>
           <b-form-radio-group id="radiosBreath" v-model="breath" name="radioBreath" buttons  button-variant="outline-primary" @change="changeBreath" >
           <b-form-radio value="true">ON</b-form-radio>
             <b-form-radio disabled button-variant="outline-info"></b-form-radio>
           <b-form-radio value="false">OFF</b-form-radio>
           </b-form-radio-group>
         </b-form-group>
     </div>

</template>

<script>
export default {
  name: "breathRadio",

  data() {
    return {
      localBreath: this.breath
    };
  },

  computed: {
    breath: {
      get() {
        return this.$store.state.current.breath;
      },
      set(value) {
        this.$store.dispatch("newBreathing", value);
      }
    },
    first: function first() {
      return this.$store.state.firstAccess;
    }
  },

  watch: {
    breath: function breath(newVal, oldVal) {
      this.localBreath = this.breath;
    },
    localBreath: function localBreath(newVal, oldVal) {}
  },

  methods: {
    changeBreath: function changeBreath(value) {
      this.$nextTick(function() {
        console.log(
          "breath:" +
            value +
            " store-" +
            this.breath +
            " local-" +
            this.localBreath
        );
        if (this.first === true) {
          this.$http
            .get("http://espclock.local/breath", { params: { value: value } })
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
