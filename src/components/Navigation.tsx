'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Health Policies', path: '/health-policies' },
    { name: 'Data', path: '/data' },
    { name: 'Stories', path: '/stories' },
    { name: 'Resources', path: '/resources' },
  ];

  return (
    <nav className="bg-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl">CTA20 Campaign</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                item.path === '/take-action' ? (
                  <Link
                    key={item.path}
                    href={item.path}
                    className="bg-white text-indigo-700 px-4 py-2 rounded-md font-medium hover:bg-indigo-50"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`px-3 py-2 rounded-md ${
                      pathname === item.path
                        ? 'bg-indigo-600 text-white'
                        : 'text-white hover:bg-indigo-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <Link
                href="/take-action"
                className="bg-white text-indigo-700 px-4 py-2 rounded-md font-medium hover:bg-indigo-50"
              >
                Take Action
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 