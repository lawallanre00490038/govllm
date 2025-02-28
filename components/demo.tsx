'use client';

import Image from 'next/image';
import Link from 'next/link';

const Demo = () => {
  const features = [
    {
      title: 'Secure',
      description:
        'Your data is protected with state-of-the-art encryption and compliance standards, ensuring confidentiality and industry compliance.',
      imageSrc: '/secure.svg',
    },
    {
      title: 'Accessible',
      description:
        'Engage with your enterprise knowledge seamlessly using intuitive AI-powered insights across multiple devices and platforms.',
      imageSrc: '/accessible.svg',
    },
    {
      title: 'Enterprise-ready',
      description:
        'Built for scale and efficiency, our LLM-powered chatbot integrates with business workflows, databases, and APIs to drive productivity.',
      imageSrc: '/enterprise_ready.svg',
    },
    {
      title: 'Adaptable',
      description:
        'Customize the chatbot to fit your industry needs, with integrations tailored to your specific data and use cases.',
      imageSrc: '/adaptable.svg',
    },
    {
      title: 'Efficient',
      description:
        'Get instant, accurate insights from your enterprise data, providing decision-making for teams.',
      imageSrc: '/efficient.svg',
    },
    {
      title: 'Reliable',
      description:
        'Our AI-powered chatbot ensures consistent, high-quality responses, helping your business stay informed and proactive.',
      imageSrc: '/reliable.svg',
    },
  ];

  return (
    <section className="px-6 text-center md:mt-[112px]">
      <h2 className="mb-6 text-2xl font-bold text-[#160647]">
        Why BizLLMiner?
      </h2>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="mx-auto flex max-w-sm items-start space-x-4 rounded-lg border p-6 shadow-sm"
          >
            <Image
              src={feature.imageSrc}
              alt={feature.title}
              width={55}
              height={55}
              className="flex-shrink-0"
            />
            <div className="text-left">
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-600">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Call-to-Action Button */}
      <Link href="/">
        <button className="mt-10 rounded-lg bg-[#096809] px-6 py-3 text-white transition hover:bg-green-600">
          Request a Free Demo
        </button>
      </Link>
    </section>
  );
};

export default Demo;
