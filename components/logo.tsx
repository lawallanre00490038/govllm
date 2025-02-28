import Image from 'next/image';

type Props = {
  className?: string;
  height?: number;
  width?: number;
};

export const Logo = ({ className, height, width }: Props) => {
  return (
    <Image
      src="/full-logo.svg"
      alt="Logo"
      width={width || 137}
      height={height || 31}
      priority
      className={className}
    />
  );
};
