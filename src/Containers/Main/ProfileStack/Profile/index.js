import React, { useState, useEffect } from 'react';
import { View, Text, Platform } from 'react-native';
import { VeroProfileHeader }from '@/Components'
import { navigate } from '@/Navigators/utils';
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import ProfileLineItem from './Components/ProfileLineItem';
import { getCameraPicture } from '@/Services/Helpers';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Config } from '@/Config';

const Profile = () => {
  const token = useSelector(state => state.user.token)
  const user = useSelector(state => state.user.user)
  console.log("User", user);
  const { t } = useTranslation()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const { Layout, Gutters } =useTheme()
  const [pickedImage, setPickedImage]= useState()
  let imageUpload;

  useEffect(()=>{
    const {first_name, last_name, mobile_number, avatar, email, street_address} = user
    setFirstName(first_name),
    setLastName(last_name),
    setMobileNumber(mobile_number),
    setEmail(email),
    setAddress(street_address)
  },[])

  const uploadSelfie = () => {
    getCameraPicture(
      image => {
        image.map(pickedImage => {
          setPickedImage(pickedImage),
          imageUpload=pickedImage
        })
        uploadPicture()
      },
      error => {
        console.log('Camera error', error)
      },
    )
  }

  const uploadPicture = async ()=> {
  var photo = {
    name: imageUpload.name,
    type: imageUpload.type,
    uri: imageUpload.uri.replace('file://', ''),
    };
    //use formdata
    var formData = new FormData(); 
    //append created photo{} to formdata
    formData.append('image_type', 'purchase');
    formData.append('api_key', token);
    formData.append('image', photo);
    //use axios to POST
    await axios({
        method: 'POST',
        url: Config.API_URL + Config.END_POINTS.IMAGE,
        data: formData,
        config: {
          headers: {
            Authorization: token,
            'Content-Type': 'multipart/form-data',
          },
        },
        headers: {
            'Authorization': token,
            // 'Accept': 'application/json',
            'Content-Type': 'multipart/form-data;'    
        }}) .then(function (response) { console.log("Image axios Reponse",response)})
        .catch(function (error) { console.log("Image axios Error",error.response)
    });
  }

  return (
    <View style={Layout.fill}>
      <VeroProfileHeader
          name={`${firstName} ${lastName}`}
          totalTrips={"5432"}
          years={"1.23"}
          picture={pickedImage}
          onPressCamera={uploadSelfie}
          onEditPress={()=>navigate("EditProfile")}
      />
        <Text style={Layout.helpText2}>{t("info").toUpperCase()}</Text>
        <ProfileLineItem icon="phone-portrait-outline" text={mobileNumber}/>
        <ProfileLineItem icon="ios-mail-sharp" text={email}/>
        <ProfileLineItem icon="language-outline" text={'English & Spanish'}/>
        <ProfileLineItem icon="home-sharp" text={address}/>
      </View>
  );
}

export default Profile;