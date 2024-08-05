export {ShortMainGraphCall}

async function ShortMainGraphCall(ticker) {
    const URL = `https://albertmundadan.github.io/stock-buddy/DATA/ShortHistGraph.json`;

    try {
        // Fetch chart data
        let chartResponse = await fetch(URL);
        let data = await chartResponse.json();
        let chartData = data[ticker]['historical']

        return {chartData};
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}