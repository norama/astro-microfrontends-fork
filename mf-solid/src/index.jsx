/* @refresh reload */
import { render } from 'solid-js/web'

import './index.css'
import { CounterMF1 } from './components/CounterMF1'
import { CounterMF2 } from './components/CounterMF2'

const root = document.getElementById('root')

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
  )
}

render(
  () => (
    <>
      <CounterMF1 name="TTT" />
      <CounterMF2 initialCount={5} />
    </>
  ),
  root,
)
