import React, { useEffect, useState } from "react";
import LoadingNewsCard from "./LoadingCard"
import NewsCard from "./NewsCard";
import { returnBarNewsData } from "../API/NewsCall";

function NewsPanel({ticker}) {
    const [isLoading, setLoading] = useState(true); // Loading state
    const [title1, setTitle1] = useState(); 
    const [title2, setTitle2] = useState(); 
    const [title3, setTitle3] = useState(); 
    const [link1, setLink1] = useState(); 
    const [link2, setLink2] = useState(); 
    const [link3, setLink3] = useState(); 
    const [imgURL1, setImgURL1] = useState(); 
    const [imgURL2, setImgURL2] = useState(); 
    const [imgURL3, setImgURL3] = useState(); 
    const [date1, setDate1] = useState(); 
    const [date2, setDate2] = useState(); 
    const [date3, setDate3] = useState(); 
    const [source1, setSource1] = useState(); 
    const [source2, setSource2] = useState(); 
    const [source3, setSource3] = useState(); 
    const [error, setError] = useState(false);
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await returnBarNewsData(ticker);
            setTitle1(response['title1']);
            setTitle2(response['title2']);
            setTitle3(response['title3']);

            setLink1(response['url1']);
            setLink2(response['url2']);
            setLink3(response['url3']);

            setImgURL1(response['image1']);
            setImgURL2(response['image2']);
            setImgURL3(response['image3']);

            setDate1(response['date1']);
            setDate2(response['date2']);
            setDate3(response['date3']);

            setSource1(response['source1'])
            setSource2(response['source2'])
            setSource3(response['source3'])
            
            setLoading(false);

          } catch (error) {
            console.error(error);
            setError(true);
            setLoading(false);
          }
        };
    
        fetchData();
      }, [ticker]);
 
    if (isLoading) {
        return (
           <LoadingNewsCard/>

        );
    }
    return (
        <div className="backdrop-blur-3xl bg-gray-950/20 min-w-96 h-65 rounded-2xl shadow-lg border-slate-900 border-2 px-1">
            <div className="flex md:justify-around justify-center">
                <div>
                  <NewsCard 
                    title={title1} 
                    link={link1}
                    imgURL={imgURL1}
                    date={date1}
                    source={source1}  />
                </div>

                <div className="hidden xl:block md:block lg:hidden">
                  <NewsCard 
                    title={title2} 
                    link={link2}
                    imgURL={imgURL2}
                    date={date2}
                    source={source2}  />
                </div>

                <div className="hidden 2xl:block">
                  <NewsCard 
                    title={title3} 
                    link={link3}
                    imgURL={imgURL3}
                    date={date3}
                    source={source3}  />
                </div>

            </div>
    </div>
    )
}
 
export default NewsPanel;