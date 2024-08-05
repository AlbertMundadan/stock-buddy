export {LongMainGraphCall}

async function LongMainGraphCall(ticker) {
    const URL = `https://albertmundadan.github.io/stock-buddy/DATA/LongHistGraph.json`;

    try {
        // Fetch chart data
        let chartResponse = await fetch(URL);
        let allData = await chartResponse.json();
        let chartData = allData[ticker];
        return {chartData};

    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

