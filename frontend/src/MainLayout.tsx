import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { AppRoutes } from './routes'
import { HomeScreen } from './screens/home/HomeScreen'
import { Navbar } from './components/Navbar'
import { BoatScreen } from './screens/boat-screen/BoatScreen'
import { CreateCrewScreen } from './screens/CreateCrewScreen'
import { UpdateCrewScreen } from './screens/UpdateCrewScreen'
import { CreateBoatScreen } from './screens/CreateBoatScreen'
import { UpdateBoatScreen } from './screens/UpdateBoatScreen'

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path={AppRoutes.HOME} component={HomeScreen} />
        <Route exact path={AppRoutes.CREATE_BOAT} component={CreateBoatScreen} />
        <Route exact path={AppRoutes.EDIT_BOAT.url} component={UpdateBoatScreen} />
        <Route exact path={AppRoutes.BOAT.url} component={BoatScreen} />
        <Route exact path={AppRoutes.CREATE_CREW_MEMBER.url} component={CreateCrewScreen} />
        <Route exact path={AppRoutes.UPDATE_CREW_MEMBER.url} component={UpdateCrewScreen} />
        <Redirect to={AppRoutes.HOME} />
      </Switch>
    </>
  )
}
