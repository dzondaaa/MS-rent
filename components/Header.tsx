"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  ["/", "Domů"],
  ["/stroje", "Stroje"],
  ["/o-nas", "O nás"],
  ["/faq", "FAQ"],
  ["/kontakt", "Kontakt"],
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo" aria-label="MS-rent – domů">
          <Image
            src="/assets/ms-profitech-light.png"
            alt=""
            width={608}
            height={410}
            priority
            className="brand-logo brand-logo-light"
          />
          <Image
            src="/assets/ms-profitech-dark.png"
            alt=""
            width={608}
            height={410}
            priority
            className="brand-logo brand-logo-dark"
          />
        </Link>

        <nav className={open ? "nav open" : "nav"} aria-label="Hlavní navigace">
          {links.map(([href, label]) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link key={href} href={href} className={active ? "active" : ""}>
                {label}
              </Link>
            );
          })}
          <Link href="/kontakt" className="nav-button">
            Poptat stroj <span aria-hidden="true">→</span>
          </Link>
        </nav>

        <div className="header-tools">
          <ThemeToggle />
          <button
            className={open ? "menu-button open" : "menu-button"}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? "Zavřít menu" : "Otevřít menu"}
          >
            <span className="menu-line" />
            <span className="menu-line" />
          </button>
        </div>
      </div>
    </header>
  );
}
