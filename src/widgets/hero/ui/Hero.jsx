import { Button } from '@/shared/ui'
import { scrollToSection } from '@/shared/lib/scrollToSection'
import { WaitlistForm } from '@/features/join-waitlist'
import styles from './Hero.module.css'

const days = ['S', 'T', 'Q', 'Q', 'S', 'S', 'D']
const done = [true, true, true, true, false, false, false]

export function Hero() {
  return (
    <section id="topo" className={styles.hero}>
      <div className={styles.sun} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.copy}>
          <h1>Leia a Bíblia junto com quem caminha com você.</h1>
          <p>O Alvorada é um plano de leitura em grupo: um trecho por dia, anotações compartilhadas e um lembrete no seu horário.</p>
          <div className={styles.actions}>
            <Button variant="ghost" onClick={() => scrollToSection('como-funciona')}>Ver como funciona</Button>
          </div>
          <div id="lista-de-espera" className={styles.form}>
            <WaitlistForm />
          </div>
        </div>

        <div className={styles.phone} aria-label="Prévia do aplicativo">
          <p className={styles.small}>Célula Betel · Evangelho de João</p>
          <h2>Dia 12 · João 4:1–26</h2>
          <div className={styles.week}>
            {days.map((d, i) => <span key={i} className={done[i] ? styles.on : ''}>{d}</span>)}
          </div>
          <div className={styles.note}>
            <strong>Marina</strong>
            <p>Por que Jesus escolheu falar com ela ali, no poço, ao meio-dia?</p>
          </div>
          <div className={styles.note}>
            <strong>Pedro</strong>
            <p>Ótima pergunta. Vamos levar para a reunião de quinta.</p>
          </div>
          <p className={styles.progress}>7 de 9 pessoas já leram hoje</p>
        </div>
      </div>
    </section>
  )
}
