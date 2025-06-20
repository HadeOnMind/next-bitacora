import Link from 'next/link';

export default function HorzNavbar() {
  const navItems = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Home', href: '/' },
    { label: 'About', href: '/dashboard/about' },
    { label: 'Services', href: '/dashboard/services' },
    { label: 'Contact', href: '/dashboard/contact' },
  ];

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-blue-600">My Bitacora</div>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-gray-700 hover:text-blue-600 transition">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
