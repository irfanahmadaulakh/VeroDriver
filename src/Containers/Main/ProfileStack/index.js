import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Settings from './Settings'
import Profile from './Profile'
import ProfileDetails from './ProfileDetails'
import RideHistory from './RideHistory'
const Stack = createStackNavigator()

// @refresh reset
const ProfileStack = () => {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="ProfileDetails" component={ProfileDetails} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="RideHistory" component={RideHistory} />

    </Stack.Navigator>
  )
}

export default ProfileStack
