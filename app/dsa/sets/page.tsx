import React from 'react'
import Visualizer from './visualizer'
import Terminal from './code'
import Notes from './notes'
import LeetCodePage from './problems'

const page = () => {
  return (
    <div>
      <Visualizer />
      <Terminal />
      <LeetCodePage />
      <Notes />
    </div>
  )
}

export default page
