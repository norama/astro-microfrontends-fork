import { Counter } from '../shared/Counter'
import styles from './CounterMF2.module.css'

export function CounterMF2({ initialCount = 0 }) {
  return (
    <section className={styles['app-c']}>
      <h1>Solid CounterMF2 with sssskkkkkkkkkkkkkss initial count</h1>
      <Counter initialCount={initialCount} background="blue" />
    </section>
  )
}
