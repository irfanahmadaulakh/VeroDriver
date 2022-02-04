//import liraries
import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useTheme } from '@/Hooks'
import { goBack } from '../Navigators/utils'



// create a component
const VeroBackButton = props => {
    const { Layout, Images, Colors } = useTheme()

  return (
    <TouchableOpacity onPress={() => goBack()} style={Layout.backButton}>
      <Icon name="arrow-back" size={25} color={"#000000"}/>
    </TouchableOpacity>
  )
}

//make this component available to the app
export default VeroBackButton
