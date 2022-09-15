import React from 'react'
import './App.scss'
import { Banner } from './Components/Banner'
import { Cards } from './Components/Cards'
import { Categories } from './Components/Categories'
import { Header } from './Components/Header'

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Banner />
      <Categories />
      <Cards />
    </>
  )
}

export default App
