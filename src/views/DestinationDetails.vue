<template>
<div>
  <section class="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img
        :src="require(`@/assets/${destination.image}`)"
        :alt="destination.name"
      />
      <p>{{ destination.description }}</p>
    </div>
  </section>
  <section class="experiences">
    <h2>Top experiences in {{ destination.name }}</h2>

    <div class="cards">
 
        <div
          class="card"
          v-for="experience in destination.experiences"
          :key="experience.slug"
        >
             <router-link
        :to="{ name: 'experience', params: { experienceSlug: experience.slug } }"
      >
          <img
            :src="require(`@/assets/${experience.image}`)"
            alt="experience.name"
          />
          <p>
            {{ experience.name }}
          </p>
      </router-link>
        </div>
    </div>
  </section>
  <router-view :key="$route.path"/>
</div>
</template>

<script>
import store from "@/store.js";
export default {
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
  computed: {
    destination() {
      return store.destinations.find(
        (destination) => destination.slug == this.slug
      );
    },
  },
};
</script>

<style scoped> 
.cards {
  display: flex;
  flex-wrap: wrap;

  justify-content: space-around;
}
.card > img {
  width: 300px;
}
</style>
