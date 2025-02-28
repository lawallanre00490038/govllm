import { TemplateTrayItem } from './template-tray-item';

type TemplateTrayProps = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  items: string[];
  title: string;
};

export const TemplateTray = ({ Icon, items, title }: TemplateTrayProps) => {
  return (
    <div className="flex flex-col items-center">
      <Icon className="size-8" />
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <div className="mt-6 space-y-4">
        {items.map((item, index) => (
          <TemplateTrayItem text={item} key={index} />
        ))}
      </div>
    </div>
  );
};
