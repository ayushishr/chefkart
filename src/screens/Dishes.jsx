import Filter from "../components/Filter";
import Nav from "../components/Nav";
import { FcCalendar, FcAlarmClock } from "react-icons/fc";
import PopularDishes from "../components/PopularDishes";
import { RiArrowDownSFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import DishCard from "../components/DishCard";

function Dishes() {
  
  const [dishes, setDishes] = useState([]);

  const filer = [
    { title: "Italian", active: true },
    { title: "Indian", active: false },
    { title: "Mexican", active: false },
    { title: "Chinese", active: false },
    { title: "Japanese", active: false },
  ];

  const popularDishes = [
    {
      title: "Biryani",
      image: "https://slurrp.club/wp-content/uploads/2021/10/DSC_0037-2.jpg",
    },
    {
      title: "Pizza",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg",
    },
    {
      title: "Burger",
      image:
        "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg",
    },
    {
      title: "Pasta",
      image:
        "https://www.washingtonpost.com/resizer/E4Zygqr-5dBR09mfDV1WZ2TVioc=/arc-anglerfish-washpost-prod-washpost/public/HJRCQ6AIMT54I3ONNQLAPOZA2Y.jpg",
    },
    {
      title: "Noodles",
      image:
        "https://www.allrecipes.com/thmb/2rPJp4sRMmSa-5MgBRuHz8XDxlc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/233446-lo-mein-noodles-dmfs-2x1-1356-1490-62771eb9cd6840fdb75f332303fff7b1.jpg",
    },
  ];

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/"
      );
      const data = await response.json();
      setDishes(data.dishes);
      console.log(data.dishes);
    }
    fetchData();
  }, []);

  return (
    <div className="w-full">
      <Nav title={"Select Dishes"} />
      <div className="relative flex justify-center mt-4 w-full">
        <div className="bg-black h-10 w-full z-0">Dishes</div>
        <div className="absolute bg-white z-50 top-[50%] shadow p-4 rounded-lg w-[90%] mx-auto flex justify-between text-sm">
          <div className="flex items-center">
            <FcCalendar size={25} />
            <span className="ml-2 font-semibold">21 May 2021</span>
          </div>
          <div className="flex items-center">
            <FcAlarmClock size={25} />
            <span className="ml-2 font-semibold">10:30 Pm-12:30 Pm</span>
          </div>
        </div>
      </div>
      <div className="flex gap-1 items-center justify-start overflow-x-auto mt-14 max-w-[90%] mx-auto">
        {filer.map((item, index) => (
          <Filter key={index} title={item.title} active={item.active} />
        ))}
      </div>
      <div className="mt-4 max-w-[90%] mx-auto overflow-x-auto">
        <p className="font-bold text-lg my-2 w-fit">Popular Dishes</p>
        <div className="flex gap-2 items-center justify-start min-w-fit">
          {popularDishes.map((item, index) => (
            <PopularDishes key={index} item={item} />
          ))}
        </div>
      </div>
      <div className="w-full h-1 bg-gray-200 mx-auto rounded-full mt-4" />
      <div className="mt-4 max-w-[90%] mx-auto overflow-x-auto">
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg my-2 w-fit flex gap-4 items-center">
            Recommended <RiArrowDownSFill />
          </span>
          <button className="bg-black text-xs flex items-center justify-center text-white px-4 h-fit w-fit py-2 rounded-lg">
            Menu
          </button>
        </div>

        {dishes.length > 0 &&
          dishes?.map((dish, index) => (
            <DishCard
              key={index}
              image={dish.image}
              name={dish.name}
              description={dish.description}
              rating={dish.rating}
              id={dish.id}
            />
          ))}
      </div>
    </div>
  );
}

export default Dishes;
