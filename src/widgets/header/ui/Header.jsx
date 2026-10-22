import { Button } from '@/shared/ui'
import { scrollToSection } from '@/shared/lib/scrollToSection'
import styles from './Header.module.css'

const links = [['beneficios', 'Benefícios'], ['como-funciona', 'Como funciona'], ['planos', 'Planos'], ['duvidas', 'Dúvidas']]

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#topo" className={styles.logo} onClick={(e) => { e.preventDefault(); scrollToSection('topo') }}>
          <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true"><path d="M2 20a11 11 0 0 1 22 0z" fill="#e8a93b" /><path d="M0 23h26" stroke="#e8a93b" strokeWidth="2" /></svg>
          Alvorada
        </a>
        <nav className={styles.nav} aria-label="Principal">
          {links.map(([id, label]) => (
            <button key={id} type="button" onClick={() => scrollToSection(id)}>{label}</button>
          ))}
        </nav>
        <Button onClick={() => scrollToSection('lista-de-espera')}>Entrar na lista</Button>
      </div>
    </header>
  )
}
