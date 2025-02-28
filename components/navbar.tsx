'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
      if (window.innerWidth > 800) {
        setMenuOpen(false); // Close mobile menu when resizing to desktop
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-white px-6 py-4 shadow-sm lg:px-28">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/full-logo.svg"
          alt="BizLLMiner Logo"
          width={139.48}
          height={31.54}
          className="cursor-pointer"
        />
      </Link>

      {/* Mobile Menu Button (Only shows on mobile) */}
      {isMobile && !menuOpen && (
        <button
          className="z-50 text-[#096809]"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      )}

      {/* Desktop Navigation (Always Visible on Screens > 800px) */}
      {!isMobile && (
        <div className="flex items-center space-x-6">
          {/* Our Products Dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-1 text-[#160647] transition-colors hover:text-green-400"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Our Products <ChevronDown size={16} />
            </button>

            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 rounded-md bg-white shadow-lg">
                <Link
                  href="/product1"
                  className="block px-4 py-2 text-[#160647] hover:bg-green-400"
                >
                  Product 1
                </Link>
                <Link
                  href="/product2"
                  className="block px-4 py-2 text-[#160647] hover:bg-green-400"
                >
                  Product 2
                </Link>
              </div>
            )}
          </div>

          {/* Other Links */}
          {[
            { name: 'About Us', path: '/about' },
            { name: 'Contact Us', path: '/contact' },
            { name: 'Login', path: '/login' },
          ].map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`transition-colors hover:text-green-400 ${
                link.name === 'Login'
                  ? '!ml-10 text-[#096809]'
                  : 'text-[#160647]'
              } ${pathname === link.path ? 'font-semibold' : ''}`}
            >
              {link.name}
            </Link>
          ))}

          {/* Sign Up Button */}
          <Link href="/signup">
            <button className="h-[47px] w-[142px] rounded-[5px] bg-[#C4FAC4] px-4 py-2 text-[#096809] transition hover:bg-green-400">
              Sign Up
            </button>
          </Link>
        </div>
      )}

      {/* Mobile Navigation Menu */}
      {isMobile && menuOpen && (
        <div
          className={`fixed right-0 top-0 h-full w-2/4 bg-white shadow-lg transition-transform duration-300 ease-in-out ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Close Button */}
          <button
            className="absolute right-5 top-5 flex h-6 w-6 items-center justify-center rounded-full bg-[#F5F8FA] text-[#AEB0C1] transition"
            onClick={() => setMenuOpen(false)}
          >
            <X size={20} />
          </button>

          {/* Menu Items */}
          <div className="flex flex-col space-y-6 px-6 pt-16">
            {/* Our Products Dropdown */}
            <div className="relative">
              <button
                className="flex w-full items-center gap-1 text-[#160647] transition-colors hover:text-green-400"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Our Products <ChevronDown size={16} />
              </button>

              {dropdownOpen && (
                <div className="mt-2 w-full rounded-md bg-white shadow-lg">
                  <Link
                    href="/product1"
                    className="block px-4 py-2 text-[#160647] hover:bg-green-400"
                  >
                    Product 1
                  </Link>
                  <Link
                    href="/product2"
                    className="block px-4 py-2 text-[#160647] hover:bg-green-400"
                  >
                    Product 2
                  </Link>
                </div>
              )}
            </div>

            {/* Other Links */}
            {[
              { name: 'About Us', path: '/about' },
              { name: 'Contact Us', path: '/contact' },
              { name: 'Login', path: '/login' },
            ].map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`transition-colors hover:text-green-400 ${
                  link.name === 'Login'
                    ? 'block text-[#096809]'
                    : 'block text-[#160647]'
                } ${pathname === link.path ? 'font-semibold' : ''}`}
              >
                {link.name}
              </Link>
            ))}

            {/* Sign In Button */}
            <Link href="/login">
              <button className="w-full rounded-md bg-[#C4FAC4] py-2 text-[#096809] transition hover:bg-green-400">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      )}

      {/* Blurred Background (Only Covers Remaining Screen) */}
      {menuOpen && (
        <div
          className="fixed left-0 top-0 h-full w-2/4 bg-black bg-opacity-30 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
