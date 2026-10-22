import styles from './Input.module.css'

export function Input({ label, id, error, ...rest }) {
  return (
    <div className={styles.field}>
      <label htmlFor={id}>{label}</label>
      <input id={id} aria-invalid={!!error} aria-describedby={error ? `${id}-erro` : undefined} {...rest} />
      {error && <p id={`${id}-erro`} className={styles.error}>{error}</p>}
    </div>
  )
}
