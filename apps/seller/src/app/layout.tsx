import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Seller Hub | e-commerce-demo',
  description: 'Made by Victor Benedict',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
