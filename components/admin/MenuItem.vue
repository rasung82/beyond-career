<template>
  <div class="menu-parent" :class="{ open: flag }">
    <li
      :class="[
        'menu-common w-full',
        hasChild ? 'nav-sub-menu' : 'nav-sup-menu',
      ]"
      @click="handleClick"
    >
      <font-awesome-icon
        v-if="props.menu?.iconClass"
        :icon="menuIcon"
        class="mr-1 w-8"
      />
      <span>{{ props.menu?.adminMenuNm }}</span>
      <font-awesome-icon
        v-if="subMenus?.length"
        icon="fa-solid fa-angle-down"
        class="ml-auto shrink-0 text-right"
      />
    </li>
    <ul v-if="subMenus?.length" class="menu-child">
      <AdminMenuItem
        v-for="item in subMenus"
        :key="item?.adminMenuId"
        :menu="item"
        :depth="depth + 1"
        :is-child="true"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { AdminMenu } from '~/types/adminMenu';

const props = defineProps<{
  menu: AdminMenu;
  depth: number;
  hasChild?: boolean;
}>();
const router = useRouter();

const flag = ref(false);

const { adminMenus: subMenus } = useAdminSubMenus(props.menu);

const menuIcon = computed(() => `fa-solid ${props?.menu?.iconClass}`);

const handleClick = () => {
  console.log('woors) handleClick...', subMenus, props.menu?.url);

  if (props.menu?.url !== '') {
    router.push(`/admin${props.menu?.url}`);
  } else {
    flag.value = !flag.value;
  }
};
</script>

<style scoped>
.menu-parent.open > .menu-child {
  display: block;
}
.menu-parent .menu-child {
  margin-left: calc(1.5rem * var(--depth, 1));
}
.menu-child {
  display: none;
}

.menu-common {
  @apply flex items-center rounded-xl transition-colors duration-200 hover:bg-gray-700;
}
.nav-sup-menu {
  @apply mb-2 px-4 py-2.5;
}
.nav-sub-menu {
  @apply px-4 py-2.5;
}
</style>
