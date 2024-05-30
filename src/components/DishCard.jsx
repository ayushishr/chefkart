import {Link} from "react-router-dom";
import green from "../assets/green.png";
import { IoMdStar } from "react-icons/io";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { MdKeyboardArrowRight } from "react-icons/md";

function DishCard({ image,name,description, rating, id}) {
  return (
    <div className="flex flex-col gap-2 items-start justify-center min-w-fit mt-6">
      <div className="flex gap-3 items-center justify-center">
        <p className="font-semibold text-lg">{name}</p>
        <img src={green} width={16}></img>
        <div className="bg-green-500 flex gap-1 items-center text-white text-xs px-2 py-1 rounded-lg">
          {rating} <IoMdStar className="" />
        </div>
      </div>

      <div className="w-full flex gap-2 items-center justify-between">
        <div className="flex flex-col w-[80%]">
          <div className="flex gap-3">
            <div className="flex flex-col justify-center items-center">
              <CgSmartHomeRefrigerator size={25} />
              <p className="text-xs">Refrigerator</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <CgSmartHomeRefrigerator size={25} />
              <p className="text-xs">Refrigerator</p>
            </div>
            <div
              style={{ width: "2px" }}
              className="bg-gray-200 h-8 rounded-full"
            />
            <Link
              to={"/item/" + id}
              className="flex flex-col justify-center items-center"
            >
              <p className="font-semibold">Ingredients</p>
              <p className="text-xs font-medium text-yellow-500 flex gap-1 items-center">
                View List <MdKeyboardArrowRight />
              </p>
            </Link>
          </div>
          <p className="text-gray-400 text-left mt-2">{description}</p>
        </div>
        <div className="relative">
          <img src={image} className="rounded-md w-24 flex" />
          <button className="absolute -bottom-2 bg-white text-yellow-500 border border-yellow-5600 px-6 text-xs  py-1 rounded-lg  right-2">
            Add
          </button>
        </div>
      </div>
      <div className="bg-gray-200 w-full h-[2px] rounded mt-2"></div>
    </div>
  );
}

export default DishCard;
