<template>
  <div class="menu-parent" :class="{ open: flag }">
    <li
      :class="[
        'menu-common w-full',
        hasChild ? 'nav-sub-menu' : 'nav-sup-menu',
      ]"
      @click="() => (flag = !flag)"
    >
      <font-awesome-icon
        v-if="props.menu?.iconClass"
        :icon="menuIcon"
        class="w-8 mr-1"
      />
      <span>{{ props.menu?.adminMenuNm }}</span>
      <font-awesome-icon
        v-if="subMenus?.length"
        icon="fa-solid fa-angle-down"
        class="ml-auto shrink-0 text-right"
      />
    </li>
    <ul v-if="subMenus?.length" class="menu-child">
      <NavMenuItem
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

const flag = ref(false);

const { adminMenus: subMenus } = useAdminSubMenus(props.menu);

const menuIcon = computed(() => `fa-solid ${props?.menu?.iconClass}`);
</script>

<style scoped>
.menu-child {
  display: none;
}
.menu-parent.open > .menu-child {
  display: block;
}
.menu-parent .menu-child {
  margin-left: calc(1.5rem * var(--depth, 1));
}

.menu-common {
  @apply hover:bg-gray-700 rounded-xl transition-colors duration-200 flex items-center;
}
.nav-sup-menu {
  @apply px-4 py-2.5 mb-2;
}
.nav-sub-menu {
  @apply px-4 py-2.5;
}
</style>
