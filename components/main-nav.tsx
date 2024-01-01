"use client"
import * as React from "react"
import { Dispatch, SetStateAction } from "react"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"
import { useLockBodyScroll } from "react-use"
import { cn } from "@/lib/utils"
import { NavItem } from "@/types"
import { Button } from "./ui/button"
import { siteConfig } from "@/config/site"
import { LayoutDashboard, X } from "lucide-react"

interface MainNavProps {
  items: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const segment = useSelectedLayoutSegment()
  const [showMenu, setShowMenu] = React.useState<boolean>(false)
  return (
    <div className='flex'>
      <nav className='hidden md:flex gap-4 md:gap-6'>
        {items.map((item, i) => (
          <Link
            key={i}
            href={item.disabled ? "#" : item.href}
            className={cn(
              "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
              item.href.startsWith(`/${segment}`) ? "text-foreground/60" : "text-foreground",
              item.disabled && "cursor-not-allowed opacity-80"
            )}
          >
            {item.title}
          </Link>
        ))}
      </nav>

      <Button size='sm' className='flex md:hidden' onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? <X className='w-4 h-4 mr-2' /> : <LayoutDashboard className='w-4 h-4 mr-2' />}
        <span className='font-bold'>Menu</span>
      </Button>
      <MobileNav items={siteConfig.mainNav} showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  )
}

function MobileNav({ items, showMenu, setShowMenu }: { items: NavItem[]; showMenu: boolean; setShowMenu: Dispatch<SetStateAction<boolean>> }) {
  useLockBodyScroll(showMenu)
  const segment = useSelectedLayoutSegment()
  return (
    <React.Fragment>
      {showMenu && (
        <div className='fixed inset-0 top-14 px-2 shadow-md animate-in slide-in-from-bottom-8 md:hidden' onClick={() => setShowMenu((prev) => !prev)}>
          <div className='w-full bg-popover border-2 rounded-xl p-5 space-y-4 '>
            <div className='flex items-center'>
              <Link href='/' className='flex items-center space-x-2'>
                <LayoutDashboard className='h-5 w-5' />
                <span className='inline-block font-bold text-base'>{siteConfig.name}</span>
              </Link>
            </div>
            <div className='flex flex-col gap-1 divide-y-2'>
              {items.map((item, i) => (
                <Link
                  key={i}
                  href={item.disabled ? "#" : item.href}
                  className={cn(
                    "py-2 text-sm font-medium text-destructive-foreground transition-colors hover:text-foreground/80",
                    item.href.startsWith(`/${segment}`) ? "text-foreground" : "text-foreground/60",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}
