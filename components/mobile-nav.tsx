import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type LinkType = {
  name: string;
  href: string;
};

export const links: LinkType[] = [
  {
    name: 'Our Products',
    href: '/our-products',
  },
  {
    name: 'About Us',
    href: '/about-us',
  },
  {
    name: 'Contact Us',
    href: '/contact-us',
  },
  {
    name: 'Login',
    href: '/login',
  },
  {
    name: 'Sign Up',
    href: '/signup',
  },
];

const MobileNav = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <Image src="/logo.png" alt="Logo" width={100} height={100} />

      <nav className="flex items-center gap-4">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="gap-4 text-[#160647] hover:text-black/50"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default MobileNav;
