export {returnWatchlistData}

async function returnWatchlistData(ticker) {
    const chartURL = `https://albertmundadan.github.io/stock-buddy/DATA/ShortHistGraph.json`;
    const quoteURL = `https://albertmundadan.github.io/stock-buddy/DATA/StockInfo.json`;

    try {
        // Fetch chart data
        let chartResponse = await fetch(chartURL);
        let allChartData = await chartResponse.json();
        let chartData = allChartData[ticker]['historical']

        // Fetch quote data
        let quoteResponse = await fetch(quoteURL);
        let allQuoteData = await quoteResponse.json();
        let quoteData = allQuoteData[ticker]['quote']

        // Extract price, change, and percent change
        let price = quoteData[0].price;
        let change = quoteData[0].change;
        let percentChange = quoteData[0].changesPercentage;
        return { chartData, price, change, percentChange };
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}