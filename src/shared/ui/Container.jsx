import styles from './Container.module.css'

export function Container({ children, id, tone = 'light', className = '' }) {
  return (
    <section id={id} className={`${styles.section} ${styles[tone]} ${className}`}>
      <div className={styles.inner}>{children}</div>
    </section>
  )
}
