import { CounterMF1, CounterMF2 } from 'solid-microfrontends'

/*
import { lazily } from 'solidjs-lazily'

const { CounterMF1, CounterMF2 } =
  import.meta.env.MODE === 'development'
    ? lazily(() => import('http://localhost:7300/bundle.js'))
    : lazily(() => import('solid-microfrontends'))
*/

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
