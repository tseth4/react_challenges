// CardTheme.tsx
interface CardProps {
  theme?: {
    textColor?: string;
    backgroundColor?: string;
  };
  children: React.ReactNode;
}

const CardTheme = ({ theme, children }: CardProps) => {
  const { textColor = 'black', backgroundColor = 'white' } = theme || {};

  return (
    <div style={{ color: textColor, backgroundColor, padding: '1rem', borderRadius: '0.5rem' }}>
      {children}
    </div>
  );
};

export default CardTheme;