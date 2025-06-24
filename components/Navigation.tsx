"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav className="nav" aria-label="Main navigation">
      <div className="nav-links">
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={
              "nav-link" + (pathname === link.href || (link.href === "/" && pathname === "") ? " active" : "")
            }
            aria-current={pathname === link.href ? "page" : undefined}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
