import React, { useEffect } from 'react'
import { injectMicroFrontend1 } from 'react-microfrontend1'
import { injectMicroFrontend2 } from 'react-microfrontend2'

const mountpoint1 = 'mf1'
const mountpoint2 = 'mf2'

// this works in dev mode
const ReactComponent2 = () => {
  useEffect(() => {
    injectMicroFrontend1(mountpoint1)
    injectMicroFrontend2(mountpoint2)
  }, [])

  return (
    <>
      <div id={mountpoint1} />
      <div id={mountpoint2} />
    </>
  )
}

export default ReactComponent2
