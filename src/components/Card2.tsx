import Image from 'next/image';
import React from 'react';

interface CardProps {
  imageUrl?: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
}

const Card2 = ({ imageUrl, icon, title, description }: CardProps) => {
  return (
    <div className="bg-[#E6F0FF] rounded-lg w-[314px] h-[399px] p-4 ml-3 flex flex-col justify-end">
      {imageUrl ? (
        <Image
          alt={title}
          className="w-full h-[180px] object-cover rounded-md"
          src={imageUrl}
        />
      ) : (
        icon && (
          <div className="flex justify-center items-center h-[250px]">
            {icon}
          </div>
        )
      )}
      <div className="flex flex-col items-center text-center flex-grow">
        <p className="text-gray-700 mt-1 text-4xl font-bold truncate">{description}</p>
        <h3 className=" text-xl mt-2 truncate">{title}</h3>
      </div>
    </div>
  );
};

export default Card2;
