import { Provider as ReduxProvider } from 'react-redux'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import { store } from './store/index.ts'
import { RoutesApp } from './routes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <RoutesApp />
    </ReduxProvider>
  </StrictMode>,
)
