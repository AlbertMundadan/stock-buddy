import WatchlistCard from "./WatchlistCard"
import { useState, useEffect } from "react";

const BarWatchlist = () => {
  const [tickers, setTickers] = useState([]);

  const loadTickers = () => {
    const storedTickers = JSON.parse(localStorage.getItem('Tickers')) || [];
    setTickers(storedTickers.splice(0, 4));
  };

  useEffect(() => {
    // On component mount, retrieve tickers from localStorage if available
    loadTickers();

    const handleStorageChange = (event) => {
      if (event.key === 'Tickers') {
        loadTickers();
      }
    };

    const handleLocalChange = () => {
      loadTickers();
    };

    // Add event listener for storage changes from other tabs/windows
    window.addEventListener('storage', handleStorageChange);

    // Add custom event listener for changes within the same document
    window.addEventListener('localChange', handleLocalChange);

    // Cleanup the event listeners on component unmount
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('localChange', handleLocalChange);
    };
  }, []);

  // Function to manually trigger the custom event
  const triggerLocalChange = () => {
    const event = new Event('localChange');
    window.dispatchEvent(event);
  };

  return (
    <div className="backdrop-blur-3xl bg-gray-950/40 min-w-60 h-184 ms-3 mt-4 rounded-2xl shadow-lg border-slate-900 border-2 hidden lg:block">
      <h1 className="text-neutral-50 text-3xl font-francois pl-3 pt-2">
        Watchlist
      </h1>
      {tickers.map((ticker, index) => (
        <WatchlistCard key={index} ticker={ticker} />
      ))}
    </div>
  );
};

export default BarWatchlist;
