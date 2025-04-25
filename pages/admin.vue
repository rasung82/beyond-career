<template>
  <div class="flex h-screen">
    <AdminMenu />
    <div class="flex flex-1 flex-col">
      <AdminHeader />
      <main class="flex-1 bg-gray-200">
        <div class="container mx-auto px-2 py-4">
          <BreadCrumb :text="path" />
          <NuxtPage />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
const path = ref('/');
const route = useRoute();

watch(
  () => route.fullPath,
  newPath => (path.value = newPath),
);

console.log('woors) Pages.dashboard...');
</script>

<style scoped></style>
