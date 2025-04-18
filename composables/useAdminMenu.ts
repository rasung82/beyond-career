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
