<template>
     <div class="text-center w3-topbar">
         <h1 class="my-3"><b-badge pill variant="dark">Blending</b-badge></h1>
         <b-form-group>
           <b-form-radio-group id="radiosBlend" v-model="blend" name="radioBlend" buttons  button-variant="outline-primary" @change="changeBlend">
           <b-form-radio value="true">BLACK</b-form-radio>
           <b-form-radio disabled button-variant="outline-info"></b-form-radio>
           <b-form-radio value="false">WHITE</b-form-radio>
           </b-form-radio-group>
         </b-form-group>
     </div>
</template>

<script>
export default {
  name: "blendRadio",

  data() {
    return {
      localBlend: this.blend
    };
  },

  computed: {
    blend: {
      get() {
        return this.$store.state.current.blending;
      },
      set(value) {
        this.$store.dispatch("newBlending", value);
      }
    },
    first: function first() {
      return this.$store.state.firstAccess;
    }
  },

  watch: {
    blend: function blend(newVal, oldVal) {
      this.localBlend = this.blend;
    },
    localBlend: function localBlend(newVal, oldVal) {
      if (this.$store.state.firstAccess) {
      }
    }
  },

  methods: {
    changeBlend: function changeBlend(value) {
      this.$nextTick(function() {
        console.log(
          "blend:" +
            value +
            " store-" +
            this.blend +
            " local-" +
            this.localBlend
        );
        if (this.first === true) {
          this.$http
            .get("http://espclock.local/blend", { params: { value: value } })
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
