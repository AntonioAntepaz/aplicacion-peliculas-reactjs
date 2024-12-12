import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MovieApp } from './Movieapp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
<MovieApp/>
  </StrictMode>,
)
