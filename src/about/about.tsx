import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const About = () => {
  return (
    <h1>About Us</h1>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <About/>
  </StrictMode>,
)