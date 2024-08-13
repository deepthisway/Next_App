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
        <div className="flex justify-between ">
          <div>
            {/* Image */}
            <div className="flex flex-col justify-center mb-5 ">
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
                <div className="relative flex justify-center ">
                    <button className="bg-[#17A8FC] text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 w-[289px] h-[60px] mt-8">
                    Add Account Details
                    </button>
                </div>
          </div>
          </div>
          {/* displaying cards */}
          <div className="flex flex-wrap mt-5 top-[819px]">
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
        {/* second section */}
        <div>
          {/* left section */}
          <div className="text-2xl font-bold mt-10">
            <h1>Batch History</h1>
            
          </div>

          <div className="mt-5">
            <p className="-mb-3">Search Batch</p>
            <input
              type="text"
              className="w-[880px] h-[58px] border rounded-lg px-4 py-2 mt-4"
              placeholder="Search for any scheduled batch"
            />
            {/* for 4 input fields */}
            <div className="flex justify-between max-w-[880px]">
              <select
                className="w-[210px] h-[58px] border rounded-lg px-4 py-2 mt-4 ml-1"
              >
                <option value="">Select Option 1</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
              <select
                className="w-[210px] h-[58px] border rounded-lg px-4 py-2 mt-4"
              >
                <option value="">Select Option 2</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
              <input
                type="date"
                className="w-[210px] h-[58px] border rounded-lg px-4 py-2 mt-4"
              />
              <input
                type="date"
                className="w-[210px] h-[58px] border rounded-lg px-4 py-2 mt-4"
              />
            </div>
            {/* upcoming class div */}
            <div className="w-[880px] h-[550px] border mt-4 rounded">
                <button className="bg-[#FB138E] rounded-2xl m-3 p-2 text-white">Upcoming class</button>
                <div className="flex flex-col">
                    <div className="flex justify-between">
                        <div>
                        <p className="mx-3 p-2 font-extrabold">Implementing SAFe</p>
                        <p className="mx-3 p-2 font-extrabold -mt-4">26-29 August, 2023</p>
                        <p className="mx-3 p-2 font-bold text-gray-400 mt-2" >26.45 Seats Filled</p>
                        </div>
                        <div>
                        <p className="mx-3 p-2 font-extrabold"></p>
                        <p className="mx-3 p-2 font-extrabold -mt-4"> Rs.1500 per seat</p>
                        </div>
                    </div>
                    {/* seats */}
                    <div className="flex flex-wrap m-4 justify-around">
                        {iconsArray.map((image, index) => (
                            <Seats key={index} SeatsUrl={image} />
                        ))}
                    </div>
                    <div className="flex justify-end mr-6 text-red-600 -mt-2" >19 Seats left</div>
                    <p className=" mx-4 p-2 font-light">Your request has been accepted now you can enjoy teaching selected students and provide them with your knowledge.</p>
                    <div className="flex justify-center mt-4">
                    <button className="w-[830px] h-[58px] border rounded-md ">Cancel Batch</button>
                    </div>
                </div>
            </div>
          </div>

          {/* right section */} <div>
            <div className="w-[546] h-[743px]">
                <img src="./icons/chat.png"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
