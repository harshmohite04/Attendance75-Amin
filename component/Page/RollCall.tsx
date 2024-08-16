import {
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  Dimensions,
  View,
} from 'react-native';
import React, {useState} from 'react';
import NavBar from '../compo/NavBar';
import {ScrollView} from 'react-native-gesture-handler';

const {width} = Dimensions.get('window');
const scale = width / 320;

const RollCall = ({route}) => {
  const year = route.params.year;
  const division = route.params.division;
  const subject = route.params.subject;

  const isDark = useColorScheme() === 'dark';

  const [rollCall, setRollCall] = useState(Array(66).fill(0));

  const toggleRollCall = index => {
    const newRollCall = [...rollCall];
    newRollCall[index] = newRollCall[index] === 0 ? 1 : 0;
    setRollCall(newRollCall);
  };

  const getSelectedRolls = () => {
    return rollCall
      .map((value, index) => (value === 1 ? index + 1 : null))
      .filter(value => value !== null);
  };

  const updateAttendance = async () => {
    const selectedRolls = getSelectedRolls();

    if (selectedRolls.length === 0) {
      alert('Please select at least one roll number');
      return;
    }

    try {
      const response = await fetch('https://innov8ture.pythonanywhere.com/api/update_attendance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: subject,
          roll_nos: selectedRolls,
        }),
      });

      const data = await response.json();
      if (data.error) {
        alert(data.error);
      } else {
        alert('Attendance updated successfully');
      }
    } catch (error) {
      alert('Error updating attendance');
      console.log(error)
    }
  };

  return (
    <View style={styles.container}>
      <NavBar />
      <View style={styles.body}>
        <ScrollView>
          {rollCall.map((status, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.rollItem]}
              onPress={() => toggleRollCall(index)}>
              <Text style={[styles.rollText,{backgroundColor: status ? '#32CD32' : '#d6d6d6'}]}>
                Roll {index + 1}: {status ? 'Present' : 'Absent'}
              </Text>
            </TouchableOpacity>
          ))}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Selected Rolls: {JSON.stringify(getSelectedRolls())}
        </Text>
      </View>
            <TouchableOpacity onPress={updateAttendance}>
          <View style={styles.btn}>
              <Text style={styles.submit}>Submit</Text>
          </View>
            </TouchableOpacity>
        </ScrollView>
      </View>

    </View>
  );
};

export default RollCall;

const styles = StyleSheet.create({
  btn: {
    alignSelf: 'center',
    width: '30%',
    backgroundColor: 'black',
    paddingVertical: 10 * scale,
    paddingHorizontal: 15 * scale,
    marginBottom: 250 * scale,
    borderRadius: 10 * scale,
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  body: {
    flex: 11,
  },
  rollItem: {
    paddingHorizontal: 20 * scale,
    paddingVertical: 5 * scale,
    borderRadius: 10 * scale,
    marginVertical: 5 * scale,
    marginHorizontal:10*scale
  },
  rollText: {
    color: '#000000',
    fontSize: 15 * scale,
    backgroundColor: '#d6d6d6',
    paddingVertical: 10 * scale,
    paddingHorizontal: 15 * scale,
    borderRadius: 10 * scale,
  },
  footer: {
    flex: 1,
    backgroundColor: '#c2c0ba',
    marginHorizontal:10*scale,
    marginBottom:15*scale,
    padding:10*scale,
    borderRadius:15*scale,
    marginTop:10*scale
  },
  footerText: {
    fontSize: 20 * scale,
    color: '#000000',
  },
  submit: {
    color: '#ffffff',
    fontSize: 20 * scale,
    alignSelf: 'center',
    fontWeight:'800'
    
  },
});
