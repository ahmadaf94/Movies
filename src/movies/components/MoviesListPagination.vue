<script setup lang="ts">
type IProps = {
  goNextPage: () => void;
  goPrevPage: () => void;
  isFirstPage: boolean;
  isLastPage: boolean;
  itemsRange: string;
};

defineProps<IProps>();
</script>

<template>
  <div class="flex flex-col justify-center items-center mb-20 gap-3">
    <div class="flex flex-row items-center justify-center gap-7">
      <button
        class="font-bold text-primary cursor-pointer disabled:text-black/50"
        :disabled="isFirstPage"
        @click="goPrevPage"
      >
        Previous Page
      </button>

      <div class="h-10 w-0.5 bg-separator" />

      <button
        class="font-bold text-primary cursor-pointer disabled:text-black/50"
        :disabled="isLastPage"
        @click="goNextPage"
      >
        Next Page
      </button>
    </div>

    <p class="text-center text-paginator">Showing results {{ itemsRange }}</p>
  </div>
</template>
