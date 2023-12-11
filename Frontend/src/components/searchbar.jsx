import { TfiSearch } from "react-icons/tfi";
const SearchBar=function({setValue,value}){
    console.log(value);
    const search=function(event){
        console.log(event)
        setValue(event.target.value);
    }

    return(
        <div className=" sticky flex items-center border-2 rounded-full h-[3.5vw]  mx-[1vw] bg-[#9AD0C2]">
            <div className="ml-[1vw]">{<TfiSearch/>}</div>
            <input onChange={search} value={value} type="text"  className="focus:outline-none ml-[0.5vw] mr-4 bg-[#9AD0C2] text-lg min-w-0 w-full h-[3.3vw]"/>
        </div>
    )
}

export default SearchBar;