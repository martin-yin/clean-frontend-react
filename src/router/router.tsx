import React, { ComponentType, FC, lazy } from 'react'
import { RouteObject, useRoutes } from 'react-router-dom'
import LayoutPage, { OutletLayout } from '../pages/layout/layoutPage'
import LoginPage from '../presentation/login/loginPage'
export type RouteWrapperProps = {
  element: React.LazyExoticComponent<ComponentType<any>>
}

const RouteWrapper: React.FC<RouteWrapperProps> = props => {
  const { element: ElementComponent } = props
  return <ElementComponent />
}

export const RenderRouter: FC = () => {
  const routeList: Array<RouteObject> = [
    {
      path: '/',
      element: <LayoutPage />,
      children: [
        {
          path: '',
          element: <OutletLayout />,
          children: [
            { path: '', element: <RouteWrapper element={lazy(() => import('@/presentation/home/homePage'))} /> }
          ]
        },
        {
          path: 'system',
          element: <OutletLayout />,
          children: [
            {
              path: 'project',
              element: <RouteWrapper element={lazy(() => import('@/presentation/project/projectPage'))} />
            },
            { path: 'team', element: <RouteWrapper element={lazy(() => import('@/presentation/team/teamPage'))} /> }
          ]
        },
        {
          path: 'user',
          element: <OutletLayout />,
          children: [
            { path: '', element: <RouteWrapper element={lazy(() => import('@/presentation/user/userPage'))} /> },
            {
              path: 'detail/:session_id/:user_id',
              element: <RouteWrapper element={lazy(() => import('@/presentation/user/useDetailPage'))} />
            }
          ]
        },
        {
          path: '/jsErr',
          element: <OutletLayout />,
          children: [
            {
              path: '',
              element: <RouteWrapper element={lazy(() => import('@/presentation/jsErr/jsErrPage'))} />
            },
            {
              path: 'detail/:error_id',
              element: <RouteWrapper element={lazy(() => import('@/presentation/jsErr/jsErrDetailPage'))} />
            }
          ]
        },
        {
          path: '/performance',
          element: <RouteWrapper element={lazy(() => import('@/presentation/performance/performancePage'))} />
        },
        {
          path: '/http',
          element: <RouteWrapper element={lazy(() => import('@/presentation/http/httpPage'))} />
        },
        {
          path: '/httpErr',
          element: <RouteWrapper element={lazy(() => import('@/presentation/httpErr/httpErrPage'))} />
        },
        {
          path: '/staticErr',
          element: <RouteWrapper element={lazy(() => import('@/presentation/staticErr/staticErrPage'))} />
        }
      ]
    },
    {
      path: '/login',
      element: <LoginPage />
    }
  ]
  return useRoutes(routeList)
}
