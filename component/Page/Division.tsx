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

const Division = ({navigation, route}) => {
  const [div, setDiv] = useState('');
  const year = route.params.year;
  return (
    <View style={styles.container}>
      <NavBar />
      <View style={styles.body}>
        <View style={styles.direction}>
          <TouchableOpacity
            disabled={true}
            onPress={() => {
              const division = 'A';
              console.log(year)
              console.log(division)
              setDiv('A');
              console.log(div);
              navigation.navigate('Subject', {year: year, division: division});
            }}
            style={styles.divListD}>
            <Text style={styles.txt}>A</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={true}
            onPress={() => {
              const division = 'B';
              setDiv('B');
              navigation.navigate('Subject', {year: year, division: division});
            }}
            style={styles.divListD}>
            <Text style={styles.txt}>B</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.direction}>
          <TouchableOpacity
            disabled={true}
            onPress={() => {
              const division = 'C';
              setDiv('C');
              navigation.navigate('Subject', {year: year, division: division});
            }}
            style={styles.divListD}>
            <Text style={styles.txt}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={true}
            onPress={() => {
              const division = 'D';
              setDiv('D');
              navigation.navigate('Subject', {year: year, division: division});
            }}
            style={styles.divListD}>
            <Text style={styles.txt}>D</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.direction}>
          <TouchableOpacity
            disabled={true}
            onPress={() => {
              setDiv('E');
              const division = 'E';
              navigation.navigate('Subject', {year: year, division: division});
            }}
            style={styles.divListD}>
            <Text style={styles.txt}>E</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setDiv('F');
              const division = 'F';
              navigation.navigate('Subject', {year: year, division: division});
            }}
            style={styles.divList}>
            <Text style={styles.txt}>F</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          disabled={true}
          onPress={() => {
            setDiv('G');
            const division = 'G';
            navigation.navigate('Subject', {year: year, division: division});
          }}
          style={styles.divListD}>
          <Text style={styles.txt}>G</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Division;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  body: {
    flex: 11,
    alignItems: 'center',
    marginTop:20*scale
  },
  divList: {
    borderRadius: 25 * scale,
    backgroundColor: '#49FAC5',
    paddingVertical:5*scale,
    margin: 15 * scale,
    paddingHorizontal:80*scale
  },
  divListD: {
    borderRadius: 25 * scale,
    backgroundColor: '#1FC392',
    paddingVertical:5*scale,
    margin: 15 * scale,
    paddingHorizontal:80*scale
  },
  txt: {
    color: '#000000',
    fontSize: 30 * scale,
    fontWeight: '800',
  },
  direction: {
    // flexDirection: 'row',
  },
});
