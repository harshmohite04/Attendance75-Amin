import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import React, { useMemo, useState } from 'react';
import NavBar from '../compo/NavBar';

import RadioGroup from 'react-native-radio-buttons-group';

const RollCall = () => {
  const isDark = useColorScheme() == 'dark';

  const radioButtons = useMemo(
    () => [
      {
        id: '1', 
        label: 'Option 1',
        value: 'option1',
      },
      {
        id: '2',
        label: 'Option 2',
        value: 'option2',
      },
    ],
    [],
  );
  
  const [selectedId, setSelectedId] = useState();

  return (
    <View style={styles.container}>
      <NavBar />
      <View style={styles.body}>
        <RadioGroup 
          radioButtons={radioButtons} 
          onPress={setSelectedId}
          selectedId={selectedId}
        />
      </View>
    </View>
  );
};

export default RollCall;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  body: {
    flex: 11,
  },
});
