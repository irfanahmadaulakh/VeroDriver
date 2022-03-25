import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@/Hooks'
import { VeroHeader, VeroText } from '@/Components';
import { useTranslation } from 'react-i18next'
import { WP } from '@/Theme/Responsive';



const TermsConditions = () => {
    const { Layout } = useTheme()
    const { t } = useTranslation()

  return (
      <View style={Layout.fill}>
      <VeroHeader title={t("terms")}/>
        <VeroText/>
      </View>
  );
}

export default TermsConditions;