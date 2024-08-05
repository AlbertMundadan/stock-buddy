import MainStockLoader from "./MainStockLoader"
import NewsPanel from "./NewsPanel"

const CenterSection = ({name, ticker, price, change, description}) => {
  return (
    <div className="min-w-92 w-4/5 max-w-full h-184 mx-3 mt-4">
        <MainStockLoader name={name} ticker = {ticker} price = {price} dchange={change} description={description}/>
        <NewsPanel ticker = {ticker}/>
    
    </div>
    )

}

export default CenterSection