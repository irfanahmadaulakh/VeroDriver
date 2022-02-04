import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '@/Hooks'
import { useTranslation } from 'react-i18next'
import { VeroHeader } from '@/Components';
import SettingsItems from './Components/SettingsItems';
import { Colors } from '@/Theme/Variables';
import { WP } from '@/Theme/Responsive';
import { navigate } from '@/Navigators/utils';

const Settings = (props) => {
  const { t } = useTranslation()
  const { Layout } =useTheme()
  return (
  <View style={Layout.fill}>
    <VeroHeader title={t("settings")}/>
      <ScrollView>
      <View style={styles.settingsView}>
          <SettingsItems onPress={()=>navigate("Profile")} icon="person" text={t("myprofile")}/>
          <SettingsItems icon="ios-car" text={t("myvehicle")}/>
          <SettingsItems icon="ios-document-text-sharp" text={t("personaldocument")}/>
          <SettingsItems icon="bank-outline" text={t("bankdetails")}/>
          <SettingsItems icon="ios-lock-closed" text={t("changepassword")}/>
        </View>
        <Text style={Layout.helpText}>{t("help").toUpperCase()}</Text>
        <View style={styles.settingsView}>
        <SettingsItems icon="ios-document-text-sharp" text={t("terms")}/>
          <SettingsItems icon="shield-checkmark" text={t("privacy")}/>
          <SettingsItems icon="person" text={t("about")}/>
          <SettingsItems icon="ios-mail-outline" text={t("contactUs")}/>
        </View>
      </ScrollView>
  </View>
     
);
}

const styles=StyleSheet.create({
  settingsView: {
    backgroundColor: Colors.white,
    marginTop: WP('1'),
  },
})

export default Settings;