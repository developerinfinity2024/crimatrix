import { HiMiniArrowTrendingUp } from "react-icons/hi2";

const PercentageCard = ({}) => {
  return (
    <div className="bg-green-300 p-2 rounded-md inline items-center gap-3 ">
      <HiMiniArrowTrendingUp className="inline" /> -
      <span className="">2.1%</span>
    </div>
  );
};

export default PercentageCard;
