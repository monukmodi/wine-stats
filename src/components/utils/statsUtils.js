// Function to calculate the mean of an array of numbers
export const calculateMean = (data) => {
  const sum = data.reduce((acc, val) => acc + val, 0)
  return sum / data.length
}

// Function to calculate the median of an array of numbers
export const calculateMedian = (data) => {
  const sortedData = data.sort((a, b) => a - b)
  const mid = Math.floor(sortedData.length / 2)
  return sortedData.length % 2 !== 0
    ? sortedData[mid]
    : (sortedData[mid - 1] + sortedData[mid]) / 2
}

// Function to calculate the mode of an array of numbers
export const calculateMode = (data) => {
  const freqMap = {}
  data.forEach((val) => {
    freqMap[val] = (freqMap[val] || 0) + 1
  })

  let mode = null
  let maxFreq = 0

  for (const key in freqMap) {
    if (freqMap[key] > maxFreq) {
      mode = parseFloat(key)
      maxFreq = freqMap[key]
    }
  }

  return mode
}
