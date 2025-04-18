import {
  BookOpenText,
  FileBox,
  Gift,
  HandCoins,
  LayoutDashboard,
  Settings,
  Users,
} from 'lucide-react';

const data = {
  user: {
    name: 'seller',
    email: 'm@example.com',
    avatar: 'https://github.com/shadcn.png',
  },
  navMain: [
    {
      title: 'Quick Links',
      icon: LayoutDashboard,
      items: [
        {
          title: 'Dashboard',
          url: '/dashboard',
        },
        {
          title: 'New Product',
          url: '/dashboard/products/create',
        },
        {
          title: 'New Coupon',
          url: '/dashboard/coupons/create',
        },
      ],
    },
    {
      title: 'Catalog',
      icon: BookOpenText,
      items: [
        {
          title: 'Products',
          url: '#',
        },
        {
          title: 'Categories',
          url: '#',
        },
        {
          title: 'Collections',
          url: '#',
        },
        {
          title: 'Attributes',
          url: '#',
        },
      ],
    },
    {
      title: 'Sale',
      icon: HandCoins,
      items: [
        {
          title: 'Orders',
          url: '#',
        },
      ],
    },

    {
      title: 'Customer',
      icon: Users,
      items: [
        {
          title: 'Customers',
          url: '#',
        },
      ],
    },
    {
      title: 'Promotion',
      url: '#',
      icon: Gift,
      items: [
        {
          title: 'Coupons',
          url: '#',
        },
      ],
    },
    {
      title: 'CMS',
      url: '#',
      icon: FileBox,
      items: [
        {
          title: 'Pages',
          url: '#',
        },
        {
          title: 'Widgets',
          url: '#',
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: 'Settings',
      url: '#',
      icon: Settings,
    },
  ],
};

export default data;
