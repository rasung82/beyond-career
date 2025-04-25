<template>
  <div class="mt-8">
    <div class="overflow-hidden rounded-lg border-b border-gray-200 shadow">
      <table class="w-full">
        <thead
          class="bg-gray-100 text-left text-sm font-semibold text-gray-500"
        >
          <tr class="border-b border-gray-200">
            <th class="px-6 py-3 font-medium">작업</th>
            <th class="px-6 py-3 font-medium">담당자</th>
            <th class="px-6 py-3 font-medium">마감일</th>
            <th class="px-6 py-3 font-medium">상태</th>
          </tr>
        </thead>
        <tbody class="bg-gray-50 text-left text-sm font-medium text-gray-900">
          <tr class="border-b border-gray-200">
            <td class="px-6 py-4">스테이징 배포 준비</td>
            <td class="px-6 py-4">우라성</td>
            <td class="px-6 py-4">2025-04-22</td>
            <td class="px-6 py-4">
              <span
                class="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-800"
              >
                진행중
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
