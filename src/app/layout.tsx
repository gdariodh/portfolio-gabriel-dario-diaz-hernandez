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
          <Container className="relative grid grid-cols-1 min-h-screen lg:grid-cols-[400px_1fr] gap-6 pb-12">
            <div className="py-4 h-screen sticky top-0">
              <Sidebar portfolio={portfolio} />
            </div>

            <div className="flex flex-col relative ">
              <Header />
              <main className="grid grid-cols-1 px-8 pt-6  pb-12 border-b-2 border-slate-900/10 dark:border-slate-50/[0.1] bg-white/20 dark:bg-white/5 rounded-bl-lg rounded-br-lg">
                {children}
              </main>
            </div>
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
