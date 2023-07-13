import React, { useEffect } from 'react'
import MicroFrontendA from 'http://localhost:7100/bundle.js'
import MicroFrontendB from 'http://localhost:7200/bundle.js'

// this does not work in devmode due to different react versions
const ReactComponent = () => (
  <>
    <MicroFrontendA />
    <MicroFrontendB />
  </>
)

export default ReactComponent
