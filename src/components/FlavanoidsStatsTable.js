import React from 'react'
import wineData from './data/wineData'
import {
  calculateMean,
  calculateMedian,
  calculateMode,
} from './utils/statsUtils'

const FlavanoidsStatsTable = () => {
  // Extract unique classes from the wineData
  const uniqueClasses = [...new Set(wineData.map((entry) => entry.Alcohol))]

  // Group Flavanoids data by class
  const flavanoidsDataByClass = uniqueClasses.map((classNum) => {
    return wineData
      .filter((entry) => entry.Alcohol === classNum)
      .map((entry) => entry.Flavanoids)
  })

  // Calculate the mean, median, and mode for each class
  const meanByClass = flavanoidsDataByClass.map((data) => calculateMean(data))
  const medianByClass = flavanoidsDataByClass.map((data) =>
    calculateMedian(data)
  )
  const modeByClass = flavanoidsDataByClass.map((data) => calculateMode(data))

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
            <td className='bold-cell'>Flavanoids Mean</td>
            {meanByClass.map((mean, index) => (
              <td key={index}>{mean.toFixed(3)}</td>
            ))}
          </tr>
          <tr>
            <td className='bold-cell'>Flavanoids Median</td>
            {medianByClass.map((median, index) => (
              <td key={index}>{median.toFixed(3)}</td>
            ))}
          </tr>
          <tr>
            <td className='bold-cell'>Flavanoids Mode</td>
            {modeByClass.map((mode, index) => (
              <td key={index}>{mode !== null ? mode.toFixed(3) : 'N/A'}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default FlavanoidsStatsTable
