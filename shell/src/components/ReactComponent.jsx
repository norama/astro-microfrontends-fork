import React, { useEffect } from 'react'
import MicroFrontend1 from 'react-microfrontend1'
import MicroFrontend2 from 'react-microfrontend2'

// this does not work in dev mode due to different react versions
const ReactComponent = () => (
  <>
    <MicroFrontend1 />
    <MicroFrontend2 />
  </>
)

export default ReactComponent
