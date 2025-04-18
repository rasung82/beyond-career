<template>
  <aside class="bg-gray-800 w-64 text-white px-2 py-7 space-y-6">
    <div class="px-4 mb-6">
      <h3 class="text-2xl font-semibold">대시보드</h3>
    </div>
    <nav>
      <ul class="menu-1st flex flex-col" :class="{ open: has2ndMenu }">
        <li
          v-for="menu in getMainMenu"
          :key="menu.adminMenuId"
          class="aside-nav-1st-menu"
        >
          <font-awesome-icon
            :icon="getMenuIcon(menu)"
            class="w-8 mr-1 space-x-0"
          />
          <span>{{ menu?.adminMenuNm }}</span>
          <font-awesome-icon
            v-if="hasSubMenus(menu)"
            icon="fa-solid fa-angle-down"
            class="ml-auto text-right"
          />
        </li>
        <!-- 
        <ul class="menu-2nd ml-8 -mt-2">
          <li class="aside-nav-2nd-menu">
            <span>LNB 메뉴 관리</span>
          </li>
          <li class="aside-nav-2nd-menu">
            <span>홈 화면 관리</span>
          </li>
          <li class="aside-nav-2nd-menu">
            <span>홈 배너 관리</span>
          </li>
        </ul>
        <li class="aside-nav-1st-menu">
          <font-awesome-icon
            icon="fa-solid fa-newspaper"
            class="w-8 mr-1"
          />배너 관리
        </li> 
        <li class="aside-nav-1st-menu">
            <font-awesome-icon
              icon="fa-solid fa-cart-shopping"
              class="w-8 mr-1"
            />매장 관리
          </li>
          <li class="aside-nav-1st-menu">
            <font-awesome-icon
              icon="fa-solid fa-pen-to-square"
              class="w-8 mr-1"
            />게시판 관리
          </li>
          <li class="aside-nav-1st-menu">
            <font-awesome-icon
              icon="fa-solid fa-sitemap"
              class="w-8 mr-1"
            />플랫폼 관리
          </li>
          <li class="aside-nav-1st-menu">
            <font-awesome-icon
              icon="fa-solid fa-screwdriver-wrench"
              class="w-8 mr-1"
            />관리자 관리
          </li>
          <li class="aside-nav-1st-menu">
            <font-awesome-icon
              icon="fa-solid fa-comment"
              class="w-8 mr-1 space-x-0"
            />챗핑 관리
          </li> -->
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import type { AdminMenu } from '~/types/adminMenu';

const props = defineProps<{
  menus?: AdminMenu[];
}>();

const getMainMenu = computed(() => {
  return props.menus?.filter((menu: AdminMenu) => menu?.adminMenuIdUpper === 0);
});

const has2ndMenu = ref<boolean>(false);

const getMenuIcon = (menu: AdminMenu) => {
  return `fa-solid ${menu?.iconClass}`;
};

const hasSubMenus = (menu: AdminMenu) => {
  const filter = props.menus?.filter(
    (item: AdminMenu) => item?.adminMenuIdUpper === menu?.adminMenuId,
  );
  return filter;
};

const handleMenu = () => (has2ndMenu.value = !has2ndMenu.value);

console.log('woors) Components.AdminMenus...', props.menus);
</script>

<style scoped>
.menu-2nd {
  display: none;
}
.menu-1st.open > .menu-2nd {
  display: block;
}
.aside-nav-1st-menu {
  @apply mb-2 px-4 py-2.5 hover:bg-gray-700 rounded-xl transition-colors duration-200 flex items-center;
}
.aside-nav-2nd-menu {
  @apply px-8 py-2.5 hover:bg-gray-700 rounded-xl transition-colors duration-200 flex items-center;
}
</style>
