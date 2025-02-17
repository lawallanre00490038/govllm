'use client';

import React, { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { FcGoogle } from 'react-icons/fc';
import { FaMicrosoft } from 'react-icons/fa';
import Image from 'next/image';

export default function Loginin() {
  return <LoginForm />;
}

function LoginForm() {
  const [email, setEmail] = useState('');
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = recaptchaRef.current?.getValue();
    if (!token) {
      alert('Please complete the reCAPTHA');
      return;
    }

    console.log('reCAPTCHA Token:', token);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-[380px] p-8">
        <div className="mb-6 text-center">
          <div className="inline-block rounded-full px-5 py-2">
            <Image
              src="/full-logo.png"
              alt="Logo"
              width={136.53}
              height={30.99}
              priority
            />
          </div>
        </div>

        {/* Login */}
        <h2
          className="mb-6 text-center"
          style={{
            fontSize: '31px',
            fontWeight: 'bold',
            color: 'var(--primary-color)',
          }}
        >
          Welcome back
        </h2>

        {/* Email Input */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative w-full">
            <label
              htmlFor="email"
              className="absolute -top-2 left-3 px-1.5"
              style={{
                fontSize: '14px',
                fontWeight: 'regular',
                color: '#096809',
                backgroundColor: '#f3f7fb',
              }}
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-[64px] w-[320px] rounded-md border px-4 py-3 text-gray-900 shadow-sm focus:border-green-500 focus:ring-1 focus:ring-green-500"
              style={{
                borderColor: 'var(--primary-color)',
                backgroundColor: '#f3f7fb',
              }}
            />
          </div>

          {/* Add reCAPTCHA before the Continue button */}
          <div
            className="mt-[13px] flex h-[82px] w-[320px] justify-center overflow-hidden rounded-md"
            style={{ backgroundColor: 'transparent' }} // Set background to transparent
          >
            {/* @ts-expect-error: Ignoring type error for ReCAPTCHA component */}
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
            />
          </div>

          {/* Continue Button */}
          <button type="submit" className="button">
            Continue
          </button>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-gray-600">
            Don&apos;t have an account?{' '}
            <a href="/signup" className="link link-secondary hover:underline">
              Sign up
            </a>
          </p>

          {/* Divider */}
          <div className="relative mt-[14px] flex items-center justify-center">
            <div className="w-full border-t border-gray-300"></div>
            <span className="absolute bg-gray-100 px-3 text-sm text-gray-500">
              OR
            </span>
          </div>

          {/* Social Login Buttons */}
          <button className="social-button mb-[8px]">
            <FcGoogle className="mr-2 h-5 w-5 text-red-500" />
            Continue with Google
          </button>

          <button className="social-button">
            <FaMicrosoft className="mr-2 h-5 w-5 text-blue-600" />
            Continue with Microsoft Account
          </button>
        </form>
      </div>
    </div>
  );
}
