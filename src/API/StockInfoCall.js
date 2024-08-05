export {StockInfoCall}
import {convert} from "./FormatNum.js"


async function StockInfoCall(ticker) {
    const URL = `https://albertmundadan.github.io/stock-buddy/DATA/StockInfo.json`;

    try {
        // Fetch quote data
        let response = await fetch(URL);
        let data = await response.json();
        let quoteData = data[ticker]['quote']

        // Extract sector and description
        let sector = quoteData[0].sector;
        let description = quoteData[0].description;

        // Extract price, change, and percent change
        let price = (quoteData[0].price).toFixed(2);
        let change = (quoteData[0].change).toFixed(2);
        let percentChange = (quoteData[0].changesPercentage).toFixed(2);

        let name = quoteData[0].name;
        let low = (quoteData[0].dayLow).toFixed(2);
        let high = (quoteData[0].dayHigh).toFixed(2);
        let mktCap = convert(quoteData[0].marketCap);
        let volume = convert(quoteData[0].volume);
        let open = (quoteData[0].open).toFixed(2);
        let pe = (quoteData[0].pe).toFixed(2);
        let eps = (quoteData[0].eps).toFixed(2)
        let yhigh = (quoteData[0].yearHigh).toFixed(2);
        let ylow = (quoteData[0].yearLow).toFixed(2);
        let p50avg = (quoteData[0].priceAvg50).toFixed(2)
        let p200avg = (quoteData[0].priceAvg200).toFixed(2)



        return {price, change, percentChange, name, low, high, mktCap, volume, open, pe, eps, yhigh, ylow, p50avg, p200avg, sector, description};
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

let data =  await StockInfoCall("INTC");
