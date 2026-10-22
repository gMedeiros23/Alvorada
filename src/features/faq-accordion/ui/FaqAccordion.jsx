import { useState } from 'react'
import styles from './FaqAccordion.module.css'

export function FaqAccordion({ items }) {
  const [openId, setOpenId] = useState(null)
  return (
    <div className={styles.list}>
      {items.map((item) => {
        const open = openId === item.id
        return (
          <div key={item.id} className={styles.item}>
            <h3>
              <button type="button" aria-expanded={open} aria-controls={`faq-${item.id}`} onClick={() => setOpenId(open ? null : item.id)}>
                {item.question}
                <span className={open ? styles.open : ''} aria-hidden="true">+</span>
              </button>
            </h3>
            {open && <p id={`faq-${item.id}`}>{item.answer}</p>}
          </div>
        )
      })}
    </div>
  )
}
