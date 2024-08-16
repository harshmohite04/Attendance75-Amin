import {StyleSheet, Dimensions, Text, useColorScheme, View} from 'react-native';
import React from 'react';
const {width} = Dimensions.get('window');
const scale = width / 320;

const NavBar = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.txt]}>ATTENDANCE ADMIN</Text>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    justifyContent:'center',
    alignItems:'center'
  },
  txt: {
    fontSize: 25 * scale,
    fontWeight:700,
    color:'#ffffff'
  },
});
