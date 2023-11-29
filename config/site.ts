import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "PlaySpecNews",
  description:
    "An open source application built using the new router, server components and everything new in Next.js 13.",
  url: "https://tx.shadcn.com",
  ogImage: "https://tx.shadcn.com/og.jpg",
  mainNav: [
    {
      title: "Sports",
      href: "/#sports",
    },
    {
      title: "News",
      href: "/news",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Games",
      href: "/games",
    },
  ],
  links: {
    docs: "https://github.com/shadcn/docmentation",
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/taxonomy",
  },
};
