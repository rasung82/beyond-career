<template>
  <div>
    <!-- Header -->
    <header class="sticky top-0 backdrop-blur-lg">
      <nav class="portfolio-header">
        <div class="flex items-center space-x-2">
          <h1 class="text-2xl font-bold">루비콘</h1>
          <p class="text-sm text-gray-500">Application Development Analyst</p>
        </div>
        <div class="flex items-center gap-x-6">
          <a href="#home" class="portfolio-header-menu">홈</a>
          <a href="#ablout" class="portfolio-header-menu">소개</a>
          <a href="#skill" class="portfolio-header-menu">기술</a>
          <a href="#project" class="portfolio-header-menu">프로젝트</a>
          <a href="#contact" class="portfolio-header-menu">연락처</a>
          <button class="portfolio-darkmode-btn">
            <font-awesome-icon icon="fas fa-moon" />
          </button>
        </div>
      </nav>
    </header>
    <!-- Main -->
    <slot />
    <!-- Footer -->
    <footer class="bg-gray-100 py-6">
      <div class="container max-w-4xl mx-auto px-6 text-center">
        <p>&copy; 2025 XXX. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
console.log('woors) Layout.portfolio...');
</script>

<style scoped></style>
