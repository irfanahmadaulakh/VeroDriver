import React, { useState } from 'react';
import { View } from 'react-native';
import {VeroBackButton, 
    VeroHeaderText, 
    VeroButton, 
    VeroTextInput,
    VeroUnderLineText, 
    VeroSubHeaderText
    } from '@/Components'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import { navigate } from '@/Navigators/utils';
import { APIRequest } from '../../../Services/ApiRequest'
import { Config } from '@/Config'


const ForgotPassword = (props) => {
    console.log("Props here are", props)
    const { Layout, Colors, Fonts, Images } = useTheme()
    const { t } = useTranslation()
    const [email, setEmail] = useState()


    const submit = () => {
        let params = {
            email: email,
            password: password,
          }
        //   setLoading(true)
          new APIRequest.Builder()
            .post()
            .reqURL(Config.END_POINTS.LOGIN)
            .jsonParams(params)
            .response(response => {
              console.log("Response ", response);
            })
            .error(error => {
              console.log('Showing error', error)
            })
            .build()
            .doRequest()
    }


  return (
      <View style={Layout.mobileInputContainer}>
      <VeroBackButton/>
      <VeroHeaderText
          title={t('forgotPass')}
      />
      <VeroSubHeaderText
          title={t('forgotSubText')}
      />
      <VeroTextInput
            placeholder={t('email')}
            value={email}
            autoCapitalize={'none'}
            keyboardType="email-address"
            onChangeText={text => setEmail(text)}
      />
      <VeroButton
          title={t("submit")}
          isDisabled={false}
        //   onPress={submit}
      />
      </View>
  )
}

export default ForgotPassword;