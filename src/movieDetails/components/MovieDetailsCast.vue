<script setup lang="ts">
import useMovieDetailsCast from "../composables/useMovieDetailsCast";

const { error, isLoading, retry, sortedCast } = useMovieDetailsCast();
</script>

<template>
  <div class="w-full flex flex-col my-20 gap-3">
    <h2 class="font-bold">Credit:</h2>

    <div v-if="isLoading">Loading...</div>

    <div v-else-if="error">
      <p>{{ error }}</p>
      <a class="cursor-pointer text-red-800" @click="retry">Retry</a>
    </div>

    <div v-else>
      {{ sortedCast }}
    </div>
  </div>
</template>
