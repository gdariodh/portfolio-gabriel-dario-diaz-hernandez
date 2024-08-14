import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header, Container, ThemeProvider, Sidebar } from '@/components';
import { getPortfolioData } from '@/services';

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
          <Container className="min-h-screen relative grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-6 lg:gap-8 pb-12">
            <div className="py-4">
              <Sidebar portfolio={portfolio} />
            </div>

            <div className="flex flex-col relative ">
              <Header />
              <main className="grid grid-cols-1 px-4 lg:px-8 pt-6 pb-8 border-b-2 border-slate-900/10 dark:border-slate-50/[0.1] bg-slate-50/[0.4] dark:bg-white/5 rounded-bl-lg rounded-br-lg">
                {children}
              </main>
            </div>
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
