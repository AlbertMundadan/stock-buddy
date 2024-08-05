import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar"
import WatchlistCardPage from "../components/WatchlistCardPage";

function WatchListPage({}){
  const [tickers, setTickers] = useState([]);

  useEffect(() => {
    const loadTickers = () => {
      const storedTickers = JSON.parse(localStorage.getItem('Tickers')) || [];
      setTickers(storedTickers.slice(0, 12));
    };

    loadTickers();
}, []);

  return (
    <div className="min-h-screen h-max min-w-full w-min bg-gradient-to-b from-slate-950 via-slate-900 via-50% to-slate-950">
    <Navbar/>
    <div className='min-h-max mx-3 mt-3 flex justify-center p-4">'>
    {tickers.length == 0 ?
        <h2 className="text-gray-600 text-3xl font-francois flex justify-center px-8 py-48 ">
          Add Stocks to Watchlist to View.
        </h2>
      :
      <div className='grid gap-x-16 gap-y-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 3xl:grid-cols-6'>
      {tickers.map((ticker, index) => (
        <WatchlistCardPage key={index} ticker={ticker} />
      ))}
    
      </div>}
    </div>
  </div>
  )
}

export default WatchListPage;