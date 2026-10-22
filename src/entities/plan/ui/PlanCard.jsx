import styles from './PlanCard.module.css'

export function PlanCard({ plan, billing, action }) {
  const price = billing === 'annual' ? plan.annual : plan.monthly
  return (
    <article className={`${styles.card} ${plan.featured ? styles.featured : ''}`}>
      {plan.featured && <p className={styles.badge}>Mais escolhido</p>}
      <h3>{plan.name}</h3>
      <p className={styles.desc}>{plan.description}</p>
      <p className={styles.price}>
        {price === 0 ? 'Grátis' : <>R$ {price}<small>/mês</small></>}
      </p>
      <ul>{plan.features.map((f) => <li key={f}>{f}</li>)}</ul>
      {action}
    </article>
  )
}
