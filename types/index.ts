export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  mainNav: NavItem[];
  links: {
    docs: string;
    twitter: string;
    github: string;
  };
};

export type StockBar = {
  company: string;
  high: string;
  down: string;
};
