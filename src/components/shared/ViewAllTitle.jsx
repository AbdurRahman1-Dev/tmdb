import { FaAngleRight } from "react-icons/fa6";

const ViewAllTitle = ({ title, subTitle }) => {
  return (
    <div className="flex justify-start gap-3 items-center">
      <div className="w-1 h-10 bg-info"></div>
      <div>
        <button className="md:text-xl text-lg font-bold flex items-center group">
          {title}{" "}
          <FaAngleRight className="group-hover:translate-x-1 transition duration-200 group-hover:text-info" />
        </button>
        <p className="text-sm md:text-base">{subTitle}</p>
      </div>
    </div>
  );
};

export default ViewAllTitle;
