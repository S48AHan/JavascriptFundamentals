import { RouterProvider, createRouter } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'
const router = createRouter({ routeTree })
function App() {
  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
