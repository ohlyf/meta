import React from 'react';
import {Image, StyleSheet} from 'react-native';

const Logo = require('../../assets/icon.png');
export default function ImageComponent() {
  return (
    <>
      <Image source={Logo} style={styles.Logo} />
    </>
  );
}

const styles = StyleSheet.create({
  Logo: {
    width: 100,
    height: 100,
    borderBlockColor: 'red',
    borderColor: 'pink',
    borderWidth: 1,
  },
});
