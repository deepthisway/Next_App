import Card2 from "./Card2";
import Seats from "./seats";

interface DashboardProps {
  imageUrl: string;
  cardData: Array<{
    imageUrl: string;
    icon?: React.ReactNode;
    title: string;
    description: string;
  }>;
}

const Dashboard = ({ cardData, imageUrl }: DashboardProps) => {
  const seatsUrl = 'https://photosking.net/wp-content/uploads/2024/05/no-dp_16.webp';
  const iconsArray = Array(45).fill(seatsUrl);

  return (
    <>
      <div className="absolute bg-white w-[1650px] h-auto top-[90px] left-[120px] rounded-[10px] border-gray-300 shadow-md z-20 p-6">
        {/* Profile Div */}
        <div className="flex justify-between">
          <div>
            {/* Image */}
            <div className="flex flex-col justify-center mb-5">
              <div className="flex flex-col">
                <img
                  alt="Teacher"
                  className="rounded-full h-[223px] w-[223px] mt-4 ml-8 mb-3"
                  src={imageUrl}
                />
                <h1 className="font-bold text-[32px] text-center text-[#292929]">Ryan Doblin</h1>
                <h3 className="text-center text-gray-400 mt-1">Chicago, United States</h3>
              </div>
              {/* Add account button */}
              <div className="relative flex justify-center">
                <button className="bg-[#17A8FC] text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 w-[289px] h-[60px] mt-8">
                  Add Account Details
                </button>
              </div>
            </div>
          </div>

          {/* Displaying cards */}
          <div className="flex flex-wrap mt-5">
            {cardData.map((card, index) => (
              <Card2
                key={index}
                imageUrl={card.imageUrl}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>

        {/* Flex container for left and right sections */}
        <div className="flex justify-between mt-10">
          {/* Left Section */}
          <div className="w-[65%]">
            <h1 className="text-2xl font-bold">Batch History</h1>

            <div className="mt-5">
              <p className="-mb-3">Search Batch</p>
              <input
                type="text"
                className="w-[880px] h-[58px] border rounded-lg px-4 py-2 mt-4"
                placeholder="Search for any scheduled batch"
              />

              {/* Four input fields */}
              <div className="flex justify-between max-w-[880px] mt-4">
                <select className="w-[210px] h-[58px] border rounded-lg px-4 py-2 ml-1">
                  <option value="">Select Option 1</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                </select>
                <select className="w-[210px] h-[58px] border rounded-lg px-4 py-2">
                  <option value="">Select Option 2</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                </select>
                <input
                  type="date"
                  className="w-[210px] h-[58px] border rounded-lg px-4 py-2"
                />
                <input
                  type="date"
                  className="w-[210px] h-[58px] border rounded-lg px-4 py-2"
                />
              </div>

              {/* Upcoming class div */}
              <div className="w-[880px] h-[550px] border mt-4 rounded">
                <button className="bg-[#FB138E] rounded-2xl m-3 p-2 text-white">Upcoming class</button>
                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <div>
                      <p className="mx-3 p-2 font-extrabold">Implementing SAFe</p>
                      <p className="mx-3 p-2 font-extrabold -mt-4">26-29 August, 2023</p>
                      <p className="mx-3 p-2 font-bold text-gray-400 mt-2">26.45 Seats Filled</p>
                    </div>
                    <div>
                      <p className="mx-3 p-2 font-extrabold"></p>
                      <p className="mx-3 p-2 font-extrabold -mt-4">Rs.1500 per seat</p>
                    </div>
                  </div>

                  {/* Seats */}
                  <div className="flex flex-wrap m-4 justify-around">
                    {iconsArray.map((image, index) => (
                      <Seats key={index} SeatsUrl={image} />
                    ))}
                  </div>
                  <div className="flex justify-end mr-6 text-red-600 -mt-2">19 Seats left</div>
                  <p className="mx-4 p-2 font-light">
                    Your request has been accepted now you can enjoy teaching selected students and provide them with your knowledge.
                  </p>
                  <div className="flex justify-center mt-4">
                    <button className="w-[830px] h-[58px] border rounded-md">Cancel Batch</button>
                  </div>
                </div>
                {/* last left div */}
                <div className=" border border-1 rounded-lg p-4 relative top-20">
                <div className="flex justify-between items-center mb-2">
                  <div className="bg-red-500 text-white  py-1 px-2 rounded-xl">
                    Successful Batch
                  </div>
                  <div className="bg-gray-200 text-gray-700 font-medium py-1 px-2 rounded-md">
                    0 Per Seat
                  </div>
                </div>
                <h2 className="text-xl font-bold mb-1">Implementing SAFe</h2>
                <div className="flex items-center mb-2">
                  <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span className="text-gray-700">26-29 August 2023</span>
                </div>
                <div className="text-gray-600 mb-4">26/45 attended the Batch</div>
                <div className=" text-blue-500 py-2 px-4 mb-4 flex justify-end">
                  See who attended the class
                </div>
                <div className="flex items-center mb-4">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span className="text-gray-700">You have successfully completed all the classes of the batch now upload the attendance sheet below and now you can ask for your payment release which will be added to your bank account within 1 month.</span>
                </div>
                <div className="flex justify-between items-center">
                  <button className="bg-[#17A8FC] hover:bg-sky-200 text-white py-2 px-4 rounded-lg shadow-md w-[551px] h-[58px]">
                    Ask for payment release
                  </button>
                  <button className="w-[264] h-[58px] hover:bg-sky-200 text-black py-2 px-4 rounded-lg shadow-md mb-2">
                    Upload Attendance sheet
                  </button>
                </div>
                <div className="text-red-500 mt-2">Upload the attendance sheet with student signature.</div>
              </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          {/* first right */}
          <div className="w-[35%] flex flex-col ">
          <div className="bg-white rounded-lg border p-4 mb-4">
  <h2 className="text-xl font-bold mb-4">Student Reviews</h2>
  <p className="text-gray-500 mb-6">214,957 reactions</p>
  <div className="flex items-center mb-4">
    <img src="https://i.imgur.com/Y83F7rY.png" alt="Thomas" className="w-10 h-10 rounded-full mr-3" />
    <div>
      <h3 className="font-bold">Thomas</h3>
      <p className="text-gray-700">Everyone who knows buys crypto, that's a practical solutions for funds transfer.</p>
      <div className="flex mt-2">
        <span className="mr-2"><img src="https://i.imgur.com/O2fI78W.png" alt="Fire" className="w-5 h-5" /></span>
        <span>89</span>
        <span className="ml-4"><img src="https://i.imgur.com/wU8kD8F.png" alt="Thumbs down" className="w-5 h-5" /></span>
        <span>12</span>
      </div>
    </div>
  </div>
  <div className="flex items-center mb-4">
    <img src="https://i.imgur.com/4y7kC79.png" alt="Master Cat" className="w-10 h-10 rounded-full mr-3" />
    <div>
      <h3 className="font-bold">Master Cat</h3>
      <p className="text-gray-700">Don't worry! When all other currencies are obsolete, soul on earth will bitcoin!</p>
      <div className="flex mt-2">
        <span className="mr-2"><img src="https://i.imgur.com/O2fI78W.png" alt="Fire" className="w-5 h-5" /></span>
        <span>128</span>
        <span className="ml-4"><img src="https://i.imgur.com/wU8kD8F.png" alt="Thumbs down" className="w-5 h-5" /></span>
        <span>16</span>
      </div>
    </div>
  </div>
  <div className="flex">
    <input type="text" placeholder="Share your reaction" className="flex-1 border rounded-md px-3 py-2 mr-2" />
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.75 18.75h-12m12 0l-12 0m12 0l-12 0m12 0l-12 0m12 0l-12 0"></path>
      </svg>
    </button>
  </div>
</div>

          {/* Second right */}
          <div className="bg-white border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">What we charge</h2>
            <p className="text-gray-600 mb-6">Pricing and fees</p>
            <p className="text-gray-600 mb-6">Choose whether you pay the fees, or pass them along to your attendees in the settings for each event.</p>
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">Service fee</h3>
              <p className="text-gray-600">This keeps the Eventbrite platform running</p>
              <p className="text-gray-800 font-bold">3.5% + $1.29 per ticket</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Payment processing fee</h3>
              <p className="text-gray-600">This offsets the cost of credit card transactions</p>
              <p className="text-gray-800 font-bold">$2.9 per payment</p>
          </div>
        </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
