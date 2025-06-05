'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Health Policies', path: '/health-policies' },
    { name: 'Ongoing Efforts', path: '/ongoing-efforts' },
    { name: 'Stories', path: '/stories' },
    { name: 'Next Steps', path: '/next-steps' },
  ];

  return (
    <nav className="bg-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/" className="font-bold text-xl no-underline">CTA20 Campaign</Link>
            </motion.div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <motion.div
                  key={item.path}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.path}
                    className={`px-3 py-2 rounded-md no-underline ${
                      pathname === item.path
                        ? 'bg-indigo-600 text-white'
                        : 'text-white hover:bg-indigo-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/take-action"
                  className="bg-white text-indigo-700 px-4 py-2 rounded-md font-medium hover:bg-indigo-50 no-underline"
                >
                  Take Action
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 