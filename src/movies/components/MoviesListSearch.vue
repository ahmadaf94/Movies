<script setup lang="ts">
import "v-calendar/dist/style.css";
import { DatePicker } from "v-calendar";
import { ref } from "vue";

import { Search } from "../types";

type IEmits = {
  (event: "search", dateRange: Search | undefined): void;
};

const searchDates = ref<Search>();

const emit = defineEmits<IEmits>();
</script>

<template>
  <div
    class="w-full py-4 px-16 mt-16 bg-heading flex flex-row justify-between items-center rounded-lg h-20"
  >
    <div class="flex flex-row gap-4 items-center">
      <span>Search by release date:</span>

      <DatePicker v-model="searchDates" is-range>
        <template v-slot="{ inputValue, inputEvents, isDragging }">
          <div class="relative w-60">
            <input
              class="w-full"
              readonly
              :class="isDragging ? 'text-gray-600' : 'text-gray-900'"
              :value="(inputValue.start || '') + ' - ' + (inputValue.end || '')"
              v-on="inputEvents.start || inputEvents.end"
            />

            <button
              class="absolute top-0 right-2"
              v-if="searchDates"
              @click="searchDates = undefined"
            >
              X
            </button>
          </div>
        </template>
      </DatePicker>
    </div>

    <button
      class="bg-primarybutton text-white p-2 px-4 rounded-full"
      @click="emit('search', searchDates)"
    >
      Search
    </button>
  </div>
</template>
