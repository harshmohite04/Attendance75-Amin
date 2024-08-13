import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import NavBar from '../compo/NavBar';
const {width} = Dimensions.get('window');
const scale = width / 320;

const Home = ({navigation}) => {
  const [year, setYear] = useState('');
  return (
    <View style={styles.container}>
      <NavBar />
      <View style={styles.body}>
        <Text style={styles.yearTxt}>Select Year</Text>
        <View style={styles.yearList}>
          <View style={styles.coverYear}>
            <TouchableOpacity
              onPress={() => {
                setYear('FY');
                navigation.navigate('Division',{year:'FY'})
                console.log(year)
              }}>
              <Text style={styles.txt}>First Year</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.coverYear}>
            <TouchableOpacity
              onPress={() => {
                setYear('SY');
                navigation.navigate('Division',{year:'SY'})
                console.log(year)
              }}>
              <Text style={styles.txt}>Second Year</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.coverYear}>
            <TouchableOpacity
              onPress={() => {
                setYear('TY');
                navigation.navigate('Division',{year:'TY'})
                console.log(year)
              }}>
              <Text style={styles.txt}>Third Year</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.coverYear}>
            <TouchableOpacity
              onPress={() => {
                setYear('LY');
                navigation.navigate('Division',{year:'LY'})
                console.log(year)
              }}>
              <Text style={styles.txt}>Fourth Year</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  body: {
    flex: 11,
    alignItems: 'center',
  },
  txt: {
    color: '#000000',
    fontSize: 25 * scale,
    fontWeight: '500',
  },
  yearList: {
    justifyContent: 'space-evenly',
    flex: 1,
    paddingBottom: 100 * scale,
  },
  yearTxt: {
    color: '#000000',
    fontSize: 35 * scale,
    fontWeight: '800',
    marginTop:15*scale
  },
  coverYear: {
    backgroundColor: 'red',
    padding: 10 * scale,
    borderRadius: 50 * scale,
    paddingHorizontal:50 * scale,
    alignItems:'center'
  },
});
