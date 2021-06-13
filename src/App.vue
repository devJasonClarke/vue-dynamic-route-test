<template>
  <TheNavigation />
<router-view v-slot="{ Component }" >
  <transition name="slide" mode="out-in">
    <component :is="Component" :key="$route.path"/>
  </transition>
</router-view>
</template>
<script>
import TheNavigation from "@/components/TheNavigation";
export default {
  components: {
    TheNavigation,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.slide-enter-active {
  transition: all 1s ease-out;
}

.slide-leave-active {
  transition: all 1s ease-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
