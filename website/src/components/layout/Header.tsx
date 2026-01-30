"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navigation, type NavItem } from "@/lib/design-system";

// ============================================
// Icons
// ============================================

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

// ============================================
// Logo Component
// ============================================

function Logo() {
  return (
    <Link href="/" className="flex flex-col group">
      <span className="font-serif text-2xl font-bold italic text-loam group-hover:text-gold transition-colors leading-tight">
        Pferdesicht.com
      </span>
      <span className="text-xs uppercase tracking-wider text-sage">
        Vertraue deiner Perspektive
      </span>
    </Link>
  );
}

// ============================================
// Desktop Navigation Item
// ============================================

function DesktopNavItem({ item }: { item: NavItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {hasChildren ? (
        <button
          className={cn(
            "flex items-center gap-1 px-3 py-2 text-sm font-medium text-loam",
            "hover:text-gold transition-colors",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-md"
          )}
          aria-expanded={isOpen}
        >
          {item.label}
          <ChevronDownIcon
            className={cn(
              "w-4 h-4 transition-transform duration-200",
              isOpen && "rotate-180"
            )}
          />
        </button>
      ) : (
        <Link
          href={item.href}
          className={cn(
            "block px-3 py-2 text-sm font-medium text-loam",
            "hover:text-gold transition-colors",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-md"
          )}
        >
          {item.label}
        </Link>
      )}

      {/* Dropdown Menu */}
      {hasChildren && (
        <div
          className={cn(
            "absolute top-full left-0 pt-2 z-50",
            "transition-all duration-200",
            isOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
          )}
        >
          <div className="bg-white rounded-sm shadow-lg border border-gold/20 p-2 min-w-[240px]">
            {item.children!.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className={cn(
                  "block px-4 py-3 rounded-sm",
                  "hover:bg-sage/10 transition-colors",
                  "focus:outline-none focus-visible:bg-sage/10"
                )}
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-loam">
                    {child.label}
                  </span>
                  {child.badge && (
                    <span className="px-2 py-0.5 text-xs font-medium bg-gold/20 text-gold rounded-full">
                      {child.badge}
                    </span>
                  )}
                </div>
                {child.description && (
                  <p className="mt-1 text-xs text-loam/60">
                    {child.description}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================
// Mobile Navigation
// ============================================

function MobileNav({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-loam/50 z-[9998] lg:hidden",
          "transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 w-full max-w-sm z-[9999] lg:hidden",
          "bg-paper",
          "transform transition-transform duration-300 ease-out",
          "shadow-2xl",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gold/20">
          <span className="font-serif text-xl font-medium text-loam">
            Menü
          </span>
          <button
            onClick={onClose}
            className={cn(
              "p-2 -mr-2 text-loam hover:text-gold",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-md"
            )}
            aria-label="Menü schließen"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>

        <nav className="px-4 py-6 overflow-y-auto max-h-[calc(100vh-80px)]">
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() => toggleExpanded(item.label)}
                      className={cn(
                        "w-full flex items-center justify-between px-4 py-3 rounded-sm",
                        "text-left font-medium text-loam",
                        "hover:bg-sage/10 transition-colors",
                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                      )}
                    >
                      {item.label}
                      <ChevronDownIcon
                        className={cn(
                          "w-5 h-5 text-loam/40 transition-transform duration-200",
                          expandedItems.includes(item.label) && "rotate-180"
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-200",
                        expandedItems.includes(item.label)
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      )}
                    >
                      <ul className="pl-4 py-2 space-y-1">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={onClose}
                              className={cn(
                                "block px-4 py-2.5 rounded-sm",
                                "text-sm text-loam/70 hover:text-loam",
                                "hover:bg-sage/10 transition-colors"
                              )}
                            >
                              <div className="flex items-center gap-2">
                                {child.label}
                                {child.badge && (
                                  <span className="px-2 py-0.5 text-xs font-medium bg-gold/20 text-gold rounded-full">
                                    {child.badge}
                                  </span>
                                )}
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "block px-4 py-3 rounded-sm",
                      "font-medium text-loam",
                      "hover:bg-sage/10 transition-colors"
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-8 px-4">
            <Link
              href="/guides/fruehling"
              onClick={onClose}
              className="block w-full px-6 py-3 bg-gold hover:bg-gold/90 text-white text-center font-medium rounded-sm transition-colors"
            >
              Frühlings-Guide entdecken
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

// ============================================
// Main Header Component
// ============================================

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full",
        "bg-bg-light/95 backdrop-blur-sm border-b border-gold/20",
        "transition-all duration-300",
        isScrolled && "shadow-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Logo />

          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <DesktopNavItem key={item.label} item={item} />
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/guides/fruehling"
              className="px-4 py-2 bg-gold hover:bg-gold/90 text-white text-sm font-medium tracking-wide rounded-sm transition-colors border border-gold/50"
            >
              Frühlings-Guide
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(true)}
            className={cn(
              "lg:hidden p-2 -mr-2 text-loam hover:text-gold",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-md"
            )}
            aria-label="Menü öffnen"
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}

export default Header;
