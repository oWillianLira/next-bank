import type { Metadata } from 'next';
import '../globals.css';
import Header from '@logged/header';

export const metadata: Metadata = {
  title: 'NEXT bank',
  description: 'Your NEXT bank is the best!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
