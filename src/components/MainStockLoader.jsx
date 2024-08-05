import React, { useEffect, useState } from "react";
import { MainAreaGraph } from "./MainAreaGraph";
import { Tab, TabGroup, TabList} from "@tremor/react";
import { ShortMainGraphCall } from "../API/ShortMainGraphCall";
import {LongMainGraphCall} from "../API/LongMainGraphCall";
import { Button } from "@headlessui/react";

function MainStockLoader({name, ticker, dchange, price, description}) {
    const [isLoading, setLoading] = useState(true); // Loading state
    const [shortGraphData, setShortGraphData] = useState();
    const [longGraphData, setLongGraphData] = useState();
    const [selectGraph, setSelectGraph] = useState('1');
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [tickerInWatchlist, setTickerInWatchlist] = useState(false);
    const [error, setError] = useState(false);
    let change  = dchange;
    let initial = price;

    useEffect(() => {
    const checkTickerInWatch = (ticker) => {
      const storedTickers = JSON.parse(localStorage.getItem('Tickers')) || [];
      if (storedTickers.includes(ticker)){
        setTickerInWatchlist(true)
      }else {
        setIsButtonClicked(false)
        setTickerInWatchlist(false)
      }
    };
    checkTickerInWatch(ticker);
  }, [ticker]);


    const addWatchTicker = () => {
      const storedTickers = JSON.parse(localStorage.getItem('Tickers')) || [];
      const updatedTickers = [...storedTickers, ticker];
      localStorage.setItem('Tickers', JSON.stringify(updatedTickers));
      const event = new Event('localChange');
      window.dispatchEvent(event);
      setIsButtonClicked(true);
    }

    const removeWatchTicker = () => {
      const storedTickers = JSON.parse(localStorage.getItem('Tickers')) || [];
      let updatedTickers = storedTickers.filter(function(element){
        return element !== ticker;
      })
      localStorage.setItem('Tickers', JSON.stringify(updatedTickers));
      const event = new Event('localChange');
      window.dispatchEvent(event);
      setIsButtonClicked(false);
      setTickerInWatchlist(false)
    }
    
    const renderComponent = () => {
    switch (selectGraph) {
      case 'D':
        let DchartData = shortGraphData['chartData'].slice(0, 26);
        change = dchange;
        initial = (DchartData[DchartData.length - 1]['open']).toFixed(2);
        return [change, initial, <MainAreaGraph change={dchange} chartData={DchartData} category={'open'}/>];
      case 'W':
        let WchartData = shortGraphData['chartData'];
        initial = ( WchartData[WchartData.length - 1]['open']).toFixed(2);
        change = (price - WchartData[WchartData.length - 1]['open']).toFixed(2);
        return [change, initial, <MainAreaGraph change={change} chartData={WchartData} category={'open'}/>];
      case 'M':
        let MchartData = longGraphData['chartData']['historical'].slice(0,21);
        initial = (MchartData[MchartData.length - 1]['close']).toFixed(2);
        change = (price - MchartData[MchartData.length - 1]['close']).toFixed(2)
        return [change, initial, <MainAreaGraph change={change} chartData={MchartData} category={'close'}/>];
      case 'Y':
        let YchartData = longGraphData['chartData']['historical'].slice(0,252);
        initial = (YchartData[YchartData.length - 1]['close']).toFixed(2);
        change = (price - YchartData[YchartData.length - 1]['close']).toFixed(2)
        return [change, initial, <MainAreaGraph change={change} chartData={YchartData} category={'close'}/>];
      case 'YY':
        let YYchartData = longGraphData['chartData']['historical'];
        initial = (YYchartData[YYchartData.length - 1]['close']).toFixed(2)
        change = (price - YYchartData[YYchartData.length - 1]['close']).toFixed(2)
        return [change, initial, <MainAreaGraph change={change} chartData={YYchartData} category={'close'}/>];
      default:
        let defaultChartData = shortGraphData['chartData'].slice(0, 26);
        change = dchange;
        initial = (defaultChartData[defaultChartData.length - 1]['open']).toFixed(2);
        return [change, initial, <MainAreaGraph change={dchange} chartData={defaultChartData} category={'open'}/>];
    }
  };

    useEffect(() => {
        const fetchData = async () => {
          try {
            const sResponse = await ShortMainGraphCall(ticker);
            setShortGraphData(sResponse);
            const lResponse = await LongMainGraphCall(ticker);
            setLongGraphData(lResponse);
            setLoading(false);
          } catch (error) {
            console.error(error);
            setError(true);
            setLoading(false);
          }
        };
    
        fetchData();
      }, [name, ticker, dchange, price, description]);
 
    if (isLoading) {
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100vh",
                }}
            >
                Loading the data{" "}
            </div>
        );
    }
    let result = renderComponent();
    change = result[0];
    initial = result[1]
    let pChange = ((change/initial) * 100).toFixed(2);
    const color = change >= 0 ? 'text-green-500 ' : 'text-red-500';
    const sign = change >= 0 ? "+" : '';

    return (
      <>
      <div className="backdrop-blur-3xl bg-gray-950/40 w-full h-100 rounded-2xl shadow-lg border-slate-900 border-2 mb-3">
        <div className="text-neutral-50  font-francois flex justify-between pt-2">
          <div className="flex">
            <div className="pl-3 pb-0.5 pr-3 text-4xl">{name} ({ticker})</div>
            <div className="flex items-center text-sm">

            {(isButtonClicked || tickerInWatchlist) ? (
              <Button className="flex items-center gap-1 px-2 text-white bg-gray-800 rounded-2xl" onClick={removeWatchTicker}>
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="m3 3 1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 0 1 1.743-1.342 48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664 19.5 19.5" />
  </svg>
  
                <div className="py-2">
                Remove
                </div>
              </Button>

             ) : (

            <Button className="flex items-center gap-1 px-2 text-white bg-gray-800 rounded-2xl" onClick={addWatchTicker}>
<svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
</svg>

              <div className="py-2">
              Add to Watchlist
              </div>
            </Button>
            )}




            </div>
          </div>
          
          <div className="pr-3 text-4xl">${price}</div>
        </div>
        
        <div className="text-lg font-extrabold pl-4 flex">
          <div className={color}>{sign}{change} ({pChange}%)</div>

          <div className="me-2 mb ml-auto justify-end">
          <div className="hidden sm:block">
            <TabGroup>
              <TabList variant="solid" defaultValue={selectGraph}>
                <Tab value="D" onClick={()=> setSelectGraph('D')}>1 Day</Tab>
                <Tab value="W" onClick={()=> setSelectGraph('W')}>1 Week</Tab>
                <Tab value="M" onClick={()=> setSelectGraph('M')}>1 Month</Tab>
                <Tab value="Y" onClick={()=> setSelectGraph('Y')}>1 Year</Tab>
                <Tab value="YY" onClick={()=> setSelectGraph('YY')}>5 Years</Tab>
              </TabList>
            </TabGroup>
          </div>
          </div>
          </div>


        <div className="pr-3 mt-4 flex">
          {result[2]}
          <div className="hidden tiny:block sm:hidden">
          <div className="flex me-2 mb ml-auto justify-end">
            <TabGroup>
                <Tab value="D" onClick={()=> setSelectGraph('D')}>1 Day</Tab>
                <Tab value="W" onClick={()=> setSelectGraph('W')}>1 Week</Tab>
                <Tab value="M" onClick={()=> setSelectGraph('M')}>1 Month</Tab>
                <Tab value="Y" onClick={()=> setSelectGraph('Y')}>1 Year</Tab>
                <Tab value="YY" onClick={()=> setSelectGraph('YY')}>5 Years</Tab>
            </TabGroup>
            </div>
          </div>

        </div>
          <div className="my-3 pt px-3">
          <div className="text-slate-400 text-md font-forum hidden sm:block">
            <div className="text-pretty line-clamp-3 ">
              {description}...
            </div>
          </div>
        </div>
       
      </div>

      </>
    )
}
 
export default MainStockLoader;