"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const NAV_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#sell", label: "Sell Now" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact Us" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;
      const sections = ["home", "about", "sell", "blog", "contact"];
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const navHeight = document.getElementById("navbar")?.offsetHeight || 0;
      const targetPos = (target as HTMLElement).offsetTop - navHeight;
      window.scrollTo({ top: targetPos, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav id="navbar">
      <div className="nav-top">
        <a href="tel:8390519191">📞 839-0519-191</a>
        <a href="mailto:wheeldealbikespvtltd@gmail.com">✉️ wheeldealbikespvtltd@gmail.com</a>
      </div>
      <div className="nav-main">
        <a className="logo" href="#home" onClick={(e) => handleNavClick(e, "#home")}>
          <Image src="/logo-91bikes.jpg" alt="+91Bikes Logo" width={60} height={60} style={{ objectFit: "contain", height: 52, width: 52, borderRadius: 8 }} />

        </a>
        <ul className="nav-links" id="navLinks">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={activeSection === item.href.slice(1) ? "active" : ""}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="tel:8390519191"
          className="nav-cta"
          style={{ display: "inline-flex", alignItems: "center" }}
        >
          Call Now
        </a>
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
