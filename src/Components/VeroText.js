import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WP } from '@/Theme/Responsive';

const VeroText = (props) => {
  return (
    <View style={styles.container}>
    <Text>
  kdjflksjflksjdflksdjflkjdslkfjsklfjlskdjflksdfksjdfklsdfkljsdklfjsdkjfksdjfl
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'white', 
        marginTop: WP('1')
    }
})

export default VeroText;