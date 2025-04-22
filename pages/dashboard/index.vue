<template>
  <div class="flex h-screen">
    <AdminMenu />
    <div class="flex flex-1 flex-col">
      <AdminHeader />
      <main class="flex-1 bg-gray-200">
        <div class="container mx-auto px-2 py-4">
          <h3 class="text-lg">> 메인 관리 > 데이터 홈 관리</h3>
          <AdminPanel />
          <AdminTable />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import AdminMenu from '~/components/dashboard/AdminMenu.vue';
import AdminHeader from '~/components/dashboard/AdminHeader.vue';
import AdminTable from '~/components/dashboard/AdminTable.vue';
import AdminPanel from '~/components/dashboard/AdminPanel.vue';

console.log('woors) Pages.dashboard...');
</script>

<style scoped></style>
