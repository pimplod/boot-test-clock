<template>
<div>
    <side-navigation></side-navigation>
    <header class="w3-bottombar w3-border-red">
        <div class="w3-bar w3-large w3-black">
            <div class="w3-center">
                <h1 class="text-white w3-wide">EspClock</h1>
            </div>
        </div>
    </header>
    </div>
</template>

<script>
import sideNavigation from "./SideNav";
export default {
  name: "headComp",
  components: {
    sideNavigation
  }
};
</script>

<style>
</style>
