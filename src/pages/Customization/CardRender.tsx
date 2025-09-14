// CardRender.tsx
interface CardProps {
  renderContent: (data: string) => React.ReactNode;
}

const CardRender = ({ renderContent }: CardProps) => {
  const myString: string = "from CardRender"
  return (
    <div className="rounded-lg p-4 shadow-md bg-white">
      {renderContent(myString)}
    </div>
  );
};

export default CardRender;