<script setup lang="ts">
import useMovieDetailsContent from "../composables/useMovieDetailsContent";

import type { MovieDetails } from "../types";

type IProps = {
  details: MovieDetails;
};

const props = defineProps<IProps>();

const { budget, genres, imdbLink, revenue, runtime, score, posterImageURL } =
  useMovieDetailsContent(props.details);
</script>

<template>
  <div class="mt-20 w-full flex flex-row gap-16">
    <img :src="posterImageURL" class="rounded-xl w-[500px]" />

    <div class="flex flex-col mt-8 gap-5 flex-grow text-secondary">
      <div class="flex flex-row justify-between items-center">
        <span class="font-bold">Budget</span>

        <span>{{ budget }}</span>
      </div>

      <div class="flex flex-row justify-between items-center">
        <span class="font-bold">Revenue</span>

        <span>{{ revenue }}</span>
      </div>

      <div class="flex flex-row justify-between items-center">
        <span class="font-bold">Release Date</span>

        <span>{{ details.release_date }}</span>
      </div>

      <div class="flex flex-row justify-between items-center">
        <span class="font-bold">Runtime</span>

        <span>{{ runtime }}</span>
      </div>

      <div class="flex flex-row justify-between items-center">
        <span class="font-bold">Score</span>

        <div class="flex flex-row items-center gap-1">
          <svg
            class="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
          <span>{{ score }}</span>
        </div>
      </div>

      <div class="flex flex-row justify-between items-center">
        <span class="font-bold">Genres</span>

        <span>{{ genres }}</span>
      </div>

      <div class="flex flex-row justify-between items-center">
        <span class="font-bold">IMDB Link</span>

        <a :href="imdbLink" class="text-primary underline" target="_blank">
          Link
        </a>
      </div>

      <div class="flex flex-row justify-between items-center">
        <span class="font-bold">Homepage Link</span>

        <a
          :href="details.homepage"
          class="text-primary underline"
          target="_blank"
        >
          Link
        </a>
      </div>
    </div>
  </div>
</template>
