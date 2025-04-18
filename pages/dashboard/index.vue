<template>
  <div class="flex h-screen">
    <AdminMenus :menus="menus" />
    <div class="flex-1 flex flex-col gap-y-0">
      <header class="h-16 bg-white border-b-4 border-indigo-300"></header>
      <main class="flex-1 bg-gray-200"></main>
    </div>
  </div>
</template>

<script setup lang="ts">
import AdminMenus from '~/components/dashboard/AdminMenus.vue';

const { adminMenus } = useAdminMenus();
const menus = computed(() => {
  return adminMenus;
});

console.log('woors) Pages.dashboard...');
</script>
