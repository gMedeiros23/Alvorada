import styles from './TestimonialCard.module.css'

export function TestimonialCard({ name, role, text }) {
  const initials = name.split(' ').map((n) => n[0]).slice(0, 2).join('')
  return (
    <figure className={styles.card}>
      <blockquote>{text}</blockquote>
      <figcaption>
        <span className={styles.avatar} aria-hidden="true">{initials}</span>
        <span><strong>{name}</strong><br />{role}</span>
      </figcaption>
    </figure>
  )
}
