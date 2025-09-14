// CardClass.tsx
import { cn } from '../../lib/utils'; // or use clsx
import "./card.css";


interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const CardClass = ({ className, children }: CardProps) => {
  return (
    <div className={cn("rounded-lg p-4 shadow-md bg-white", className)}>
      {children}
    </div>
  );
};

export default CardClass