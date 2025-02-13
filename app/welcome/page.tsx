'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './WelcomePage.css';

const WelcomePage: React.FC = () => {
  return (
    <div className="welcome-container">
      <div className="mb-[21px] text-center">
        <Image
          src="/full-logo.png"
          alt="Logo"
          width={198.3}
          height={45.01}
          priority
        />
      </div>
      <div className="m-0 mb-[6px] text-center text-sm text-gray-600">
        Welcome to BizLLMiner
      </div>
      <div className="m-0 mb-[6px] text-center text-sm text-gray-600">
        Log in with your BizLLMiner account to continue
      </div>
      <div className="button-container mt-[27px]">
        <Link href="/login">
          <button type="button" className="welcome-button">
            Log in
          </button>
        </Link>
        <Link href="/signup">
          <button type="button" className="welcome-button">
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
