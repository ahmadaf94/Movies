<script setup lang="ts">
import { useRouter } from "vue-router";

import useMoviesListItem from "../composables/useMoviesListItem";

import CalendarImage from "../assets/calendar.svg";

import type { MovieListItem } from "../types";
import type { Genre } from "../../types";

type IProps = {
  movie: MovieListItem;
  genres: Genre[];
};

const props = defineProps<IProps>();

const { genereNames, posterImageURL } = useMoviesListItem(props);

const router = useRouter();
</script>

<template>
  <div
    class="w-full h-48 overflow-hidden p-1 rounded-lg bg-card border-border flex flex-row gap-3 cursor-pointer"
    @click="router.push({ path: '/' + movie.id })"
  >
    <img class="h-full rounded-l-lg" :src="posterImageURL" />

    <div
      class="flex flex-col justify-between items-start pt-4 pb-3 pr-4 flex-grow"
    >
      <span class="font-bold">{{ movie.title }}</span>

      <div class="flex flex-col gap-3">
        <div class="flex flex-row gap-2 items-center">
          <img :src="CalendarImage" />

          <span class="text-date text-xs">{{ movie.release_date }}</span>
        </div>

        <span
          class="text-genere text-xs flex flex-row items-center flex-wrap gap-1"
        >
          <template v-for="(genere, index) of genereNames" :key="genere">
            <div v-if="index !== 0" class="w-1 h-1 rounded-full bg-genere" />

            <span>{{ genere }}</span>
          </template>
        </span>
      </div>
    </div>
  </div>
</template>
