import Spinner from '@/components/Spinner';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isLoading?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const defaultClasses = `
  flex 
  w-full 
  cursor-pointer 
  items-center 
  justify-center 
  gap-2 
  rounded-lg 
  bg-primary 
  p-4 
  font-medium 
  text-white 
  transition 
  hover:bg-opacity-90
  my-4
  `;

const Button: React.FC<ButtonProps> = ({
  text,
  isLoading,
  className,
  children,
  ...props
}) => (
  <button type="button" className={className ?? defaultClasses} {...props}>
    {isLoading ? <Spinner /> : children ?? text}
  </button>
);

export default Button;
