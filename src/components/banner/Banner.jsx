
import vector1 from "../../assets/vector1.png";
import vector2 from "../../assets/vector2.png";

const Banner = ({progressCount, resolveCount}) => {
    
    return (
        <div className=" bg-[hsl(0,0%,95%)] p-20">
            <div className="grid md:grid-cols-2 gap-6 h-[250px] mb-5">
                <div className="relative flex flex-col justify-center items-center p-10               
                    bg-linear-to-br from-[#422AD5] to-[#b171e8] rounded-md text-white">
                    <img className="absolute bg-no-repeat left-0" src={vector1} alt="" />
                    <img className="absolute bg-no-repeat right-0" src={vector2} alt="" />
                    <h2 className="text-[24px]">In-Progress</h2>
                    <p className="text-4xl font-bold">{progressCount}</p>
                </div>
                <div className="relative flex flex-col justify-center items-center p-10 
                    bg-linear-to-br from-[#54CF68] to-[#00827A] rounded-lg text-white">
                    <img className="absolute bg-no-repeat left-0" src={vector1} alt="" />
                    <img className="absolute bg-no-repeat right-0" src={vector2} alt="" />
                    <h2 className="text-[24px]">Resolved</h2>
                    <p className="text-4xl font-bold">{resolveCount}</p>
                </div>
            </div>
        </div>
    
    )

}

export default Banner;