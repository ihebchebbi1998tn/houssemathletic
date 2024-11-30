import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n'
import { useTranslation } from 'react-i18next'

const RootComponent = () => {
  const { i18n } = useTranslation()

  useEffect(() => {
    const rootElement = document.getElementById('root')
    if (rootElement) {
      if (i18n.language === 'ar') {
        rootElement.classList.add('rtl')
      } else {
        rootElement.classList.remove('rtl')
      }
    }
  }, [i18n.language])

  return <App />
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootComponent />
  </StrictMode>,
)