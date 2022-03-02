import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Settings from './Settings'
import Profile from './Profile'
import ProfileDetails from './ProfileDetails'
import RideHistory from './RideHistory'
import SwitchService from './SwitchService'
import MyVehicle from './MyVehicle'
import RideDetails from './RideDetails'

const Stack = createStackNavigator()

// @refresh reset
const ProfileStack = () => {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="ProfileDetails" component={ProfileDetails} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="RideHistory" component={RideHistory} />
      <Stack.Screen name="RideDetails" component={RideDetails} />
      <Stack.Screen name="MyVehicle" component={MyVehicle} />
      <Stack.Screen name="SwitchService" component={SwitchService} />


    </Stack.Navigator>
  )
}

export default ProfileStack
