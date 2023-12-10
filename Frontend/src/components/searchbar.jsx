import { TfiSearch } from "react-icons/tfi";
const SearchBar=function(){
    return(
        <div className=" sticky flex items-center border-2 rounded-full h-[3.5vw] w-[21vw] bg-[#9AD0C2]">
            <div className="ml-[1vw]">{<TfiSearch/>}</div>
            <input type="text"  className="focus:outline-none ml-[0.5vw] bg-[#9AD0C2] text-lg"/>
        </div>
    )
}

export default SearchBar;