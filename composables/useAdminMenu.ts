import adminMenuData from '~/assets/data/adminMenuData';
import type { AdminMenu } from '~/types/adminMenu';

interface AdminMenuReturn {
  adminMenus: AdminMenu[];
}

export const useAdminMenus = (): AdminMenuReturn => {
  const adminMenus = adminMenuData;

  return {
    adminMenus,
  };
};

export const useAdminSupMenus = (): AdminMenuReturn => {
  const adminMenus = adminMenuData?.filter(
    (menu: AdminMenu) => menu?.adminMenuIdUpper === 0,
  );

  return {
    adminMenus,
  };
};

export const useAdminSubMenus = (menu: AdminMenu): AdminMenuReturn => {
  const adminMenus = adminMenuData?.filter(
    (item: AdminMenu) => item?.adminMenuIdUpper === menu?.adminMenuId,
  );

  return {
    adminMenus,
  };
};
