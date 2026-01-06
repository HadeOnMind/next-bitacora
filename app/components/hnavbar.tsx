'use client';

import { useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function HorzNavbar() {
  const navItems = [
    { label: 'About', href: '/info/about' },
    { label: 'Services', href: '/info/services' },
    { label: 'Contact', href: '/info/contact' },
    { label: 'Reach', href: '/info/reach' },
    { label: 'dev', href: '/workspace/dev' },
  ];

  const pathname = usePathname() || '';
  const inSketchbook = pathname.includes('/sketchbook');

  const visibleItems = useMemo(
    () => navItems.filter(item => !(inSketchbook && item.label === 'dev')),
    [inSketchbook]
  );

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/');

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href={"/"}><div className="text-xl font-bold text-blue-600">My Bitacora</div></Link>
          <div className="hidden md:flex space-x-6">
            {visibleItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={twMerge(
                  "text-gray-700 hover:text-blue-600 transition",
                  isActive(item.href) &&
                    "text-blue-700 italic tracking-wide drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-300"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
