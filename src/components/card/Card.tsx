import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <article className="p-4 w-full min-w-[462px] h-[252px] shadow-lg rounded-xl bg-white">
      {children}
    </article>
  );
};

export default Card;
