<template>
  <div :class="{ dark: darkMode }">
    <div
      class="min-h-screen bg-white text-black transition-colors duration-300 dark:bg-gray-900 dark:text-white"
    >
      <!-- Header -->
      <header class="sticky top-0 backdrop-blur-lg">
        <nav class="portfolio-header">
          <div class="flex items-center space-x-2">
            <h1 class="text-2xl font-bold">루비콘</h1>
            <p class="text-sm text-gray-500 dark:text-gray-300">
              Application Development Analyst
            </p>
          </div>
          <div class="flex items-center gap-x-6">
            <a href="#home" class="portfolio-header-menu">홈</a>
            <a href="#ablout" class="portfolio-header-menu">소개</a>
            <a href="#skill" class="portfolio-header-menu">기술</a>
            <a href="#project" class="portfolio-header-menu">프로젝트</a>
            <a href="#contact" class="portfolio-header-menu">연락처</a>
            <button class="portfolio-darkmode-btn" @click="handleDarkMode">
              <font-awesome-icon
                icon="fas fa-moon"
                class="text-gray-700 dark:text-yellow-400"
              />
            </button>
          </div>
        </nav>
      </header>
      <!-- Main -->
      <slot />
      <!-- Footer -->
      <footer class="bg-gray-100 py-6 dark:bg-gray-800">
        <div class="container mx-auto max-w-4xl px-6 text-center">
          <p>&copy; 2025 XXX. All rights reserved.</p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
console.log('woors) Layout.portfolio...');

// 상태 관리(useState)를 사용하여 다크 모드 관리
const darkMode = useState<boolean>('darkMode', () => true);
const handleDarkMode = () => {
  console.log('woors) handleDarkMode...');
  darkMode.value = !darkMode.value;
};
</script>

<style scoped></style>
