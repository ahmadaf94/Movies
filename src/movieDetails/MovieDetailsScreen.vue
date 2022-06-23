<script setup lang="ts">
import MovieDetailsHeading from "./components/MovieDetailsHeading.vue";
import MovieDetailsContent from "./components/MovieDetailsContent.vue";
import MovieDetailsCast from "./components/MovieDetailsCast.vue";

import useMovieDetails from "./composables/useMovieDetails";

const { details, error, isLoading, retry } = useMovieDetails();
</script>

<template>
  <div v-if="isLoading" class="w-full h-full flex justify-center items-center">
    Loading...
  </div>

  <div v-else-if="error" class="w-full h-full flex justify-center items-center">
    <p>{{ error }}</p>
    <a class="cursor-pointer text-red-800" @click="retry">Retry</a>
  </div>

  <div v-else-if="details" class="flex flex-col w-full">
    <MovieDetailsHeading :title="details.title" :tagline="details.tagline" />

    <MovieDetailsContent :details="details" />

    <p class="text-paragraph mt-14">{{ details.overview }}</p>

    <MovieDetailsCast />
  </div>

  <div v-else>Something went wrong!</div>
</template>
