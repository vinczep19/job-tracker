import { createBrowserRouter } from 'react-router'
import SignInPage from '../pages/SignInPage'
import DashboardPage from '../pages/DashboardPage'
import ProfilePage from '../pages/ProfilePage'
import ChartsPage from '../pages/ChartsPage'

const Router = createBrowserRouter([
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

export default Router
