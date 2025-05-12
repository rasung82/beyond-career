<template>
  <form class="mt-2 space-y-3" @submit.prevent="handleLogin">
    <div>
      <input
        id="email"
        v-model="form.email"
        type="email"
        placeholder="이메일"
        class="input rounded-t-lg"
      />
    </div>
    <div>
      <input
        id="password"
        v-model="form.password"
        type="password"
        placeholder="패스워드"
        class="input rounded-b-lg"
      />
    </div>
    <div v-if="error" class="text-center text-red-500">{{ error.message }}</div>
    <div>
      <button type="submit" class="button">Login</button>
    </div>
  </form>
</template>

<script setup lang="ts">
const emit = defineEmits(['success']);

const { signIn } = useAuth();

const form = ref({ email: '', password: '' });

const error = ref<Error | null>(null);

const loading = ref(false);

/**
 * 로그인 처리
 */
const handleLogin = () => {
  console.log('woors) handleLogin...');
  loading.value = true;
  error.value = null;

  try {
    signIn(form.value.email, form.value.password);
    emit('success');
  } catch (err: unknown) {
    if (err instanceof Error) {
      error.value = err;
    }
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.input {
  @apply h-14 w-96 border-b-2 bg-gray-50 p-4 text-gray-500 outline-none transition-colors duration-500 hover:bg-gray-100 focus:border-blue-300;
}
.button {
  @apply h-14 w-96 rounded-lg bg-blue-500 text-xl font-bold text-white shadow-md transition-colors duration-500 hover:bg-blue-400;
}
</style>
