import React from 'react'
import Visualizer from './visualizer'
import Terminal from './code'
import Notes from './notes'

const page = () => {
  return (
    <div>
      <Visualizer />
      <Notes />
      <Terminal />
    </div>
  )
}

export default page
