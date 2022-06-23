<script setup lang="ts">
import { RouterView } from "vue-router";

import useConfig from "./composables/useConfig";

const { isLoading, error, retry } = useConfig();
</script>

<template>
  <div class="container w-screen h-screen mx-auto">
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

    <RouterView v-else />
  </div>
</template>
