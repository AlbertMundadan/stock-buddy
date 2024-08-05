import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar"
import LoadingNewsCard from "../components/LoadingCard"
import NewsCard from "../components/NewsCard"
import { NewsPageCall } from "../API/NewsPageCall";

function NewsPage({}){
  const [isLoading, setLoading] = useState(true);
  const [response, setResponse] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let techResp = await NewsPageCall('technology');
        let finResp = await NewsPageCall('financial');
        let energyResp = await NewsPageCall('energy');
        let healthResp = await NewsPageCall('healthcare');
        setResponse(techResp.concat(finResp, energyResp, healthResp));
        setLoading(false);

      }
      catch (error) {
        console.error(error);
        setError(true);
        setLoading(false);
      }
    };
    fetchData();
    }, []);
    if (isLoading) {
      return (
        <div className="min-h-screen h-max min-w-full w-min bg-gradient-to-b from-slate-950 via-slate-900 via-50% to-slate-950">
        <Navbar/>
        <div className='min-h-max mx-3 mt-3 flex justify-center p-4">'>
          <div className='grid gap-x-16 gap-y-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"'>
            <LoadingNewsCard/>
            <LoadingNewsCard/>
            <LoadingNewsCard/>
            <LoadingNewsCard/>
            <LoadingNewsCard/>
            <LoadingNewsCard/>
            <LoadingNewsCard/>
            <LoadingNewsCard/>
            <LoadingNewsCard/>
            <LoadingNewsCard/>
            <LoadingNewsCard/>
            <LoadingNewsCard/>
          </div>
    </div>
  </div>
);
  }
  if (error) {
    return(        
    <div className="min-h-screen h-max min-w-full w-min bg-gradient-to-b from-slate-950 via-slate-900 via-50% to-slate-950">
      <Navbar/>
      <div className="">
        <div className='min-h-max">'>
          <h1 className="text-3xl font-bold mb-4 text-white font-forum pt-20 flex justify-center">Error: Server Did not Respond</h1>
        <div className="flex justify-center">
        <a
            href="/"
            className="text-white font-forum bg-gray-800 w-32 hover:bg-gray-600 rounded-md px-3 py-2"
        >
            Go Back
        </a>
        </div>
        </div>
      </div>
    </div>
  )
  }
  return (
    <div className="min-h-screen h-max min-w-full w-min bg-gradient-to-b from-slate-950 via-slate-900 via-50% to-slate-950">
    <Navbar/>
    <div className='min-h-max mx-3 mt-3 flex justify-center p-4">'>
      <div className='grid gap-x-16 gap-y-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"'>
      {response.map((news, index) => (
          <NewsCard key={index} title={news.title} link={news.url} imgURL={news.image} date={news.date} source={news.source} />
        ))}
      </div>

    </div>

  </div>
  )
}

export default NewsPage;