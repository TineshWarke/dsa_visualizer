import React from 'react'
import Visualizer from './visualizer'
import Terminal from './code'
import SortingAlgorithms from './notes'
import LeetCodePage from './problems'

const Sorting = () => {
    return (
        <div>
            <Visualizer />
            <Terminal />
            <LeetCodePage />
            <SortingAlgorithms />
        </div>
    )
}

export default Sorting

