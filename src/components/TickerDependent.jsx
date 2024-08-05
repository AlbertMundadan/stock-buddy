import CenterSection from "./CenterSection";
import RightStockBar from "./RightStockBar";
import { StockInfoCall } from "../API/StockInfoCall";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";



function TickerDependent({ticker}) {
    const [isLoading, setLoading] = useState(true); // Loading state
    const [price, setPrice] = useState();
    const [change, setChange] = useState();
    const [name, setName] = useState();
    const [low, setLow] = useState();
    const [high, setHigh] = useState();
    const [mktCap, setMktCap] = useState();
    const [volume, setVolume] = useState();
    const [open, setOpen] = useState();
    const [pe, setPe] = useState();
    const [eps, setEps] = useState();
    const [yhigh, setYhigh] = useState();
    const [ylow, setYlow] = useState();
    const [p50avg, setP50avg] = useState();
    const [p200avg, setP200avg] = useState();
    const [sector, setSector] = useState();
    const [description, setDescription] = useState();
    const [error, setError] = useState(false)
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            // Fetch data
            const response = await StockInfoCall(ticker);
            setPrice(response['price']);
            setChange(response['change']);
            
            setName(response['name']);
            setLow(response['low']);
            setHigh(response['high']);
            setMktCap(response['mktCap']);
            setVolume(response['volume']);
            setOpen(response['open']);
            setPe(response['pe']);
            setEps(response['eps']);
            setYhigh(response['yhigh']);
            setYlow(response['ylow']);
            setP50avg(response['p50avg']);
            setP200avg(response['p200avg']);
            setSector(response['sector']);
            setDescription(response['description'])
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
          <>
          <div className="min-w-92 w-4/5 max-w-full h-184 mx-3 mt-4">
            <div className=" w-full h-100 rounded-2xl shadow-lg border-slate-900 border-2 mb-3">
            <Loading/>
            </div>
            <div className=" min-w-96 h-65 rounded-2xl shadow-lg border-slate-900 border-2 px-1">
            <Loading/>
            </div>
          </div>
          <div className="hidden semi:block"> 
            <div className="min-w-72 h-184 mt-4 me-3">
              <div className="w-full h-60 py-1 px-2 mb-3 rounded-2xl shadow-lg border-slate-900 border-2">
              <Loading/>
              </div>
            </div>
          </div>
  
        </>
        );
    }
    if (error) {
      return (
        <>
        <div className="min-w-92 w-4/5 max-w-full h-184 mx-3 mt-4">
          <div className="backdrop-blur-3xl bg-gray-950/40 w-full h-100 rounded-2xl shadow-lg border-slate-900 border-2 mb-3">
            <div className="text-white text-3xl font-francois justify-center flex pt-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-9 mr-3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>

              Info Not Found. Please Verify Ticker. 

            </div>
          </div>
          <div className="backdrop-blur-3xl bg-gray-950/20 min-w-96 h-65 rounded-2xl shadow-lg border-slate-900 border-2 px-1">
          </div>
        </div>
        <div className="hidden semi:block"> 
          <div className="min-w-72 h-184 mt-4 me-3">
            <div className="backdrop-blur-3xl bg-gray-950/40 w-full h-60 py-1 px-2 mb-3 rounded-2xl shadow-lg border-slate-900 border-2">
            </div>
          </div>
        </div>

      </>

      );
  }
    return (
      <>
        <CenterSection ticker = {ticker} name={name} price={price} change={change} description={description}/>
        <div className="hidden semi:block"> 
          <RightStockBar open = {open} mktCap={mktCap} high={high} low={low} pe={pe} volume={volume} 
          eps={eps} yHigh={yhigh} yLow={ylow} p50avg={p50avg} p200avg={p200avg} sector={sector}/>
        </div>

      </>
    )
}
 
export default TickerDependent;