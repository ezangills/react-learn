import React from 'react'
import NavBar from './components/NavBar';
import ProductsBrowser from './components/ProductsBrowser';
import productsMockData from './ProductsMockData.json'

const App = () => {
  return(
    <div>
    <NavBar />
    <ProductsBrowser productsData={productsMockData} />
    </div>
  )
}

export default App
