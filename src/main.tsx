import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PaginaCadastroC from './CadastroVendedor'
import PaginaVendedor from './PerfilVendedor'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <PaginaCadastroC/> */}
    <PaginaVendedor/>
  </StrictMode>,
)
