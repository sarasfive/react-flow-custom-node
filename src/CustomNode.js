import React, { memo, useState } from 'react'

import { Handle } from 'react-flow-renderer'

export default memo(({ data }) => {
  const [sourceHandles, setSourceHandles] = useState([])

  return (
    <>
      <Handle type="target" position="left" style={{ background: '#555' }} />

      <div>
        <button
          onClick={() => setSourceHandles([...sourceHandles, {}])}
          style={{
            height: 40,
            width: '100%',
            marginBottom: sourceHandles.length > 0 ? 20 : 0
          }}
        >
          Add Source Handle
        </button>
      </div>

      {sourceHandles.map((sourceHandle, index) => (
        <>
          <div style={{ height: 16 }}>Source Handle {index}</div>
          <Handle
            key={index}
            type="source"
            position="right"
            id={index}
            style={{ top: 90 + 16 * index }}
          />
        </>
      ))}
    </>
  )
})
