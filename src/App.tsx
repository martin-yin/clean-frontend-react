import 'reflect-metadata'
import { BrowserRouter } from 'react-router-dom'
import { RenderRouter } from './router/router'

function App() {
  return (
    <BrowserRouter>
      <RenderRouter />
    </BrowserRouter>
  )
}

export default App
