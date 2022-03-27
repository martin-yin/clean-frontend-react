import { BrowserRouter } from 'react-router-dom'
import 'reflect-metadata'
import { FilterHeaderProvider } from './features/filterHeader/hook/useFilterHeaderInit'
import { RenderRouter } from './router/router'

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
