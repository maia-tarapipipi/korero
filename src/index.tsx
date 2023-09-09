import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Suspense, lazy } from 'react'
import ProtectedComponent from './utilities/ProtectedComponent'
import Loading from './utilities/Loading'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

const Home = lazy(() => import('../src/components/Home'))
const Chat = lazy(() => import('./components/chat/ChatWindow'))
const ErrorPage = lazy(() => import('./utilities/Error'))
const Profile = lazy(() => import('./components/profile/Profile'))
export const routes = createRoutesFromElements(
  <Route path="/" element={<App />} errorElement={<ErrorPage />}>
    <Route index element={<Home />} />
    <Route
      path="/chat"
      element={
        <Suspense fallback={<Loading />}>
          <ProtectedComponent component={Chat} />
        </Suspense>
      }
    />
    <Route
      path="/profile"
      element={
        <Suspense fallback={<Loading />}>
          <ProtectedComponent component={Profile} />
        </Suspense>
      }
    />
  </Route>
)

function AppProvider() {
  return <RouterProvider router={createBrowserRouter(routes)} />
}

document.addEventListener('DOMContentLoaded', () => {
  const queryClient = new QueryClient()
  createRoot(document.getElementById('root') as HTMLElement).render(
    <Auth0Provider
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      domain={import.meta.env.VITE_AUTH0_DOMAIN as string}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID as string}
      cacheLocation="localstorage"
      authorizationParams={{
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        audience: import.meta.env.VITE_AUTH0_AUDIENCE as string,
        redirect_uri: window.location.origin,
      }}
    >
      <QueryClientProvider client={queryClient}>
        <AppProvider />
      </QueryClientProvider>
    </Auth0Provider>
  )
})
