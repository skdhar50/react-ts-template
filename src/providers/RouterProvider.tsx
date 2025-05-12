import { createBrowserRouter, RouterProvider } from 'react-router'
import { routers as allRouters } from '@/routes'

const router = createBrowserRouter(allRouters)

const ReactRouterProvider = () => {
  return <RouterProvider router={router} />
}

export default ReactRouterProvider
