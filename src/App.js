import React from 'react'

import ReactFlow from 'react-flow-renderer'

import CustomNode from './CustomNode'

import './App.css'

const App = () => {
  return (
    <div className="App">
      <ReactFlow
        elements={[
          {
            id: '1',
            type: 'customNode',
            data: {},
            style: {
              border: '1px black solid',
              padding: 20
            },
            position: { x: 300, y: 50 }
          }
        ]}
        nodeTypes={{
          customNode: CustomNode
        }}
      />
    </div>
  )
}

export default App
