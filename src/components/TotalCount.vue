<template>
  <div class="d-flex flex-row flex-wrap justify-content-start align-items-center">
    <span class="badge bg-success fs-6 fw-normal p-2">{{ length }} {{ entity }}</span>
  </div>
</template>

<script lang="ts" setup>
const { length, entity } = defineProps<{
  length: number
  entity: string
}>()
</script>
