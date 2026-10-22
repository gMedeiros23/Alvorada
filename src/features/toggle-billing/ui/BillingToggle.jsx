import styles from './BillingToggle.module.css'

export function BillingToggle({ value, onChange }) {
  const options = [['monthly', 'Mensal'], ['annual', 'Anual (20% off)']]
  return (
    <div className={styles.group} role="group" aria-label="Periodicidade do plano">
      {options.map(([key, label]) => (
        <button key={key} type="button" aria-pressed={value === key} className={value === key ? styles.on : ''} onClick={() => onChange(key)}>
          {label}
        </button>
      ))}
    </div>
  )
}
