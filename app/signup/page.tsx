'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FcGoogle } from 'react-icons/fc';
import { FaMicrosoft } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

// Schema for form validation
const signupSchema = z
  .object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

type SignupFormData = z.infer<typeof signupSchema>;

export default function Signup() {
  return <SignupForm />;
}

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormData) => {
    const { confirmPassword, ...rest } = data;
    console.log(confirmPassword);
    const response = await fetch('http://127.0.0.1:8000/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rest),
    });
    const result = await response.json();
    console.log(result);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-[380px] p-8">
        <div className="mb-6 text-center">
          <Link className="inline-block rounded-full px-5 py-2" href={'/'}>
            <Image
              src="/logo.png"
              alt="Logo"
              width={136.53}
              height={30.99}
              priority
            />
          </Link>
        </div>

        {/* Create account */}
        <h2
          className="mb-6 text-center text-[31px] font-bold"
          style={{ color: 'var(--primary-color)' }}
        >
          Create an account
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email Input */}
          <div className="relative w-full">
            <label
              htmlFor="email"
              className="absolute -top-2 left-3 px-1.5 text-[14px]"
              style={{ color: '#096809', backgroundColor: '#f3f7fb' }}
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              {...register('email')}
              className="h-[64px] w-[320px] rounded-md border px-4 py-3 text-gray-900 shadow-sm focus:border-green-500 focus:ring-1 focus:ring-green-500"
              style={{
                borderColor: 'var(--primary-color)',
                backgroundColor: '#f3f7fb',
              }}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Input */}
          <div className="relative w-full">
            <label
              htmlFor="password"
              className="absolute -top-2 left-3 px-1.5 text-[14px]"
              style={{ color: '#096809', backgroundColor: '#f3f7fb' }}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register('password')}
              className="h-[64px] w-[320px] rounded-md border px-4 py-3 text-gray-900 shadow-sm focus:border-green-500 focus:ring-1 focus:ring-green-500"
              style={{
                borderColor: 'var(--primary-color)',
                backgroundColor: '#f3f7fb',
              }}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password Input */}
          <div className="relative w-full">
            <label
              htmlFor="confirmPassword"
              className="absolute -top-2 left-3 px-1.5 text-[14px]"
              style={{ color: '#096809', backgroundColor: '#f3f7fb' }}
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              {...register('confirmPassword')}
              className="h-[64px] w-[320px] rounded-md border px-4 py-3 text-gray-900 shadow-sm focus:border-green-500 focus:ring-1 focus:ring-green-500"
              style={{
                borderColor: 'var(--primary-color)',
                backgroundColor: '#f3f7fb',
              }}
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-600">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Continue Button */}
          <button type="submit" className="button" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Continue'}
          </button>

          {/* Sign In Link */}
          <p className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="link link-secondary hover:underline">
              Sign in
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
          <button type="button" className="social-button mb-[8px]">
            <FcGoogle className="mr-2 h-5 w-5" />
            Continue with Google
          </button>
          <button type="button" className="social-button">
            <FaMicrosoft className="mr-2 h-5 w-5 text-blue-600" />
            Continue with Microsoft Account
          </button>
        </form>
      </div>
    </div>
  );
}
