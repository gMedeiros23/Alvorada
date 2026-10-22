import styles from './Button.module.css'

export function Button({ variant = 'primary', children, ...rest }) {
  return (
    <button className={`${styles.btn} ${styles[variant]}`} {...rest}>
      {children}
    </button>
  )
}
