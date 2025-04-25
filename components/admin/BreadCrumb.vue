<template>
  <h3 class="text-lg">{{ text }}</h3>
</template>

<script setup lang="ts">
defineProps<{
  text?: string;
}>();
</script>
