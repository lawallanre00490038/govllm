'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-[#096809] py-16 text-white">
      <div className="mx-auto max-w-screen-lg px-6">
        {/* Footer Sections */}
        <div className="grid grid-cols-1 gap-8 text-center text-sm sm:grid-cols-2 sm:text-left md:grid-cols-3">
          {/* Research Section */}
          <div>
            <h3 className="mb-3 font-bold">Research</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">GovLLMiner Coder</Link>
              </li>
              <li>
                <Link href="/">GovLLMiner Coder</Link>
              </li>
              <li>
                <Link href="/">GovLLMiner Coder</Link>
              </li>
              <li>
                <Link href="/">GovLLMiner Coder</Link>
              </li>
              <li>
                <Link href="/">GovLLMiner Coder</Link>
              </li>
            </ul>
          </div>

          {/* Product Section */}
          <div>
            <h3 className="mb-3 font-bold">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">GovLLMiner App</Link>
              </li>
              <li>
                <Link href="/">GovLLMiner Chat</Link>
              </li>
              <li>
                <Link href="/">GovLLMiner Platform</Link>
              </li>
              <li>
                <Link href="/">API Pricing</Link>
              </li>
            </ul>
          </div>

          {/* Support & Contact Section */}
          <div>
            <h3 className="mb-3 font-bold">Support & Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">Contact Us</Link>
              </li>
              <li>
                <Link href="/">Technical Support</Link>
              </li>
              <li>
                <Link href="/">Feedback</Link>
              </li>
              <li>
                <Link href="/">Community Forum</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 text-center text-sm sm:text-left md:flex-row md:gap-0">
          <p>
            © 2025 GovLLMiner.ai •{' '}
            <Link href="/" className="underline">
              Privacy Notice
            </Link>{' '}
            •{' '}
            <Link href="/" className="underline">
              Terms of Service
            </Link>
          </p>

          {/* Social Media Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: 'Facebook', color: 'bg-blue-700', icon: 'facebook.svg' },
              { name: 'Twitter / X', color: 'bg-black', icon: 'twitter.svg' },
              { name: 'LinkedIn', color: 'bg-blue-700', icon: 'linkedin.svg' },
              {
                name: 'Instagram',
                color: 'bg-pink-600',
                icon: 'instagram.svg',
              },
            ].map((social) => (
              <Link
                key={social.name}
                href="/"
                className="group flex items-center gap-2"
              >
                <div
                  className={`h-6 w-6 bg-white group-hover:${social.color} transition`}
                  style={{
                    maskImage: `url(/${social.icon})`,
                    WebkitMaskImage: `url(/${social.icon})`,
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    maskSize: 'contain',
                    WebkitMaskSize: 'contain',
                    maskPosition: 'center',
                    WebkitMaskPosition: 'center',
                  }}
                />
                <span>{social.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
