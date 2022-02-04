import React , { useState }from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '@/Hooks'
import { useTranslation } from 'react-i18next'
import { VeroButton } from '@/Components';
import { WP } from '@/Theme/Responsive';
import { Colors } from '@/Theme/Variables'
import ItemsList from './FoodItemsModal/Components/List'
import { List } from 'react-native-paper';



const TopHeaderFood = (props) => {
  const { name, pickupFrom, serviceType, status } = props
  const { t } = useTranslation()
const { Layout, Images, Colors, Gutters } = useTheme()
  return (
  <View style={styles.requestHeader}>
  <ScrollView>
  {/* <View style={Gutters.largeTMargin}> */}
  <VeroButton style={{width: WP('82')}} title="Start Trip"
  onPress={props?.onPressStart}
 />
 <View style={{padding: WP('4')}}>
    <Text style={styles.dimedText}>{t("pickupFood")}</Text>
<Text style={styles.text}>{pickupFrom}</Text>
<View style={styles.divider}></View>
    <Text style={styles.dimedText}>Food Items to Pick</Text>
    <List.Section>
      <List.Accordion
        title="Click to view food items" style={{backgroundColor: Colors.white}}>
      <ItemsList onPressItem={props?.onPressItem} data={props?.data} />
    </List.Accordion> 
    </List.Section>
    <View style={styles.divider}></View>
    {/* <Text style={styles.dimedText}>Status</Text>
    <Text style={styles.text}>{status}</Text>
    <View style={styles.divider}></View> */}
    </View>
    </ScrollView>
  </View>
  )
}

const styles=StyleSheet.create({
    divider: {
            borderWidth: WP(0.1),
            alignSelf: "center",
            // marginTop: WP('5'),
            width: WP('85'),
            borderColor: 'grey'
        },
        text: {
            width: WP('85'),
            alignSelf: 'center',
            marginBottom: WP('1'),
            marginTop: WP('2'),
            fontSize: WP('3.8'),
            borderRadius: WP('0.8'),
            // paddingLeft: WP('3'),
            // paddingRight: WP('3'),
          },
          expand: {
            fontSize: WP('6')
          },
          textItems: {
            width: WP('82'),
            alignSelf: 'center',
            marginBottom: WP('1'),
            marginTop: WP('2'),
            fontSize: WP('3.8'),
            borderRadius: WP('0.8'),
            // paddingLeft: WP('10'),
            // paddingRight: WP('3'),
          },
          dimedText: {
            width: WP('85'),
            alignSelf: 'center',
            fontSize: WP('3.5'),
            borderRadius: WP('0.8'),
            // paddingLeft: WP('3'),
            // paddingRight: WP('3'),
            color: Colors.grey,
            // marginTop: WP('2'),
          },
          requestHeader: {
            marginTop: WP('1'),
              width:WP('100'),
              backgroundColor: Colors.white,
          },
})

export default TopHeaderFood;