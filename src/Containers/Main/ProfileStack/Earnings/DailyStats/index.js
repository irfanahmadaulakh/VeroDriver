import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@/Hooks';
import DailyDetails from './Components/DailyDetails';

const DailyStats = () => {
  const { Layout } = useTheme()
  return (
  <View style={Layout.fill}>
     <DailyDetails/>
  </View>);
}

export default DailyStats;