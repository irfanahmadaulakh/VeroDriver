import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import ProfileHeader from './Components/ProfileHeader'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import { userLogout } from '@/Store/Actions/user'
import SettingsItems from './Components/SettingsItems';
import SwitchService from './Components/SwitchService';
import { useDispatch, useSelector } from 'react-redux'
import messaging from '@react-native-firebase/messaging';
import { navigate } from '@/Navigators/utils';

const ProfileDetails = (props) => {
  const user_id = useSelector(state => state.user.user_id)
  const user = useSelector(state => state.user.user)
  const { t } = useTranslation()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [rating, setRating] = useState('')
  const { Layout, Gutters } = useTheme()
  const dispatch = useDispatch()

  useEffect(()=>{
    const {first_name, last_name, rating, avatar} = user
    setFirstName(first_name)
    setLastName(last_name),
    setRating(rating)
  },[])


  const logout = ()=>{
    console.log("Props", props);
    messaging().unsubscribeFromTopic('driver-new-purchase-'+user_id);    
    messaging().unsubscribeFromTopic('ride-cancelled-'+user_id);    
    messaging().unsubscribeFromTopic('ride-purchase-acknowledged-'+user_id);    
    messaging().unsubscribeFromTopic('ride-purchase-cancelled-'+user_id);  
    dispatch(userLogout())
    props.navigation.replace('Auth')
  }
  const pressSettings = ()=> navigate('Settings')
  const pressRideHistory = ()=> navigate('RideHistory')
  const pressSwitchService = ()=> navigate('SwitchService')
  const pressSummary = ()=> navigate("Summary")
  return (
    <View style={Layout.fill}>
      <ProfileHeader
        name={`${firstName} ${lastName}`}
        onPressEarning={()=>navigate("Earnings")}
        rating={`${rating}`}
        totalTrips={"5432"}
        years={"1.23"}
      />
      <SwitchService onPress={pressSwitchService}/>
      <ScrollView>
      <SettingsItems icon="home-sharp" text={t("home")}/>
      <SettingsItems onPress={pressRideHistory} icon="md-car-outline" text={t("rideHistory")}/>
      <SettingsItems onPress={pressSummary} icon="ios-document-text-outline" text={t("summary")}/>
      <SettingsItems icon="star" text={t("subscription")}/>
      <SettingsItems icon="notifications-sharp" text={t("notification")}/>
      <SettingsItems onPress={pressSettings} icon="settings-sharp" text={t("settings")}/>
      <SettingsItems onPress={logout} icon="power" text={t("logout")}/>
      </ScrollView>
    </View>
  );
}

export default ProfileDetails;