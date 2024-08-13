import React from 'react';
import Card from './Card';

interface TeacherProps {
  name: string;
  email: string;
  mobileNo: string;
  teacherId: string;
  location: string;
  imageUrl: string;
  about: string;
  workHistory: string;
  education: string;
  publication: string;
  linkedin: string;  
  cardData: Array<{
    imageUrl: string;
    icon?: React.ReactNode;
    title: string;
    description: string;
  }>;
}

const Teacher = ({
  name,
  email,
  mobileNo,
  teacherId,
  location,
  imageUrl,
  about,
  workHistory,
  education,
  publication,
  linkedin,
  cardData,
}: TeacherProps) => {
  return (
    <div className="absolute bg-white w-full max-w-[1650px] h-auto top-[90px] left-[50%] transform -translate-x-1/2 rounded-[10px] border-gray-300 shadow-md z-20 p-6">
      <div className="flex flex-col md:flex-row mx-5 md:mx-10 mt-5 space-y-10 md:space-y-0 md:space-x-10 lg:space-x-28">
        <div className="md:w-[500px] relative">
          <p className="flex justify-center mb-2 text-blue-400 text-lg md:text-xl">Ranked in top 10 Teachers</p>
          <img alt="Teacher" className="rounded-full h-[180px] w-[180px] md:h-[230px] md:w-[230px] mx-auto mb-5" src={imageUrl} />
          <h1 className="font-bold text-[24px] md:text-[32px] text-center text-[#292929]">{name}</h1>
          <h3 className="text-center text-gray-400">Professional</h3>
          <h3 className="text-center text-gray-400 mt-1">{location}</h3>

          <h2 className="mt-10 font-bold">Teacher Details</h2>
          <hr className="h-px my-3 bg-gray-200 border-0" />
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <p>Name</p>
              <p>{name}</p>
            </div>
            <div className="flex justify-between">
              <p>Mail Address</p>
              <p>{email}</p>
            </div>
            <div className="flex justify-between">
              <p>Mobile No.</p>
              <p>{mobileNo}</p>
            </div>
            <div className="flex justify-between">
              <p>Teacher ID</p>
              <p>{teacherId}</p>
            </div>
            <div className="flex justify-between">
              <p>LinkedIn</p>
              {linkedin ? (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View LinkedIn Profile
                </a>
              ) : (
                <p>N/A</p>
              )}
            </div>
          </div>

          <button className="bg-[#17A8FC] text-white font-bold py-2 px-4 rounded hover:bg-blue-700 w-full md:w-[373px] mt-10 mx-auto block">
            Contact Teacher
          </button>
        </div>

        <div className="md:w-[1116px]">
          <p className="text-lg md:text-xl font-bold">About {name}</p>
          <p className="text-gray-600 mt-2 w-full">{about}</p>
          <div className="mt-3">
            <p className="text-lg md:text-xl font-bold">Work History</p>
            <p className="text-gray-600 whitespace-pre-line mt-2">{workHistory}</p>
          </div>
          <div className="mt-3">
            <p className="text-lg md:text-xl font-bold">Education</p>
            <p className="text-gray-600 mt-2">{education}</p>
          </div>
          <div className="mt-3">
            <p className="text-lg md:text-xl font-bold">Publication</p>
            <p className="text-gray-600 mt-2">{publication}</p>
          </div>
          <div className="flex flex-wrap mt-5">
            {cardData.map((card, index) => (
              <Card
                key={index}
                imageUrl={card.imageUrl}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
