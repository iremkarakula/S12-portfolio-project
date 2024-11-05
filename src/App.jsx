import './App.css'
import { ThemeContextProvider } from './contexts/themeContext'


import Page from './Page'

function App() {


  return (
    <ThemeContextProvider>
      <div >
        <Page />
      </div>

    </ThemeContextProvider>
  )
}

export default App
