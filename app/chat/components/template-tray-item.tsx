type TemplateTrayItemProps = {
  text: string;
};

export const TemplateTrayItem = ({ text }: TemplateTrayItemProps) => {
  return (
    <button className="rounded-[8px] bg-primary-foreground p-4 text-sm">
      {text}
    </button>
  );
};
