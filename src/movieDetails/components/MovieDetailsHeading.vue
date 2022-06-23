<script setup lang="ts">
import { useRouter } from "vue-router";

import BackImage from "../assets/back.svg";

type IProps = {
  title?: string;
  tagline?: string;
};

defineProps<IProps>();

const router = useRouter();
</script>

<template>
  <div
    class="w-full py-4 px-16 mt-16 bg-heading flex flex-row items-center gap-16 rounded-lg h-20"
  >
    <button
      class="bg-primarybutton text-white p-2 px-4 rounded-full flex flex-row items-center gap-1"
      @click="router.back()"
    >
      <img :src="BackImage" />

      <span>Back</span>
    </button>

    <div class="flex flex-col gap-2">
      <h1 class="font-bold">{{ title }}</h1>

      <span>{{ tagline }}</span>
    </div>
  </div>
</template>
