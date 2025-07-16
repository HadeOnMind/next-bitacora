'use client';

import { twMerge } from 'tailwind-merge'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function HorzNavbar() {
  const navItems = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Home', href: '/' },
    { label: 'About', href: '/dashboard/about' },
    { label: 'Services', href: '/dashboard/services' },
    { label: 'Contact', href: '/dashboard/contact' },
    { label: 'dev', href: '/workspace/dev' },
  ];

  const pathname = usePathname();

/*`text-gray-600 hover:text-blue-600 transition ${pathname === item.href && "text-blue-700"} ` */


  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <div className={twMerge("text-xl font-bold text-blue-600", 
            pathname.startsWith("/workspace") && 
            "text-amber-500 text-xl font-bold"
          )}>My Bitacora</div>

          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link key={item.href} 
              href={item.href} 
              className={twMerge("text-gray-700 hover:text-blue-600 transition", 
              pathname === item.href && 
              "text-blue-700 italic tracking-wide drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-300",
              pathname.startsWith("/workspace") && 
              "text-amber-400 text-sm hover:text-purple-800"  )}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
