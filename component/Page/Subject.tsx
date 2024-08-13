import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import NavBar from '../compo/NavBar';

const {width} = Dimensions.get('window');
const scale = width / 320;
const Subject = ({navigation, route}) => {
  const year = route.params.year;
  const division = route.params.division;
  return (
    <View style={styles.container}>
      <NavBar />
      <View style={styles.body}>
        <TouchableOpacity
        style={styles.hr}
          onPress={() => {
            const subject ="SP";
            navigation.navigate('rollCall', {
              year: year,
              division: division,
              sub: subject,
            });
          }}>
          <Text style={styles.txtL}>System Programming</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.hr}
          onPress={() => {
            const subject ="CN";
            navigation.navigate('rollCall', {
              year: year,
              division: division,
              sub: subject,
            });
          }}>
          <Text style={styles.txtL}>Computer Networks</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.hr}
          onPress={() => {
            const subject ="DWDM";
            navigation.navigate('rollCall', {
              year: year,
              division: division,
              sub: subject,
            });
          }}>
          <Text style={styles.txtL}>Data WareHouse & Data Mining</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.hr}
          onPress={() => {
            const subject ="DAA";
            navigation.navigate('rollCall', {
              year: year,
              division: division,
              sub: subject,
            });
          }}>
          <Text style={styles.txtL}>Design Analysis of Algorithm</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.hr}
          onPress={() => {
            const subject ="OS";
            navigation.navigate('rollCall', {
              year: year,
              division: division,
              sub: subject,
            });
          }}>
          <Text style={styles.txtL}>Operating System</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.hr}
          onPress={() => {
            const subject ="SP_LAB";
            navigation.navigate('rollCall', {
              year: year,
              division: division,
              sub: subject,
            });
          }}>
          <Text style={styles.txtL}>System Programming Lab</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.hr}
          onPress={() => {
            const subject ="CN_LAB";
            navigation.navigate('rollCall', {
              year: year,
              division: division,
              sub: subject,
            });
          }}>
          <Text style={styles.txtL}>Computer Networks Lab</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.hr}
          onPress={() => {
            const subject ="DWDM_LAB";
            navigation.navigate('rollCall', {
              year: year,
              division: division,
              sub: subject,
            });
          }}>
          <Text style={styles.txtL}>Data WareHouse & Data Mining Lab</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.hr}
          onPress={() => {
            const subject ="OS_LAB";
            navigation.navigate('rollCall', {
              year: year,
              division: division,
              sub: subject,
            });
          }}>
          <Text style={styles.txtL}>Operating System Lab</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.hr}
          onPress={() => {
            const subject ="PM";
            navigation.navigate('rollCall', {
              year: year,
              division: division,
              sub: subject,
            });
          }}>
          <Text style={styles.txtL}>Project Management</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Subject;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  body: {
    flex: 11,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 20 * scale,
  },
  txtL: {
    color: '#000000',
    fontSize: 20 * scale,
    fontWeight: '500',
  },
  hr:{
    borderBottomWidth:1,
    
  }
});
