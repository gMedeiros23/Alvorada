import { Button, Container } from '@/shared/ui'
import { scrollToSection } from '@/shared/lib/scrollToSection'
import { plans, PlanCard } from '@/entities/plan'
import { BillingToggle, useBilling } from '@/features/toggle-billing'
import styles from './Pricing.module.css'

export function Pricing() {
  const { billing, setBilling } = useBilling()
  return (
    <Container id="planos">
      <div className={styles.head}>
        <h2>Planos</h2>
        <BillingToggle value={billing} onChange={setBilling} />
      </div>
      <div className={styles.grid}>
        {plans.map((plan) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            billing={billing}
            action={
              <Button variant={plan.featured ? 'primary' : 'ghost'} onClick={() => scrollToSection('lista-de-espera')}>
                Quero o plano {plan.name}
              </Button>
            }
          />
        ))}
      </div>
    </Container>
  )
}
