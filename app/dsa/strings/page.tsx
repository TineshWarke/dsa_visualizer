import React from 'react'
import Terminal from './code'
import Notes from './notes'
import StringVisualizer from './visualizer'

const page = () => {
    return (
        <div>
            <StringVisualizer />
            <Notes />
            <Terminal />
        </div>
    )
}

export default page
