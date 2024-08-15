import Image from "next/image";

interface SeatProps {
  SeatsUrl: string;
}

const Seats = ({ SeatsUrl }: SeatProps) => {
  return (
    <div>
        <Image
          src={SeatsUrl}
          alt="Icon"
          className="h-[45px] w-[45px] m-1 rounded-md border-gray-300 border" // Add margin and border
        />
    </div>
  );
};

export default Seats;
