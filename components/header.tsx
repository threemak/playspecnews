import Link from "next/link"
import { NavItem } from "@/types"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "./ui/button"
import { MainNav } from "./main-nav"
import { LayoutDashboard } from "lucide-react"

export function Header({ navList }: { navList: NavItem[] }) {
  return (
    <header className='bg-background sticky top-0 z-20 w-full'>
      <div className='container flex flex-1 justify-between items-center py-3 max-sm:px-2'>
        <MainNav items={navList} />
        <div className='flex'>
          <Link href='/' className='hidden md:flex items-center space-x-2'>
            <LayoutDashboard />
            <span className='inline-block font-bold'>{siteConfig.name}</span>
          </Link>
        </div>
        <nav className='flex items-center space-x-1 md:space-x-3'>
          <Link target='_blank' rel='noreferrer' href={siteConfig.links.github} className={buttonVariants({ size: "sm" })}>
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  )
}
