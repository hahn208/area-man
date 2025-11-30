import './globals.css';
import type { Metadata } from 'next';
import { Josefin_Sans } from 'next/font/google';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import { ReactNode } from 'react';
import { clsx } from 'clsx';
import { Analytics } from "@vercel/analytics/react";

const layoutFont = Josefin_Sans({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Area Man',
  description: 'When is your birthday because chances are area-man did something stupendous that day.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
      <html lang="en">
        <body className={clsx(layoutFont.className, 'min-h-screen flex flex-col items-center justify-between p-4')}>
            <Header></Header>
            { children }
            <Footer></Footer>
            <Analytics></Analytics>
        </body>
      </html>
  );
}