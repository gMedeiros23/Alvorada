import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.logo}>Alvorada</p>
      <p>Projeto fictício criado para a Atividade 01 — Landing Page de Produto. Nenhum dado é enviado ou armazenado.</p>
    </footer>
  )
}
