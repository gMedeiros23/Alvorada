import { Container } from '@/shared/ui'
import { testimonials, TestimonialCard } from '@/entities/testimonial'
import styles from './Testimonials.module.css'

export function Testimonials() {
  return (
    <Container id="depoimentos" tone="paper">
      <h2 className={styles.title}>Quem já testou</h2>
      <div className={styles.grid}>
        {testimonials.map((t) => <TestimonialCard key={t.id} {...t} />)}
      </div>
    </Container>
  )
}
