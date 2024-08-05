export {NewsPageCall}

async function NewsPageCall(industry) {
    const URL = `https://albertmundadan.github.io/stock-buddy/DATA/NewsPageData.json`;

    try {
        // Fetch news data
        let newsResponse = await fetch(URL);
        let allNews = await newsResponse.json();
        let industryNews = allNews[industry];

        // Extract title, url, image, date, source
        let title1 = industryNews.data[0].title;
        let url1 = industryNews.data[0].url;
        let image1 = industryNews.data[0].image_url;
        let date1 = (industryNews.data[0].published_at).slice(0, 10);
        let source1 = industryNews.data[0].source;
        
        let title2 = industryNews.data[1].title;
        let url2 = industryNews.data[1].url;
        let image2 = industryNews.data[1].image_url;
        let date2 = (industryNews.data[1].published_at).slice(0, 10);
        let source2 = industryNews.data[1].source;

        let title3 = industryNews.data[2].title;
        let url3 = industryNews.data[2].url;
        let image3 = industryNews.data[2].image_url;
        let date3 = (industryNews.data[2].published_at).slice(0, 10);
        let source3 = industryNews.data[2].source;

        return [{title: title1, url: url1, image: image1, date: date1, source: source1},
                {title: title2, url: url2, image: image2, date: date2, source: source2},
                {title: title3, url: url3, image: image3, date: date3, source: source3}
        ];

    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

let results =  await NewsPageCall("technology");

