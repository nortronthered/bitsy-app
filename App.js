import 'react-native-gesture-handler';
import React, { Fragment, useEffect, useState, useContext } from 'react';
import { StyleSheet, Alert, Picker, Text, View, ScrollView } from 'react-native';
import { Button, Card, ListItem, Icon, Slider } from 'react-native-elements';
import { CustomPicker } from 'react-native-custom-picker';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BitsyContext } from './BitsyContext';

import appConfig from './config';
import HomeScreen from './HomeScreen';
import VideoPatterns from './VideoPatterns';
import SolidColorPatterns from './SolidColorPatterns';
import SettingsPage from './SettingsPage';
// import RainbowFadePattern from './patterns/RainbowFadePattern';

const Stack = createStackNavigator();

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
    const address =`${apiAddress}/pattern`;
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

  const [apiAddress, setApiAddress] = useState(appConfig.defaultApiAddress);

  const apiIsAvailable = () => {
    const address =`${apiAddress}/test`;
    return fetch(address, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      // if we receive back any positive response, this is good
      console.log(`API address ${apiAddress} is available`)
      return true;
    })
    .catch((error) => {
      alert("Cannot reach API. Please update address in settings");
      console.log(error);
    });
  }

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
    },
    button: {
      backgroundColor: 'pink',
    }
  });

  const config = {
    apiAddress: {
      apiAddress,
      setApiAddress,
    },
    apiIsAvailable,
    styles,
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
