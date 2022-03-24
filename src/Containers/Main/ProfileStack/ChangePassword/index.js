import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import {useTheme} from '@/Hooks'
import { useTranslation } from 'react-i18next'
import { VeroHeader } from '@/Components';
import { Colors } from '@/Theme/Variables';
import { WP } from '@/Theme/Responsive';
import { VeroTextInput, VeroButton } from '@/Components';
import { useSelector, useDispatch } from 'react-redux';
import { APIRequest } from '@/Services/ApiRequest';
import { Config } from '@/Config';
import { VeroLoader } from '@/Components';
import { userAuth } from '@/Store/Actions';
import { showSnackBar } from '@/Services/Helpers';

const ChangePassword = () => {
    const user = useSelector(state => state.user.user)
    const { t } = useTranslation()
    const [loading, setLoading] = useState(false)
    const { Layout } = useTheme()
    const dispatch = useDispatch()
    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const submit = () =>{
        let params = {
            mobile_number: phone,
            street_address: address
          }
          setLoading(true)
          new APIRequest.Builder()
            .put()
            .reqURL(Config.END_POINTS.USERS)
            .jsonParams(params)
            .response(response => {
              console.log("Response ", response),
              dispatch(userAuth(response?.data?.data))
              showSnackBar(Config.SnackBarEnum.SUCCESS, "Profile updated successfully!")
              setLoading(false)
             })
            .error(error => {
              console.log('Showing error', error),
              showSnackBar(Config.SnackBarEnum.ERROR, error?.meta?.message ?? "Something went wrong! we are fixing it.")
              setLoading(false)
            })
            .build()
            .doRequest()
    }

  return (
      <View style={Layout.fill}>
        <VeroHeader title={t("changepassword")}/>
        <View style={{backgroundColor: Colors.white, marginTop: WP('1'), flex: 1}}>
        <VeroTextInput
            placeholder={t('oldPass')}
            value={password}
            secureTextEntry
            onChangeText={text => setPassword(text)}
        />
        <VeroTextInput
            placeholder={t('newPass')}
            value={newPassword}
            secureTextEntry
            onChangeText={text => setNewPassword(text)}
        />
        <VeroTextInput
            placeholder={t('confirmNewPass')}
            value={confirmPassword}
            secureTextEntry
            onChangeText={text => setConfirmPassword(text)}
        />
        <VeroButton
            title={t("save")}
            // onPress={submit}
        />
        </View>
        {loading && <VeroLoader/>}
      </View>
  );
}

export default ChangePassword;