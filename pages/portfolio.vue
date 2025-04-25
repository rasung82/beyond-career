<template>
  <div>
    <main class="container mx-auto max-w-4xl px-6 py-12">
      <!-- 홈 섹션 -->
      <PortfolioHome />

      <!-- 소개 섹션 -->
      <PortfolioAbout />

      <!-- 스킬 섹션 -->
      <PortfolioSkill />

      <!-- 프로젝트 섹션 -->
      <PortfolioProject />

      <!-- 연락처 섹션 -->
      <PortfolioContact />
    </main>
  </div>
</template>

<script setup lang="ts">
console.log('woors) Pages.portfolio...');
definePageMeta({ layout: 'portfolio' });
</script>

<style scoped></style>
