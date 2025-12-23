import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const Partnership = () => {
  return (
    <h1>Our Partners</h1>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Partnership/>
  </StrictMode>,
)