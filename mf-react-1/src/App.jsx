import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <section className="app-a">
      <h1 onClick={() => setCount((c) => c + 1)} style={{ cursor: 'pointer' }}>
        ReactApp A Count: {count}
      </h1>
    </section>
  )
}

export default App
