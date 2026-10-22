import styles from './BenefitCard.module.css'

export function BenefitCard({ title, text }) {
  return (
    <article className={styles.card}>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )
}
