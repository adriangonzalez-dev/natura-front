import {useReducer} from 'react'
import { ChartContext } from './ChartContext'
import { initialState, reducer } from './reducer'

interface Props {
    children: React.ReactNode; 
}

export const ChartProvider = ({children}:Props) => {
    const [chart, dispatchChart] = useReducer(reducer, initialState)
    return (
        <ChartContext.Provider value={{chart, dispatchChart}}>
            {children}
        </ChartContext.Provider>
    )
}
