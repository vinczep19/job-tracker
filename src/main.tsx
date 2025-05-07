import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import SignInPage from './pages/SignInPage.tsx'
import DashboardPage from './pages/DashboardPage.tsx'
import ProfilePage from './pages/ProfilePage.tsx'
import ChartsPage from './pages/ChartsPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignInPage />,
  },
  {
    path: '/register',
    element: <SignInPage />,
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
  {
    path: '/charts',
    element: <ChartsPage />,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
