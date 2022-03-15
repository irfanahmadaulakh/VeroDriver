import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@/Hooks';
import WeeklyDetails from './Components/WeeklyDetails';

const WeeklyStats = () => {
    const { Layout } = useTheme()
    return (
        <View style={Layout.fill}>
           <WeeklyDetails/>
        </View>
    );
}

export default WeeklyStats;