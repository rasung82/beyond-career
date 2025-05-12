<template>
  <div class="flex h-screen items-center justify-center bg-slate-200">
    <div class="flex flex-col items-center">
      <div class="mb-6 text-6xl">Login</div>
      <p class="text-base">Hello :)</p>
      <LoginForm @success="handleLoginSuccess" />
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * 정상 로그인 시
 */
const handleLoginSuccess = () => {
  console.log('woors) handleLoginSuccess...');
  const { isAuthenticate, isAdmin } = useAuthUser();

  if (isAuthenticate.value) {
    navigateTo(isAdmin.value ? '/admin' : '/portfolio');
  } else {
    navigateTo('/login');
  }
};

console.log('woors) Pages.login...');
</script>
