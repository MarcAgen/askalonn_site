import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const Event = () => {
  return (
    <h1>Event</h1>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Event/>
  </StrictMode>,
)