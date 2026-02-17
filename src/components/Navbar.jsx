import { useEffect, useState } from "react";
import ContactButton from "./ContactButton";
import logo from "../assets/img/logo/aileen-logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuText = scrolled ? "text-slate-700" : "text-slate-200";
  const menuHover = scrolled ? "hover:text-teal-700" : "hover:text-teal-400";

  const textColor = scrolled ? "text-slate-900" : "text-white";
  const navBg = scrolled
    ? "bg-white/95 backdrop-blur shadow-sm"
    : "bg-transparent";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className={`${navBg} transition-all duration-300`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <img
              src={scrolled ? logo : logo}
              alt="AILEEN logo"
              className="h-11 w-auto"
            />
            <span className={`engFonts text-medium font-medium ${textColor}`}>
              AILEEN
            </span>
          </a>

          {/* Desktop menu */}
          <ul className="hidden items-center gap-8 md:flex text-sm  tracking-wide transition-colors">
  <li>
    <a className={` ${menuText} ${menuHover}`} href="#home">
      หน้าแรก
    </a>
  </li>
  <li>
    <a className={`${menuText} ${menuHover}`} href="#about">
      เกี่ยวกับเรา
    </a>
  </li>
  <li>
    <a className={` ${menuText} ${menuHover}`} href="#services">
      บริการของเรา
    </a>
  </li>
  <li>
    <a className={` ${menuText} ${menuHover}`} href="#customers">
    ลูกค้าของเรา
    </a>
  </li>
  <li>
    <a className={` ${menuText} ${menuHover}`} href="#strengths">
        จุดแข็งของเรา
    </a>
  </li>
</ul>


          {/* Right */}
          <div className="hidden md:block">
            <ContactButton href="#contact" />
          </div>

          {/* Mobile button */}
          <button
            className={`md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border ${
              scrolled ? "border-slate-200" : "border-white/30"
            }`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className={`${textColor} text-xl leading-none`}>☰</span>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-4 space-y-3">
              <a className="block font-semibold text-slate-900" href="#home">
                HOME
              </a>
              <a className="block font-semibold text-slate-900" href="#about">
                ABOUT US
              </a>
              <a
                className="block font-semibold text-slate-900"
                href="#services"
              >
                SERVICES
              </a>
              <a
                className="block font-semibold text-slate-900"
                href="#customers"
              >
                CUSTOMERS
              </a>
              <a
                className="block font-semibold text-slate-900"
                href="#strengths"
              >
                OUR STRENGTHS
              </a>

              <div className="pt-2">
                <ContactButton
                  href="#contact"
                  className="w-full justify-center"
                />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
