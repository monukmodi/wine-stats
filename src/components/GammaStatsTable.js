import React from 'react'
import wineData from './data/wineData'
import {
  calculateMean,
  calculateMedian,
  calculateMode,
} from './utils/statsUtils'

const GammaStatsTable = () => {
  // Extract unique classes (Alcohol values) from the wine data
  const uniqueClasses = [...new Set(wineData.map((entry) => entry.Alcohol))]

  // Calculate Gamma values for each class and group them accordingly
  const gammaDataByClass = uniqueClasses.map((classNum) => {
    return wineData
      .filter((entry) => entry.Alcohol === classNum)
      .map((entry) => (entry.Ash * entry.Hue) / entry.Magnesium)
  })

  // Calculate the mean, median, and mode for Gamma values in each class
  const meanByClass = gammaDataByClass.map((data) => calculateMean(data))
  const medianByClass = gammaDataByClass.map((data) => calculateMedian(data))
  const modeByClass = gammaDataByClass.map((data) => calculateMode(data))

  return (
    <div className='center-table'>
      <table className='wine-table'>
        <thead>
          <tr>
            <th>Measure</th>
            {uniqueClasses.map((classNum) => (
              <th key={classNum}>Class {classNum}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='bold-cell'>Gamma Mean</td>
            {meanByClass.map((mean, index) => (
              <td key={index}>{mean.toFixed(3)}</td>
            ))}
          </tr>
          <tr>
            <td className='bold-cell'>Gamma Median</td>
            {medianByClass.map((median, index) => (
              <td key={index}>{median.toFixed(3)}</td>
            ))}
          </tr>
          <tr>
            <td className='bold-cell'>Gamma Mode</td>
            {modeByClass.map((mode, index) => (
              <td key={index}>{mode !== null ? mode.toFixed(3) : 'N/A'}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default GammaStatsTable
