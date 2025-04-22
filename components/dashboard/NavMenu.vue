<template>
  <aside class="bg-gray-800 w-72 text-white px-2 py-7 space-y-6">
    <div class="px-4 mb-6">
      <h3 class="text-2xl font-semibold">대시보드</h3>
    </div>
    <nav>
      <ul>
        <NavMenuItem
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
import NavMenuItem from './NavMenuItem.vue';
const { adminMenus: supMenus } = useAdminSupMenus();

console.log('woors) Components.NavMenu...', supMenus);
</script>

<style scoped></style>
