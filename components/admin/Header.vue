<template>
  <header class="header">
    <div class="relative">
      <span class="absolute inset-y-0 left-0 flex items-center pl-3">
        <font-awesome-icon icon="fas fa-search" class="text-xl text-gray-500" />
      </span>
      <input
        type="text"
        class="h-10 w-64 rounded-md pl-10 pr-4 text-xl focus:border-indigo-600"
        placeholder="검색"
      />
    </div>
    <div class="flex items-center gap-x-4">
      <button><font-awesome-icon icon="fas fa-bell" /></button>
      <button class="h-8 w-8 overflow-hidden rounded-full">
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
  @apply flex h-16 items-center justify-between border-b-4 border-indigo-600 bg-white px-6 py-2;
}
</style>
