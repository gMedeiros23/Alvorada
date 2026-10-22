import { useState } from 'react'

export function useBilling() {
  const [billing, setBilling] = useState('monthly')
  return { billing, setBilling }
}
