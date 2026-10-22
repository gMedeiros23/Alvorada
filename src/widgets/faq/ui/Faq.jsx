import { Container } from '@/shared/ui'
import { faqItems } from '@/entities/faq-item'
import { FaqAccordion } from '@/features/faq-accordion'
import styles from './Faq.module.css'

export function Faq() {
  return (
    <Container id="duvidas" tone="paper">
      <h2 className={styles.title}>Dúvidas frequentes</h2>
      <FaqAccordion items={faqItems} />
    </Container>
  )
}
