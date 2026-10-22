import { Container } from '@/shared/ui'
import styles from './HowItWorks.module.css'

const steps = [
  { title: 'Crie ou entre em um grupo', text: 'Convide a célula, a família ou os amigos com um link.' },
  { title: 'Escolha o plano de leitura', text: 'Defina a duração e o livro por onde o grupo vai começar.' },
  { title: 'Leia o trecho do dia', text: 'Cada pessoa lê no seu horário e na tradução que preferir.' },
  { title: 'Comente junto', text: 'Deixe perguntas e reflexões para conversar na próxima reunião.' },
]

export function HowItWorks() {
  return (
    <Container id="como-funciona" tone="dark">
      <h2 className={styles.title}>Como funciona</h2>
      <ol className={styles.steps}>
        {steps.map((s, i) => (
          <li key={s.title}>
            <span className={styles.num}>{i + 1}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </li>
        ))}
      </ol>
    </Container>
  )
}
