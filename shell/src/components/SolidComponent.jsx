import { CounterMF1, CounterMF2 } from 'solid-microfrontends'

function App() {
  return (
    <>
      <CounterMF1 name="John" />
      <hr />
      <CounterMF2 initialCount={3} />
    </>
  )
}

export default App
