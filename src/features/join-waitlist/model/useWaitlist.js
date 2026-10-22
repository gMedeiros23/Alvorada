import { useState } from 'react'

const emailOk = (v) => /^\S+@\S+\.\S+$/.test(v)

export function useWaitlist() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState({})
  const [done, setDone] = useState(false)

  function submit(e) {
    e.preventDefault()
    const next = {}
    if (name.trim().length < 2) next.name = 'Digite seu nome.'
    if (!emailOk(email)) next.email = 'Digite um e-mail válido, como nome@exemplo.com.'
    setErrors(next)
    if (Object.keys(next).length === 0) setDone(true)
  }

  function close() {
    setDone(false)
    setName('')
    setEmail('')
  }

  return { name, setName, email, setEmail, errors, done, submit, close }
}
