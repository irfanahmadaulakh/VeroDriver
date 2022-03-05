import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MapScreen from '@/Containers/Main/MapScreen'
import RideScreen from '../Containers/Main/RideScreen'
import TripNotification from '../Containers/Main/TripNotification'
import RideToDestination from '../Containers/Main/RideToDestination'
import ProfileStack from '../Containers/Main/ProfileStack'
import RideToPickup from '../Containers/Main/RideToPickup'

const Stack = createStackNavigator()

// @refresh reset
const MainNavigator = () => {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="RideScreen" component={RideScreen} />
      <Stack.Screen name="RideToDestination" component={RideToDestination} />
      <Stack.Screen name="RideToPickup" component={RideToPickup} />
      <Stack.Screen name="ProfileStack" component={ProfileStack} />
      <Stack.Screen name="TripNotification" component={TripNotification} />

    </Stack.Navigator>
  )
}

export default MainNavigator
