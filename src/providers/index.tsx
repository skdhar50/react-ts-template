import ReactQueryProvider from '@/providers/ReactQueryProvider.tsx'
import RouterProvider from '@/providers/RouterProvider.tsx'

const AppProvider = () => {
  return (
    <ReactQueryProvider>
      <RouterProvider />
    </ReactQueryProvider>
  )
}

export default AppProvider
