import { use } from "react";
import { toast } from 'react-toastify';
import Banner from '../banner/Banner';


// const cardsPromise = fetch('./tickets-data.json').then(res => res.json())
const Cards = ({ cardsPromise, progressCount, setProgressCount,tasks, setTasks }) => {

  const cardData = use(cardsPromise);



  return (
    <div className="grid md:grid-cols-2 gap-4 mt-4 mb-6">
      
      {cardData.map((data) => (
        <div  key={data.id}
              onClick={() => { 
          toast.success(`${data.title} in Progress!`);
          // setProgressCount(progressCount + 1);
            setProgressCount(prev => prev +1);
            setTasks([...tasks, {title:data.title}]);
        }} >
          <div className="flex flex-col gap-4   p-4 rounded-md bg-white text-[#627382]  cursor-pointer">
            <div className="flex justify-between">
              <h2 className="text-[#001931] font-medium text-[18px]">
                {data.title}
              </h2>
              <p
                className={`flex items-center gap-2 rounded-3xl px-4 py-2 
                            ${
                              data.status === "Open"
                                ? "bg-[#b9f8cf]  text-[#0B5E06]"
                                : "bg-[#F8F3B9]  text-[#9C7700]"
                            }`}
              >
                <span className={`rounded-full w-4 h-4 inline-block ${
                              data.status === "Open"
                                ? "bg-[#0b5e06]"
                                : "bg-[#FEBB0C]"
                            }`}></span>
                 {data.status}
              </p>
            </div>
            <div>
              <p>{data.description}</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-3">
                <p>{data.id}</p>
                <p className={`mr-1 ${ data.priority === "HIGH PRIORITY" ? "text-[#F83044]" : data.priority === "MEDIUM PRIORITY" ? "text-[#FEBB0C]" : "text-[#02A53B]" }`}> {data.priority}</p>
              </div>
              <div className="flex gap-3">
                <p>{data.customer}</p>
                <p>📅{data.createdAt}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
