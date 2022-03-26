import 'reflect-metadata'
import { BrowserRouter } from 'react-router-dom'
import { RenderRouter } from './router/router'
import { FilterHeaderProvider } from './features/filterHeader/hook/useFilterHeaderInit'

function App() {
  return (
    <BrowserRouter>
      <FilterHeaderProvider>
        <RenderRouter />
      </FilterHeaderProvider>
    </BrowserRouter>
  )
}

export default App
