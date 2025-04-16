<template>
  <section id="contact" class="mb-16">
    <h2 class="text-3xl font-bold mb-6">연락처</h2>
    <div class="grid grid-cols-2 gap-8">
      <form id="contactform" class="space-y-4">
        <div>
          <label for="name" class="block mb-1 font-medium">이름</label>
          <input
            id="name"
            type="text"
            name="name"
            class="portfolio-contact-input"
          />
        </div>
        <div>
          <label for="email" class="block mb-1 font-medium">이메일</label>
          <input
            id="email"
            type="email"
            name="email"
            class="portfolio-contact-input"
          />
        </div>
        <div>
          <label for="message" class="block mb-1 font-medium">메세지</label>
          <textarea
            id="message"
            type="text"
            name="message"
            class="portfolio-contact-input"
          />
        </div>
        <button type="submit" class="portfolio-contact-btn">
          이메일 보내기
        </button>
      </form>
      <div class="flex flex-col space-y-4 items-center justify-center">
        <a href="#" target="_blank" class="portfolio-contact-a">
          <font-awesome-icon icon="fa-brands fa-github" />
          <span>GitHub</span>
        </a>
        <a href="#" target="_blank" class="portfolio-contact-a">
          <font-awesome-icon icon="fa-brands fa-youtube" />
          <span>Youtube</span>
        </a>
        <a href="#" target="_blank" class="portfolio-contact-a">
          <font-awesome-icon icon="fa-brands fa-instagram" />
          <span>Instagram</span>
        </a>
        <a href="#" target="_blank" class="portfolio-contact-a">
          <font-awesome-icon icon="fa-regular fa-envelope" />
          <span>rasung.woo@sk.com</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
