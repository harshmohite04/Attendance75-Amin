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
          onPress={() => {
            const subject ="SubSP";
            navigation.navigate('rollCall', {
              year: year,
              division: division,
              sub: subject,
            });
          }}>
          <Text style={styles.txtL}>System Programming</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            const subject ="SubCn";
            navigation.navigate('rollCall', {
              year: year,
              division: division,
              sub: subject,
            });
          }}>
          <Text style={styles.txtL}>Computer Networks</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            const subject ="SubDwdm";
            navigation.navigate('rollCall', {
              year: year,
              division: division,
              sub: subject,
            });
          }}>
          <Text style={styles.txtL}>Data WareHouse & Data Mining</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            const subject ="SubDaa";
            navigation.navigate('rollCall', {
              year: year,
              division: division,
              sub: subject,
            });
          }}>
          <Text style={styles.txtL}>Design Analysis of Algorithm</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            const subject ="SubOs";
            navigation.navigate('rollCall', {
              year: year,
              division: division,
              sub: subject,
            });
          }}>
          <Text style={styles.txtL}>Operating System</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            const subject ="SubSpLab";
            navigation.navigate('rollCall', {
              year: year,
              division: division,
              sub: subject,
            });
          }}>
          <Text style={styles.txtL}>System Programming Lab</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            const subject ="SubCnLab";
            navigation.navigate('rollCall', {
              year: year,
              division: division,
              sub: subject,
            });
          }}>
          <Text style={styles.txtL}>Computer Networks Lab</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            const subject ="SubDwdmLab";
            navigation.navigate('rollCall', {
              year: year,
              division: division,
              sub: subject,
            });
          }}>
          <Text style={styles.txtL}>Data WareHouse & Data Mining Lab</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            const subject ="SubOsLab";
            navigation.navigate('rollCall', {
              year: year,
              division: division,
              sub: subject,
            });
          }}>
          <Text style={styles.txtL}>Operating System Lab</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            const subject ="SubPm";
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
});
