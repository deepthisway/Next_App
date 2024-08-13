import React from 'react';

interface CardProps {
  imageUrl?: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
}

const Card = ({ imageUrl, icon, title, description }: CardProps) => {
  return (
    <div className="bg-[#E6F0FF] rounded-lg w-[230px] h-[223px] p-4 ml-3">
      {imageUrl ? (
        <img
          alt={title}
          className="w-full h-[120px] object-cover rounded-md"
          src={imageUrl}
        />
      ) : (
        icon && (
          <div className="flex justify-center items-center h-[120px]">
            {icon}
          </div>
        )
      )}
      <div className="flex flex-col items-center justify-center text-center">
        <h3 className="font-bold text-lg mt-2">{title}</h3>
        <p className="text-gray-700 mt-1">{description}</p>
      </div>
    </div>
  );
};

export default Card;
