import Link from "next/link";
import { NavItem } from "@/types";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";
import { MainNav } from "./main-nav";
import Icon from "./icon";

export function Header({ navList }: { navList: NavItem[] }) {
  return (
    <header className="bg-background sticky top-0 z-20 w-full">
      <div className="container flex flex-1 justify-between items-center py-3 max-sm:px-4">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex">
          <Link href="/" className="hidden md:flex items-center space-x-2">
            <Icon name="layout-dashboard" />
            <span className="inline-block font-bold">{siteConfig.name}</span>
          </Link>
        </div>
        <nav className="flex items-center space-x-1 md:space-x-3">
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({ size: "sm" })}
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
