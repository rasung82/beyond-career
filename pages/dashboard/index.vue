<template>
  <div class="flex h-screen">
    <NavMenu />
    <div class="flex-1 flex flex-col">
      <header class="h-16 bg-white border-b-4 border-indigo-300"></header>
      <main class="flex-1 bg-gray-200"></main>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavMenu from '~/components/dashboard/NavMenu.vue';

console.log('woors) Pages.dashboard...');
</script>
