import { SlCalender } from "react-icons/sl";
const DateInput = () => {
  return (
      <>
      <div className="relative flex items-center h-12 max-w-36 rounded-full focus-within:shadow-lg overflow-hidden">
        <div className="grid place-items-center h-full w-12 bg-gray-900">
        <SlCalender color="#FFFFFF" size={20} className='mx-4'/>
        </div>
        <input
        className="bg-gray-900 peer h-full w-full outline-none text-sm text-white pr-2"
        type="text"
        id="search"
        placeholder="Oct 22,2022" /> 
    </div>
      </>
  )
}

export default DateInput
