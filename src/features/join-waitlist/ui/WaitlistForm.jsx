import { Button, Input, Modal } from '@/shared/ui'
import { useWaitlist } from '../model/useWaitlist'
import styles from './WaitlistForm.module.css'

export function WaitlistForm() {
  const w = useWaitlist()
  return (
    <>
      <form className={styles.form} onSubmit={w.submit} noValidate>
        <Input id="wl-nome" label="Seu nome" value={w.name} onChange={(e) => w.setName(e.target.value)} error={w.errors.name} autoComplete="name" />
        <Input id="wl-email" label="Seu e-mail" type="email" value={w.email} onChange={(e) => w.setEmail(e.target.value)} error={w.errors.email} autoComplete="email" />
        <Button type="submit">Entrar na lista de espera</Button>
      </form>
      <Modal open={w.done} onClose={w.close} title={`Você está na lista, ${w.name.split(' ')[0]}!`}>
        <p>Enviaremos o convite para <strong>{w.email}</strong> assim que o Alvorada abrir. Este é um projeto fictício, então nenhum e-mail será enviado.</p>
        <Button onClick={w.close}>Fechar</Button>
      </Modal>
    </>
  )
}
