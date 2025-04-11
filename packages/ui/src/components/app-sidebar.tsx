'use client';

import {
  BookOpenText,
  Command,
  FileBox,
  Gift,
  HandCoins,
  LayoutDashboard,
  Settings,
  Users,
} from 'lucide-react';
import * as React from 'react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '../components/base/sidebar';
import { NavMain } from '../components/nav-main';
import { NavSecondary } from '../components/nav-secondary';
import { NavUser } from '../components/nav-user';

const data = {
  user: {
    name: 'admin',
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
          url: 'admin/dashboard',
        },
        {
          title: 'New Product',
          url: '#',
        },
        {
          title: 'New Coupon',
          url: '#',
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

export function AppSidebar(
  {
    // data,
    ...props
  }: React.ComponentProps<typeof Sidebar>
  //  & {
  //   data: string;
  // }
) {
  // const navData = JSON.parse(data);

  return (
    <Sidebar className="top-(--header-height) h-[calc(100svh-var(--header-height))]!" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
