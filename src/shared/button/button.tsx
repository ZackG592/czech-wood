import { FC } from 'react';

interface ButtonProps {
  text: string;
}

const Button: FC<ButtonProps> = ({ text }) => {
  return (
    <button className="outline-0 bg-[#728BAD] p-5 text-center rounded-3xl hover:bg-[#2d3e48]">
      {text}
    </button>
  );
};

export default Button;
