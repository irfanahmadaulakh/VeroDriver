import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Colors } from '@/Theme/Variables';
import { WP } from '@/Theme/Responsive';

const RideHistoryDetail = (props) => {
  return (
    <ScrollView style={styles.conatiner}>
        <Text>Hhohoho</Text>
    </ScrollView>
  );
  
}

const styles = StyleSheet.create({
    conatiner:{
        backgroundColor: Colors.white,
        marginTop: WP('1')
    }
})

export default RideHistoryDetail;