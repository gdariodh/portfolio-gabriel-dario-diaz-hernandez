import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { getPortfolioData } from '@/services';
import { Header, Container, ThemeProvider, MenuNav } from '@/components';
import { cn } from '@/utils';

const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Gabriel Dario Diaz Hernandez',
  description:
    'Personal website of Gabriel Dario Diaz Hernandez | Software Developer | Frontend | React.js | Next.js',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const portfolio = await getPortfolioData();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Container className="min-h-screen grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-6 lg:gap-8">
            <Header portfolio={portfolio} />
            <div className="flex flex-col relative">
              <MenuNav />
              <main
                className={cn(
                  'grid grid-cols-1 bg-slate-900/[0.08] lg:bg-slate-900/[0.04] dark:bg-white/5 ',
                  'border-2 border-t-0 border-slate-900/[0.1]',
                  'dark:border-b-2 dark:border-slate-50/[0.1] dark:border-l-0 dark:border-r-0',
                  'rounded-bl-lg rounded-br-lg',
                  'px-4 lg:px-8 pt-6 pb-8 mb-12',
                )}
              >
                {children}
              </main>
            </div>
          </Container>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
