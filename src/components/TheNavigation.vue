<template>
  <nav>
    <router-link to="/">Home</router-link>
    <ul class="nav-links">
      <li v-for="destination in destinationId" :key="destination.slug">
        <router-link
          :to="{
            name: 'DestinationDetails',
            params: { slug: destination.slug },
          }"
          >{{ destination.name }}</router-link
        >
      </li>
      <router-link :to="{ name: 'lee' }">Lee</router-link>
    </ul>
  </nav>
</template>

<script>
import store from "@/store.js";
export default {
  name: "TheNavigation",

  data() {
    return {
      destinationId: store.destinations,
    };
  },
};
</script>

<style scoped>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
  text-decoration: none;
}
nav a:hover {
  color: plum;
}

nav a.active {
  color: red;
}
</style>
