//import liraries
import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { Colors } from '@/Theme/Variables'
import { WP } from '@/Theme/Responsive'
const ItemDetail = props => {
  console.log('In Qoute Item', props)
  const {car_type, car_color, car_make, car_no} = props?.data
    
  // pressAction = () => navigate('Details', demo)
  return (
   <TouchableOpacity style={styles.container} onPress={()=>props.onPressItem(props)}>
   <Text style={styles.text1}>{`${car_make}`}</Text>
   <Text style={styles.text}>{`${car_no} . ${car_color} . ${car_type}`}</Text>
   </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: WP('2'),
    borderRadius: WP('3'),
    width: WP('95'),
    padding: WP('10'),
    backgroundColor: Colors.white
  },
  text1: {
    fontSize: WP('5'), fontWeight: '900'
  },
  text: {
    fontSize: WP('4'),
  }
})
export default ItemDetail
