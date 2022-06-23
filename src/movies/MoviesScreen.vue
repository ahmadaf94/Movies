<script setup lang="ts">
import MoviesListSearch from "./components/MoviesListSearch.vue";
import MoviesListItem from "./components/MoviesListItem.vue";
import MoviesListPagination from "./components/MoviesListPagination.vue";

import useGenres from "./composables/useGenres";
import useMovies from "./composables/useMovies";

const {
  error,
  goNextPage,
  goPrevPage,
  isFirstPage,
  isLastPage,
  isLoading,
  itemsRange,
  movies,
  retry,
  searchMovies,
} = useMovies();

const { generes } = useGenres();
</script>

<template>
  <div class="flex flex-col w-full">
    <MoviesListSearch @search="searchMovies" />

    <div
      v-if="isLoading"
      class="w-full h-full flex justify-center items-center"
    >
      Loading...
    </div>

    <div
      v-else-if="error"
      class="w-full h-full flex justify-center items-center"
    >
      <p>{{ error }}</p>
      <a class="cursor-pointer text-red-800" @click="retry">Retry</a>
    </div>

    <div v-else class="grid gap-x-16 gap-y-8 grid-cols-3 my-28">
      <MoviesListItem
        v-for="movie of movies"
        :key="movie.id"
        :movie="movie"
        :genres="generes"
      />
    </div>

    <MoviesListPagination
      :go-next-page="goNextPage"
      :go-prev-page="goPrevPage"
      :is-first-page="isFirstPage"
      :is-last-page="isLastPage"
      :items-range="itemsRange"
    />
  </div>
</template>
