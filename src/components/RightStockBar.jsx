const RightStockBar = ({open, mktCap, high, low, pe, volume, eps, yHigh, yLow, p50avg, p200avg, sector}) => {
  return (
    <div className="min-w-72 h-184 mt-4 me-3">
          <div className="backdrop-blur-3xl bg-gray-950/40 w-full h-fit py-1 px-2 mb-3 rounded-2xl shadow-lg border-slate-900 border-2">
        <div className="text-white font-francois text-3xl mb-2">
            Daily Info
        </div>
        <div className="text-slate-400 text-md font-forum">
        <div className="overflow-x-auto">
        <table className="min-w-full">
            <tbody>
                <tr>
                    <td className="border-b-2 border-r-2 w-24 border-slate-400">Open: {open}</td>
                    <td className=" border-b-2 w-24 pl-1 border-slate-400">Mkt Cap: {mktCap}</td>
                </tr>
                <tr>
                    <td className="border-b-2 border-r-2 w-24 border-slate-400">High: {high}</td>
                    <td className=" border-b-2 w-24 pl-1 border-slate-400">Low: {low}</td>
                </tr>
                <tr>
                    <td className="border-b-2 border-r-2 w-24 border-slate-400">P/E Ratio: {pe}</td>
                    <td className=" border-b-2 w-24 pl-1 border-slate-400">EPS: {eps}</td>
                </tr>
                <tr>
                    <td className="border-b-2 border-r-2 w-24 border-slate-400">Year High: {yHigh}</td>
                    <td className=" border-b-2 w-24 pl-1 border-slate-400">Year Low: {yLow}</td>
                </tr>
                <tr>
                    <td className="border-b-2 border-r-2 w-24 border-slate-400">50 Day Avg: {p50avg}</td>
                    <td className=" border-b-2 w-24 pl-1 border-slate-400">200 Day Avg: {p200avg}</td>
                </tr>
                <tr>
                    <td className="border-b-2 border-r-2 w-24 border-slate-400">Volume: {volume}</td>
                    <td className=" border-b-2 w-24 pl-1 border-slate-400">Sector: {sector}</td>
                </tr>
                <tr>
                    <td className=" border-r-2 h-3 w-24 border-slate-400"></td>
                    <td className=" w-24 border-slate-400"></td>
                </tr>
            </tbody>
        </table>
        </div>
        </div>
    </div>
      
    </div>
  )
}

export default RightStockBar