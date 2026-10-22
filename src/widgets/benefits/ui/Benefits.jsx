import { Container } from '@/shared/ui'
import { benefits, BenefitCard } from '@/entities/benefit'
import styles from './Benefits.module.css'

export function Benefits() {
  return (
    <Container id="beneficios">
      <h2 className={styles.title}>Feito para ler em comunidade</h2>
      <div className={styles.grid}>
        {benefits.map((b) => <BenefitCard key={b.id} title={b.title} text={b.text} />)}
      </div>
    </Container>
  )
}
