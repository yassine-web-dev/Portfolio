import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'

// Components
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'This is my portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html className='scroll-smooth' lang="en" suppressHydrationWarning>
        <head />
        <body id='bdy' className={`${rubik.className} relative bg-gradient-to-r from-white to-gray-50 dark:bg-none dark:bg-black`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
