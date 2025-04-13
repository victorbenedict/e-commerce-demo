import { SidebarInset, SidebarProvider } from '@repo/ui/components/base/sidebar';
import { SellerSidebar } from '@/components/SellerSidebar';
import { SiteHeader } from '@/components/SiteHeader';

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
          <SellerSidebar />
          <SidebarInset className="max-w-5xl w-full h-full mx-auto pt-6 space-y-4 px-6">
            {children}
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
