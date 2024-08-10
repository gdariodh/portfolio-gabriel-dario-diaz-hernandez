import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Container, ThemeProvider } from '@/components';

const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Gabriel Dario Diaz Hernandez',
  description:
    'Personal website of Gabriel Dario Diaz Hernandez | Software Developer | Frontend | React.js | Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative">
            <Header />
            <Container className="py-8 lg:py-12">
              <main className="grid grid-cols-1 min-h-screen">{children}</main>
            </Container>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
