import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Header } from "@/components/header"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Footer } from "@/components/footer"
import { TailwindIndicator } from "@/components/tailwind-indicator"

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] })

export const metadata: Metadata = {
  title: "PlaySpecNews",
  description: "Welcome to PlaySpecNews: Where Information Meets Playfulness",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <div className='relative flex min-h-screen flex-col'>
          <Header navList={siteConfig.mainNav} />
          <main className='flex-1'>{children}</main>
          <Footer />
          <TailwindIndicator />
        </div>
      </body>
    </html>
  )
}
