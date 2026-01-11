import type { Metadata } from 'next'
import { Manrope, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import './globals.css'

const manrope = Manrope({
  subsets: ["latin"],
  variable: '--font-manrope',
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Kluzel Art | Ghanaian Mixed Media & Murals',
  description: 'Kluzel Art - Transforming spaces with pencil, paint, and creativity.',
  icons: {
    icon: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${manrope.variable} ${geistMono.variable} font-sans antialiased min-h-screen bg-[#050505] text-[#e5e5e5] selection:bg-amber-900/50 selection:text-white`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
