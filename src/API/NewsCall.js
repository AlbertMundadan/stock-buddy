export {returnBarNewsData}

async function returnBarNewsData(ticker) {
    const URL = `https://albertmundadan.github.io/stock-buddy/DATA/TickerNewsData.json`;

    try {
        // Fetch news data
        let newsResponse = await fetch(URL);
        let allNews = await newsResponse.json();
        let tickerNews = allNews[ticker];

        // Extract title, url, image, date, source
        let title1 = tickerNews.data[0].title;
        let url1 = tickerNews.data[0].url;
        let image1 = tickerNews.data[0].image_url;
        let date1 = (tickerNews.data[0].published_at).slice(0, 10);
        let source1 = tickerNews.data[0].source;
        
        let title2 = tickerNews.data[1].title;
        let url2 = tickerNews.data[1].url;
        let image2 = tickerNews.data[1].image_url;
        let date2 = (tickerNews.data[1].published_at).slice(0, 10);
        let source2 = tickerNews.data[1].source;

        let title3 = tickerNews.data[2].title;
        let url3 = tickerNews.data[2].url;
        let image3 = tickerNews.data[2].image_url;
        let date3 = (tickerNews.data[2].published_at).slice(0, 10);
        let source3 = tickerNews.data[2].source;

        return {title1, url1, image1, date1, source1,
                title2, url2, image2, date2, source2,
                title3, url3, image3, date3, source3
        };

    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}