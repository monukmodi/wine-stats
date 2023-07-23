import React from 'react'
import FlavanoidsStatsTable from './components/FlavanoidsStatsTable'
import GammaStatsTable from './components/GammaStatsTable'
import './App.css'

const App = () => {
  return (
    <div>
      <h2 className='head-center'>Flavanoids Stats</h2>
      <FlavanoidsStatsTable />

      <h2 className='head-center'>Gamma Stats</h2>
      <GammaStatsTable />
    </div>
  )
}

export default App
