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
            onPress={() => {
              const division = 'A';
              setDiv('A');
              console.log(div);
              navigation.navigate('Subject', {year: year, division: division});
            }}
            style={styles.divList}>
            <Text style={styles.txt}>A</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              const division = 'B';
              setDiv('B');
              navigation.navigate('Subject', {year: year, division: division});
            }}
            style={styles.divList}>
            <Text style={styles.txt}>B</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.direction}>
          <TouchableOpacity
            onPress={() => {
              const division = 'C';
              setDiv('C');
              navigation.navigate('Subject', {year: year, division: division});
            }}
            style={styles.divList}>
            <Text style={styles.txt}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              const division = 'D';
              setDiv('D');
              navigation.navigate('Subject', {year: year, division: division});
            }}
            style={styles.divList}>
            <Text style={styles.txt}>D</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.direction}>
          <TouchableOpacity
            onPress={() => {
              setDiv('E');
              const division = 'E';
              navigation.navigate('Subject', {year: year, division: division});
            }}
            style={styles.divList}>
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
          onPress={() => {
            setDiv('G');
            const division = 'G';
            navigation.navigate('Subject', {year: year, division: division});
          }}
          style={styles.divList}>
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
    backgroundColor: 'yellow',
  },
  body: {
    flex: 11,
    alignItems: 'center',
    marginTop:20*scale
  },
  divList: {
    borderRadius: 25 * scale,
    backgroundColor: 'red',
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
