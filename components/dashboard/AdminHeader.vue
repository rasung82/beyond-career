<template>
  <header class="header">
    <div class="relative">
      <span class="absolute left-0 pl-3 flex items-center inset-y-0">
        <font-awesome-icon icon="fas fa-search" class="text-xl text-gray-500" />
      </span>
      <input
        type="text"
        class="focus:border-indigo-600 h-10 w-64 pl-10 pr-4 text-xl rounded-md"
        placeholder="검색"
      />
    </div>
    <div class="flex items-center gap-x-4">
      <button><font-awesome-icon icon="fas fa-bell" /></button>
      <button class="w-8 h-8 rounded-full overflow-hidden">
        <img
          src="https://api.dicebear.com/9.x/adventurer/svg?seed=Jude"
          alt="avatar"
        />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
.header {
  @apply flex justify-between items-center px-6 py-2 h-16 bg-white border-b-4 border-indigo-600;
}
</style>
