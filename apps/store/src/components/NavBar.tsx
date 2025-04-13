import { Button } from '@repo/ui/components/base/button';
import { Command, Menu } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export function NavBar({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="bg-background border">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1.5">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Command className="h-8" />
            <span className="self-center text-lg font-semibold whitespace-nowrap">ACME</span>
          </Link>
          <Button className="md:hidden">
            <span className="sr-only">Open main menu</span>
            <Menu />
          </Button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-row bg-background space-x-8 text-sm">
              <li>
                <Link className="hover:underline" href={process.env.NEXT_PUBLIC_SELLER_HUB_URL!}>
                  Seller&apos;s Hub
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>{children}</main>
    </>
  );
}
