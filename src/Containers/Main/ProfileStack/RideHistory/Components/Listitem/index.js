//import liraries
import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Colors } from '@/Theme/Variables'
import { WP } from '@/Theme/Responsive'
import moment from 'moment' // create a component
const ItemDetail = props => {
  console.log('In Qoute Item', props)
  const {service_type, created_at} = props
  const renderServiceName = () => {
console.log('ride type = ' + service_type);
if (service_type == 'pick_up') {
  return <Text style={styles.text}>A new PackagePickup/Delivery request</Text>;
} else if (service_type == 'item_purchase') {
  return <Text style={styles.text}>A new Item Purchase Request</Text>;
} else if (service_type == 'item_return') {
  return <Text style={styles.text}>A new Item Return request</Text>;
} else if (service_type == 'ride_share') {
  return <Text style={styles.text}>A new Ride Pool request</Text>;
} else if (service_type == 'food_delivery') {
  return <Text style={styles.text}>A new Food Delivery request</Text>;
} else if (service_type == 'item_exchange') {
  return <Text style={styles.text}>A new Item Exchange request</Text>;
} else {
  return <Text style={styles.text}>Undefined Service Type</Text>;
}
  }
    
  // pressAction = () => navigate('Details', demo)
  return (
   <View style={styles.container}>
   {renderServiceName()}
   <Text style={styles.text}>{`Time of Request: ${moment(created_at).format('MMMM Do YYYY')}`}</Text>
   </View>
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
  text: {
    fontSize: WP('4'),
  }
})
export default ItemDetail
