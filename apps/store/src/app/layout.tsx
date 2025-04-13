import { NavBar } from '@/components/NavBar';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Store | e-commerce-demo',
  description: 'Made by Victor Benedict',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar>{children}</NavBar>
      </body>
    </html>
  );
}
