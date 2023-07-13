import styles from './Counter.module.css'
import { createSignal } from 'solid-js'

export function Counter({ initialCount = 0, background = 'red' }) {
  const [count, setCount] = createSignal(initialCount)

  return (
    <button class={styles.button} onClick={() => setCount((c) => c + 1)} style={{ background }}>
      {count()}
    </button>
  )
}
