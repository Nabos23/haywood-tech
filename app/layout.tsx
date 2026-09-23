import React from "react"
import type { Metadata } from 'next'
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const instrumentSans = Instrument_Sans({ 
  subsets: ["latin"],
  variable: '--font-instrument'
});

const instrumentSerif = Instrument_Serif({ 
  subsets: ["latin"],
  weight: "400",
  variable: '--font-instrument-serif'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.haywood-tech.com'),
  title: 'Haywood Technologies - Build, Modernize, Scale',
  description:
    'Haywood Technologies is an IT consultancy helping businesses build, modernize, and scale their technology through software development, AI engineering, cloud & DevOps, and managed IT services.',
  openGraph: {
    title: 'Haywood Technologies - Build, Modernize, Scale',
    description:
      'Software development, AI engineering, cloud & DevOps, and managed IT services for growing businesses.',
    url: 'https://www.haywood-tech.com',
    siteName: 'Haywood Technologies',
  },
}

export const viewport = {
  themeColor: '#2d3192',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
