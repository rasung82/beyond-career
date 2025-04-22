<template>
  <aside class="w-64 space-y-6 bg-gray-800 px-2 py-7 text-white">
    <div class="mb-6 px-4">
      <h3 class="text-2xl font-semibold">대시보드</h3>
    </div>
    <nav>
      <ul>
        <AdminMenuItem
          v-for="item in supMenus"
          :key="item.adminMenuId"
          :menu="item"
          :depth="1"
          :has-child="false"
        />
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import AdminMenuItem from './AdminMenuItem.vue';
const { adminMenus: supMenus } = useAdminSupMenus();

console.log('woors) Components.NavMenu...', supMenus);
</script>

<style scoped></style>
