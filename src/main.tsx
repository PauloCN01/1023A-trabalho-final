import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PaginaCadastroC from './CadastroVendedor'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PaginaCadastroC/>
  </StrictMode>,
)
