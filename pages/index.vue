<template>
  <div class="flex h-screen items-center justify-center">
    <h3 class="text-2xl font-bold">Beyond Career</h3>
  </div>
</template>

<script setup lang="ts">
const { isAuthenticate } = useAuthUser();

definePageMeta({
  middleware: () => {
    if (!isAuthenticate.value) {
      return navigateTo('/login');
    }
  },
});

console.log('woors) Pages.index...', isAuthenticate.value);
</script>

<style scoped></style>
