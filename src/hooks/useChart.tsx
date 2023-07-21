import { useContext } from 'react'
import { ChartContext } from '../context/chart/ChartContext'

export const useChart = () => {
  return useContext(ChartContext)
}
