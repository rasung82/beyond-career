<template>
  <div class="mt-8 grid grid-cols-3 gap-6">
    <div class="panel">
      <div class="panel-icon">
        <font-awesome-icon icon="fas fa-users" class="text-lg text-white" />
      </div>
      <div class="flex flex-col gap-y-1">
        <h4 class="text-xl font-semibold text-gray-700">8,282</h4>
        <div class="text-gray-500">신규 사용자</div>
      </div>
    </div>
    <div class="panel">
      <div class="panel-icon">
        <font-awesome-icon icon="fas fa-users" class="text-lg text-white" />
      </div>
      <div class="flex flex-col gap-y-1">
        <h4 class="text-xl font-semibold text-gray-700">8,282</h4>
        <div class="text-gray-500">신규 사용자</div>
      </div>
    </div>
    <div class="panel">
      <div class="panel-icon">
        <font-awesome-icon icon="fas fa-users" class="text-lg text-white" />
      </div>
      <div class="flex flex-col gap-y-1">
        <h4 class="text-xl font-semibold text-gray-700">8,282</h4>
        <div class="text-gray-500">신규 사용자</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.panel {
  @apply flex items-center justify-start gap-x-4 rounded-md bg-white px-4 py-4;
}
.panel-icon {
  @apply flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 bg-opacity-75;
}
</style>
