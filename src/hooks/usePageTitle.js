import { useEffect } from 'react'

// Cambia el título de la pestaña en cada página (SEO)
function usePageTitle(titulo) {
  useEffect(() => {
    document.title = `${titulo} | NOIR`
  }, [titulo])
}

export default usePageTitle
