import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import StockPage from './pages/StockPage.jsx'
import NewsPage from './pages/NewsPage.jsx'
import NotFound from './pages/NotFound.jsx'
import WatchListPage from './pages/WatchListPage.jsx'



const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route index element={<StockPage />}/>
    <Route path='/news' element={<NewsPage/>}/>
    <Route path='/watchlist' element={<WatchListPage/>}/>
    <Route path='*' element={<NotFound/>}/>
    <Route path='/:ticker' element={<StockPage/>}/>
  </>

))

const App = () => {
  localStorage.setItem('Tickers', localStorage.getItem('Tickers') || JSON.stringify([]))
  localStorage.setItem('Visited', localStorage.getItem('Visited') || JSON.stringify(0))



  return (
    <RouterProvider router={router}/>
    
    
)
}

export default App