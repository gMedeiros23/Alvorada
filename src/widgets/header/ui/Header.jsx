import { useEffect, useState } from 'react'
import { Button } from '@/shared/ui'
import { scrollToSection } from '@/shared/lib/scrollToSection'
import styles from './Header.module.css'

const links = [['beneficios', 'Benefícios'], ['como-funciona', 'Como funciona'], ['planos', 'Planos'], ['duvidas', 'Dúvidas']]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  const navigate = (id) => {
    setMenuOpen(false)
    scrollToSection(id)
  }

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#topo" className={styles.logo} onClick={(e) => { e.preventDefault(); navigate('topo') }}>
          <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true"><path d="M2 20a11 11 0 0 1 22 0z" fill="#e8a93b" /><path d="M0 23h26" stroke="#e8a93b" strokeWidth="2" /></svg>
          Alvorada
        </a>
        <nav id="nav-principal" className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`} aria-label="Principal">
          {links.map(([id, label]) => (
            <button key={id} type="button" onClick={() => navigate(id)}>{label}</button>
          ))}
          <button className={styles.mobileCta} type="button" onClick={() => navigate('lista-de-espera')}>Entrar na lista</button>
        </nav>
        <div className={styles.desktopCta}><Button onClick={() => navigate('lista-de-espera')}>Entrar na lista</Button></div>
        <button className={styles.menuToggle} type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="nav-principal" onClick={() => setMenuOpen(!menuOpen)}>
          <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span>
          {menuOpen ? 'Fechar' : 'Menu'}
        </button>
      </div>
    </header>
  )
}
