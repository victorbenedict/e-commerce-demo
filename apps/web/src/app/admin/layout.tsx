import { SidebarInset, SidebarProvider } from '@repo/ui/components/base/sidebar';
import { SiteHeader } from '@repo/ui/components/site-header';
import { AdminSidebar } from './AdminSidebar';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="[--header-height:calc(theme(spacing.14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <AdminSidebar />
          <SidebarInset>{children}</SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
