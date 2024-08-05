import { json, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import BarWatchlist from "../components/BarWatchlist"
import TickerDependent from "../components/TickerDependent"
import PopUp from "../components/PopUp"

const StockPage = () => {
  const [firstVisit, setFirstVisit] = useState(false);
  const params = useParams()

  useEffect(() => {
    const hasVisited = localStorage.getItem('Visited');
    if (hasVisited != 1) {
      setFirstVisit(true);
    }
  }, []);

  if (!params.ticker) {
    return (
        <div className="h-cover min-h-screen min-w-full w-min bg-gradient-to-b from-slate-950 via-slate-900 via-50% to-slate-950">
        {firstVisit ? (<PopUp/>): (<></>)}
        <Navbar/>
        <div className="flex justify-start ">
            <BarWatchlist/>
            <div className="min-w-92 w-4/5 max-w-full h-184 mx-3 mt-4">
                <div className=" w-full h-100 rounded-2xl mb-3">
                    <h1 className="text-gray-600 text-3xl font-francois flex justify-center py-48 ">Search by Stock Ticker For Info...</h1>
                    
                </div>
            </div>
            
        </div>

    </div>
    );
}
  return (
    <div className="min-h-screen h-max min-w-full w-min bg-gradient-to-b from-slate-950 via-slate-900 via-50% to-slate-950">
      <Navbar/>
          <div className="flex justify-around items-center ">
            <BarWatchlist/>
            <TickerDependent ticker={params.ticker}/>
          </div>
        </div>
  )
}

export default StockPage



