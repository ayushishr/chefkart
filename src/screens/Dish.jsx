import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import { useParams } from "react-router-dom";
import { FcClock } from "react-icons/fc";
import refrigerator from "../assets/refrigerator.png";
import vegetables from "../assets/vegetables.png";
import { MdOutlineArrowDropDown } from "react-icons/md";

function Dish() {
  const [data, setData] = useState({});
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/" +
          id
      );
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, [id]);

  return (
    <div>
      <Nav />
      <div className="container mx-auto w-[90%] mt-8 pb-8 relative">
        <p className="text-left text-3xl font-extrabold">{data.name}</p>
        <p className="text-left text-sm text-gray-400 mt-2">
          {data.description ||
            "Mughlai Masala is a style of cookery developed in the Indian Subcontinent by the imperial kitchens of the Mughal Empire."}
        </p>
        <p className="text-left flex gap-2 items-center mt-6">
          <FcClock />
          {data.timeToPrepare}
        </p>
        <div className="w-[250px] h-[250px] bg-[#fff9f2] rounded-full absolute -right-10 -bottom-12 -z-10" />
        <img
          src={vegetables}
          style={{ width: "fit-content" }}
          className="absolute -bottom-12 -right-40"
        />
      </div>
      <div className="w-full h-1 bg-gray-200 mt-4" />
      <div className="container mx-auto w-[90%] mt-8">
        <p className="text-left text-2xl font-bold">Ingredients</p>
        <p className="text-left text-sm text-gray-600 font-semibold">
          for 2 people
        </p>
        <div className="w-full h-[2px] bg-gray-200 mt-4" />
        {data && data?.ingredients && (
          <div>
            {Object.keys(data.ingredients).map(
              (category) =>
                category !== "appliances" && (
                  <div key={category}>
                    <h3 className="text-left text-lg font-bold capitalize mt-2 w-full">
                      {category} ({data.ingredients[category].length}) <MdOutlineArrowDropDown style={{display:"inline"}}/>
                    </h3>
                    <ul className="text-left mt-4">
                      {data.ingredients[category].map((item, index) => (
                        <li
                          key={index}
                          className="text-sm text-gray-600 flex justify-between w-full"
                        >
                          <p>{item.name}:</p>
                          <p>{item.quantity || item.image}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
            )}
            <div>
              <h3 className="text-left text-xl font-bold capitalize mt-2">
                appliances
              </h3>
              <div className="flex justify-between gap-2 mt-6">
                {data.ingredients["appliances"].map((item, index) => (
                  <li
                    key={index}
                    className="text-sm bg-gray-200 flex flex-col justify-between items-center py-3 rounded-md w-full"
                  >
                    <img src={refrigerator} style={{ width: "40px" }} />
                    <p>Refrigerator</p>
                  </li>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dish;
