import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
    const [ticker, setTicker] = useState('');
    let navigate = useNavigate();

    const handleInputChange = (event) => {
        setTicker(event.target.value.toUpperCase());
      };
    
    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/${ticker}`);
      };
  return (
    <>

<form className="w-3/6 max-w-xl px-5 ml-5 justify-center  mr-40 grow" method="post" onSubmit={handleSearch}>   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" value = {ticker} onChange={handleInputChange} id="default-search" className="block w-full h-12 p-4 ps-10 mt-2 text-sm  border border-slate-800 rounded-2xl bg-slate-800 text-white focus:ring-blue-500 focus:border-blue-500 " placeholder="Search by Stock Ticker..." required />
        <button type="submit" className="text-white absolute end-1 bottom-1.5 invisible md:visible bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search </button>
    </div>
</form>

    
    </>
  )
}

export default Searchbar


{/* */}