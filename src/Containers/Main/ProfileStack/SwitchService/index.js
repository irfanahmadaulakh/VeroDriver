import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '@/Hooks'
import { useTranslation } from 'react-i18next'
import { VeroHeader, VeroLoader } from '@/Components';
import Services from './Components/Services'
import { APIRequest } from '@/Services/ApiRequest';
import { Config } from '@/Config';
import { useSelector } from 'react-redux';

let servicesArray = new Array()
const SwitchService = (props) => {  
  const user = useSelector(state => state.user.user)
  console.log("user details in switch service", user);
  
  const { t } = useTranslation()
  const { Layout } =useTheme()
  const [loading, setLoading] = useState(false)
  const [pickup, setPickup] = useState(false);
  const [purchase, setPurchase] = useState(false);
  const [delivery, setDelivery] = useState(false);
  const [itemReturn, setItemReturn] = useState(false);
  const [itemExchange, setItemExchange] = useState(false);
  const [rideShare, setRideShare] = useState(false); 
  const [rideSingle, setRideSingle] = useState(false);

  const toggleSwitch1 = () => {
    setPickup(previousState => !previousState)
    if(servicesArray.length>0){
        if(servicesArray.includes('pick_up')){
          for( var i = 0; i < servicesArray.length; i++){ 
            if ( servicesArray[i] === 'pick_up') { 
              servicesArray.splice(i, 1); 
            }
        }
        } else {
          servicesArray.push("pick_up")
        }
    } else {
      servicesArray.push("pick_up")
    }
    updateServiceType()
    console.log("Service Array", servicesArray);
    
  };
  const toggleSwitch2 = () => {
    setPurchase(previousState => !previousState)
    if(servicesArray.length>0){
        if(servicesArray.includes('item_purchase')){
          for( var i = 0; i < servicesArray.length; i++){ 
            if ( servicesArray[i] === 'item_purchase') { 
              servicesArray.splice(i, 1); 
            }
        }
        } else {
          servicesArray.push("item_purchase")
        }
    } else {
      servicesArray.push("item_purchase")
    }
      updateServiceType()
    console.log("Service Array", servicesArray);
  };
  const toggleSwitch3 = () =>{
    setDelivery(previousState => !previousState)
    if(servicesArray.length>0){
        if(servicesArray.includes('food_delivery')){
          for( var i = 0; i < servicesArray.length; i++){ 
            if ( servicesArray[i] === 'food_delivery') { 
              servicesArray.splice(i, 1); 
            }
        }        
        } else {
          servicesArray.push("food_delivery")
        }
    } else {
      servicesArray.push("food_delivery")
    }    
    updateServiceType()
    console.log("Service Aryyat", servicesArray);

  };
  const toggleSwitch4 = () => {
    setItemReturn(previousState => !previousState)
    if(servicesArray.length>0){
        if(servicesArray.includes('item_return')){
          for( var i = 0; i < servicesArray.length; i++){ 
            if ( servicesArray[i] === 'item_return') { 
              servicesArray.splice(i, 1); 
            }
        }
        } else {
          servicesArray.push("item_return")
        }
    } else {
      servicesArray.push("item_return")
    }    
    updateServiceType()
    console.log("Service Aryyat", servicesArray);

  };
  const toggleSwitch5 = () => {
    setItemExchange(previousState => !previousState)
    if(servicesArray.length>0){
        if(servicesArray.includes('item_exchange')){
          for( var i = 0; i < servicesArray.length; i++){ 
            if ( servicesArray[i] === 'item_exchange') { 
              servicesArray.splice(i, 1); 
            }
        }
        } else {
          servicesArray.push("item_exchange")
        }
    } else {
      servicesArray.push("item_exchange")
    }
    updateServiceType()
    console.log("Service Aryyat", servicesArray);

  };
  const toggleSwitch6 = () => {
    setRideShare(previousState => !previousState)
    if(servicesArray.length>0){
        if(servicesArray.includes('ride_share')){
          for( var i = 0; i < servicesArray.length; i++){ 
            if ( servicesArray[i] === 'ride_share') { 
              servicesArray.splice(i, 1); 
            }
        }
        } else {
          servicesArray.push("ride_share")
        }
    } else {
      servicesArray.push("ride_share")
    }
    updateServiceType()
    console.log("Service Aryyat", servicesArray);

  };
  const toggleSwitch7 = () => {
    setRideSingle(previousState => !previousState)
    if(servicesArray.length>0){
        if(servicesArray.includes('ride_single')){
          for( var i = 0; i < servicesArray.length; i++){ 
            if ( servicesArray[i] === 'ride_single') { 
              servicesArray.splice(i, 1); 
            }
        }
        } else {
          servicesArray.push("ride_single")
        }
    } else {
      servicesArray.push("ride_single")
    }
    updateServiceType()
    console.log("Service Aryyat", servicesArray);
  };

  const updateServiceType = async() =>{
    let params = {
      service_types: servicesArray
    }
    setLoading(true)
     await new APIRequest.Builder()
      .put()
      .reqURL(Config.END_POINTS.SERVICE_TYPE)
      .jsonParams(params)
      .response(response => {
        console.log("Response ", response)
        setLoading(false)
       })
      .error(error => {
        console.log('Showing error', error),
        setLoading(false)
      })
      .build()
      .doRequest()
  }

  
  return (
  <View style={Layout.fill}>
    <VeroHeader title={t("switchService")}/>
    <View style={Layout.switchServiceContainer}>
    <Services 
      text={'Package Pickup'}
      value={pickup}
      onValueChange={toggleSwitch1}
    />
    <Services 
      text={'Item Purchase'}
      value={purchase}
      onValueChange={toggleSwitch2}
    />
    <Services
      text={'Food Delivery'}
      value={delivery}
      onValueChange={toggleSwitch3}
     />
    <Services 
      text={'Item Return'}
      value={itemReturn}
      onValueChange={toggleSwitch4}
    />
     <Services 
      text={'Item Exchange'}
      value={itemExchange}
      onValueChange={toggleSwitch5}
    />
    <Services 
      text={'Ride Share'}
      value={rideShare}
      onValueChange={toggleSwitch6}
    />
    <Services 
      text={'Ride Single'}
      value={rideSingle}
      onValueChange={toggleSwitch7}
    />
    </View>
    {loading && <VeroLoader/>}
  </View>
     
);
}

export default SwitchService;