import Image from 'next/image';

export const Logo = () => {
  return (
    <Image
      src="/full-logo.svg"
      alt="Logo"
      width={136.53}
      height={30.99}
      priority
    />
  );
};
