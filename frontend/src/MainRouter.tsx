import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { AppRoutes } from './routes'
import { MainLayout } from './MainLayout'

export const MainRouter = () => {
  return (
    <Switch>
      <Route path={AppRoutes.HOME} component={MainLayout} />
      <Redirect to={AppRoutes.HOME} />
    </Switch>
  )
}
