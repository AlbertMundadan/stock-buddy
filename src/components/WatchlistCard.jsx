import React, { useEffect, useState } from "react";
import { returnWatchlistData } from "../API/WatchlistCall"; 
import { WatchAreaGraph } from "./WatchAreaGraph";
import LoadingCard from "../components/LoadingCard"
import { Link } from "react-router-dom";

function WatchlistCard({ticker}) {
    const [isLoading, setLoading] = useState(true); // Loading state
    const [data, setData] = useState(); // Data state
    const [error, setError] = useState(false);
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await returnWatchlistData(ticker);
            setData(response);
            setLoading(false);
          } catch (error) {
            console.error(error);
            setError(true);
            setLoading(false);
          }
        };
    
        fetchData();
      }, [ticker]);
 
    if (isLoading) {
        return (
           <LoadingCard/>
        );
    }if (error) {
      return(
        <div className="flex justify-center">
          <div className="backdrop-blur-3xl  bg-white/5 w-56 h-40  mt-2.5 py-1 px-2  rounded-2xl font-francois">
            <div className="text-neutral-50 text-lg" >
              <h1 className="text-md font-bold text-white font-forum pt-20 flex justify-center">Error: Server Did not Respond</h1> 
            </div>
          </div>
        </div>
    )
    }
    let change = data['change'];
    const color = change >= 0 ? 'text-green-500 ' : 'text-red-500';
    const sign = change >= 0 ? "+" : '';
    return (
      <div className="flex justify-center">
          <div className="backdrop-blur-3xl  bg-white/5 w-56 h-40  mt-2.5 py-1 px-2  rounded-2xl font-francois">
            <div className="text-neutral-50 text-lg flex justify-between" >
              <Link to={`/${ticker}`}>
              <div>{ticker}</div>
              </Link>
              <div>${data['price'].toFixed(2)}</div>
            </div>
            <div className="text-sm">
              <div className={color}>{sign}{data['change'].toFixed(2)} ({data['percentChange'].toFixed(2)}%)</div>
            </div>

            <WatchAreaGraph chartData = {data['chartData'].slice(0, 26)} change = {change}/>
          </div>
    </div>
    )
}
 
export default WatchlistCard;