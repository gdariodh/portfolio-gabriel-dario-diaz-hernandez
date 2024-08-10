import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header, Container, ThemeProvider, Sidebar } from '@/components';
import { getPortfolioData } from '@/services';
import { portfolioAdapter } from '@/adapters';

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
  const data = await getPortfolioData();
  const portfolio = portfolioAdapter(data.data);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Container className="relative grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-6 pb-12">
            <div className="py-4">
              <Sidebar portfolio={portfolio} />
            </div>

            <div className="grid grid-cols-1 relative">
              <Header />
              <main className="grid grid-cols-1 px-8 pt-6 pb-12 border-b-2 border-slate-900/10 dark:border-slate-50/[0.1] bg-white/40 dark:bg-white/5 rounded-bl-lg rounded-br-lg">
                {children}
              </main>
            </div>
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
