import NewsImageHandler from "./NewsImageHandler"

const NewsCard = ({title, link, imgURL, date, source}) => {
  return (
    <div className="flex">
        <div className="backdrop-blur-3xl  bg-white/5 w-72 min-h-60 my-2 py-2 px-3 rounded-2xl font-francois ">
        <div className="text-neutral-50 text-2xl text-wrap" >
            <a className="line-clamp-2 mb-2 hover:text-blue-700 hover:underline" href={link}>
            {title}
            </a>
        </div>
        <div className="mt-4">
          <NewsImageHandler imgURL={imgURL}/>
          
        </div>
     
        <div className="text-slate-600 text-sm mt-1"> {date} @ {source} </div>
        </div>
    </div>
  )
}

export default NewsCard