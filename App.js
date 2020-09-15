import 'react-native-gesture-handler';
import React, { Fragment, useEffect, useState, useContext } from 'react';
import { StyleSheet, Alert, Picker, Text, View, ScrollView } from 'react-native';
import { Button, Card, ListItem, Icon, Slider } from 'react-native-elements';
import { CustomPicker } from 'react-native-custom-picker';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BitsyContext } from './BitsyContext';

import HomeScreen from './HomeScreen';
import VideoPatterns from './VideoPatterns';
import SettingsPage from './SettingsPage';
import SolidColorPattern from './patterns/SolidColorPattern';
import PulseSolidColorPattern from './patterns/PulseSolidColorPattern';
// import RainbowFadePattern from './patterns/RainbowFadePattern';

import SolidColor from './patterns/SolidColor';

const Stack = createStackNavigator();

// TODO: get this to not automatically scroll from the side when adjusting the values
// TODO: yanno, this is probably gonna be a better laid out UI anyway, so maybe ignore the above...
const SolidColorPatterns = () => {
  const context = useContext(BitsyContext);

  const [color, setColor] = useState({'red': 255, 'green': 0, 'blue': 0});

  const [pulseColor, setPulseColor] = useState({'red': 255, 'green': 0, 'blue': 0});

  const [solidColor, setSolidColor] = useState(new SolidColor(255,0,0));

  // TODO: play around with updating value vs stepping
  // TODO: add color representation
  const handleSolidColorPatternUpdate = colorChange => {
    console.log("handling solid color change event");
    setColor({...color, ...colorChange});
  };

  const handlePulseSolidColorPatternUpdate = colorChange => {
    setPulseColor({...color, ...colorChange});
  };

  // TODO: prevent this from rendering every time
  useEffect(() => {
    context.updatePattern('solidColor', solidColor.serialize());
  }, [solidColor]);
  
  useEffect(() => {
    // TODO: if pattern is active, update it
    setSolidColor(new SolidColor(color.red, color.green, color.blue));
  }, [color]);

  return (
    <ScrollView style={styles.container}>
      <PulseSolidColorPattern
        color={color}
        handlePulseSolidColorPatternUpdate={handlePulseSolidColorPatternUpdate}
      />

      <SolidColorPattern
        color={color}
        handleSolidColorPatternUpdate={handleSolidColorPatternUpdate}
      />
    </ScrollView>
  );
}



//TODO: should Pattern be an object complete and serializable with its own JSON props? yes
//TODO: give people the ability to create their own set of params
//TODO: Highlight selected component
//TODO: Expo without internet
//TODO: see if there is connectivity to the API, and if not, guide the user to set the API address
//TODO: set API address
//TODO: add a "current pattern" button
const Bitsy = () => {

  const updatePattern = (pattern, patternData) => {

    let data = {
      pattern: pattern,
      patternData: patternData,
    };
    const address =`${config.API_ADDRESS}/pattern`;
    fetch(address, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((response) => {
      console.log('switching to new pattern');
    })
    .catch((error) => {
      alert("There's been an error");
      console.log(error);
    });
  };

  const styles = StyleSheet.create({
    container: {
     flex: 1,
     // justifyContent: 'center',
    },
    headerButton: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },
    alternativeLayoutButtonContainer: {
      margin: 20,
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  });

  const config = {
    API_ADDRESS: 'http://192.168.0.22:3000',
  };
  
  // TODO: i want to load this up with a default state without interrupting what's currently going on
  // TOOD: maybe i can put a check to not switch the pattern if we haven't explicitly delivered instructions from the app?
  const [currentPattern, setCurrentPattern] = useState();

  const handlePatternSelect = (pattern) => {
    console.log('pattern selected');
    return;
  };

  // const handleRainbowFadeChange = speed => {
  //   updatePattern('rainbowFade', {'speed': speed.value});
  // };

  return (
    <BitsyContext.Provider
      value={
        {
          currentPattern,
          setCurrentPattern,
          updatePattern,
          styles,
          config,
        }
      }
    >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Color Patterns" component={SolidColorPatterns} />
          <Stack.Screen name="Video Patterns" component={VideoPatterns} />
          <Stack.Screen name="Settings" component={SettingsPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </BitsyContext.Provider>
  );

};

export default Bitsy;
