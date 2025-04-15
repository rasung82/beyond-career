<template>
  <div>
    <!-- Header -->
    <PortfolioHeader />

    <!-- Main -->
    <main class="container max-w-4xl mx-auto px-6 py-12">
      <!-- 홈 섹션 -->
      <PortfolioHome />

      <!-- 소개 섹션 -->
      <section id="about" class="mb-16">
        <h2 class="text-3xl font-bold mb-6">소개</h2>
        <div>
          <article>
            <h3 class="text-xl font-semibold mb-4">교육 및 활동</h3>
            <ul class="text-gray-800 leading-relaxed">
              <li>👉 2023 프론트엔드 개발자 인턴십 (ABC Tech)</li>
              <li>👉 2022 웹 개발 부트캠프 수료 (XYZ Coding School)</li>
              <li>👉 2021 오픈소스 프로젝트 참여 (오픈소스 커뮤니티)</li>
              <li>👉 2020 대학 동아리 웹 개발 팀장 활동</li>
            </ul>
          </article>
          <article></article>
        </div>
      </section>
      <!-- 스킬 섹션 -->
      <!-- <section class="bg-blue-300 h-60">
        <h2 class="text-3xl font-bold mb-6">기술</h2>
      </section> -->
      <!-- 프로젝트 섹션 -->
      <!-- <section class="bg-cyan-200 h-60">
        <h2 class="text-3xl font-bold mb-6">프로젝트</h2>
      </section> -->
      <!-- 연락처 섹션 -->
      <!-- <section class="bg-green-300 h-60">
        <h2 class="text-3xl font-bold mb-6">연락처</h2>
      </section> -->
    </main>

    <!-- Footer -->
    <!-- <footer class="bg-gray-400 w-full h-20"></footer> -->
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
