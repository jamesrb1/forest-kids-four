'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Program', path: '/program' },
    { name: 'Content', path: '/content' },
  ]

  return (
    <nav className="bg-forestGreen text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Forest Kids</div>
        <ul className="flex space-x-4">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link href={item.path}>
                <span className={`${pathname === item.path ? 'underline' : ''} hover:underline`}>
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
