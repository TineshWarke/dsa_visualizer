import React from 'react'
import Terminal from './code'
import Notes from './notes'
import StringVisualizer from './visualizer'
import LeetCodePage from './problems'

const page = () => {
    return (
        <div>
            <StringVisualizer />
            <Terminal />
            <LeetCodePage />
            <Notes />
        </div>
    )
}

export default page
