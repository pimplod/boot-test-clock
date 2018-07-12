<template>
<div id="side-menu">
<b-nav vertical class="w3-sidebar w3-animate-left w3-center" style="display:none;z-index:5" id="mySidebar">  
          <b-nav-item> 
            <b-button @click="w3_close" variant="outline-primary" size="lg"><i class="fas fa-expand-arrows-alt"></i></b-button>
          </b-nav-item>
           <b-nav-text><h1>Control Navigation</h1></b-nav-text>
            <b-nav-item v-for="item in items" :key="item.id" :href="item.url">
                {{item.text}}
                <i v-bind:class="item.icon"></i>
            </b-nav-item>
</b-nav>
<div class="w3-overlay w3-animate-opacity" @click="w3_close" style="cursor:pointer" id="myOverlay"></div>
<div class="w3-bar">
<i @click="w3_open" class="fas fa-bars fa-2x fa-fw w3-bar-item w3-button text-danger m-1"></i>
</div>
</div>
</template>

<script>
export default {
  name: "sideNavigation",
  data() {
    return {
      items: [
        {
          text: "Reload",
          icon: "fas fa-sync fa-spin",
          url: "/"
        },
        {
          text: "Files",
          icon: "fas fa-folder",
          url: "/edit"
        },
        {
          text: "Update",
          icon: "fas fa-code",
          url: "/update"
        },
        {
          text: "Reboot",
          icon: "fas fa-plug",
          url: "/rebootesp"
        }
      ]
    };
  },
  methods: {
    w3_open() {
      var x = document.getElementById("mySidebar");
      x.style.width = "25%";
      x.style.fontSize = "30px";
      x.style.paddingTop = "5%";
      x.style.display = "block";
    },
    w3_close() {
      document.getElementById("mySidebar").style.display = "none";
    }
  }
};
</script>

<style>
</style>