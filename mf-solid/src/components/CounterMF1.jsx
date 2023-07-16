import { Counter } from '../shared/Counter'
import styles from './CounterMF1.module.css'

export function CounterMF1({ name }) {
  return (
    <section className={styles['app-c']}>
      <h1>Solid CounterMF1 with name: {name}</h1>
      <Counter background="green" />
    </section>
  )
}
