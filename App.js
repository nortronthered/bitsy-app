import 'react-native-gesture-handler';
import React, { Fragment, useEffect, useState } from 'react';
import { StyleSheet, Alert, Picker, Text, View, ScrollView } from 'react-native';
import { Button, Card, ListItem, Icon, Slider } from 'react-native-elements';
import { CustomPicker } from 'react-native-custom-picker';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoopingVideoPattern from './patterns/LoopingVideo';
import SolidColorPattern from './patterns/SolidColorPattern';
import PulseSolidColorPattern from './patterns/PulseSolidColorPattern';
// import RainbowFadePattern from './patterns/RainbowFadePattern';

import SolidColor from './patterns/SolidColor';

const Stack = createStackNavigator();

const API_ADDRESS = 'http://192.168.0.22:3000';

const SolidColorPatterns = () => {
  const [color, setColor] = useState({'red': 255, 'green': 0, 'blue': 0});

  const [pulseColor, setPulseColor] = useState({'red': 255, 'green': 0, 'blue': 0});

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
    updatePattern('solidColor', solidColor.serialize());
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

const VideoPatterns = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    console.log('fetching more videos');
    const address =`${API_ADDRESS}/videos`;
    fetch(address, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((json) => {
      console.log('videos object', json);
      setVideos(json.videos)
    })
    .catch((error) => {
      alert("There's been an error");
      console.log(error);
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <LoopingVideoPattern
        videos={videos}
        handleVideoChange={handleVideoChange}
      />
    </ScrollView>
  );
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

//TODO: should Pattern be an object complete and serializable with its own JSON props? yes
//TODO: give people the ability to create their own set of params
//TODO: Highlight selected component
//TODO: Expo without internet
//TODO: see if there is connectivity to the API, and if not, guide the user to set the API address
//TODO: set API address
const Bitsy = () => {

  const [solidColor, setSolidColor] = useState(new SolidColor(255,0,0));

  const [currentPattern, setCurrentPattern] = useState(solidColor);

  const handlePatternSelect = (pattern) => {
    console.log('pattern selected');
    return;
  };

  const handleVideoChange = newVideo => {
    updatePattern('jsonVideo', {'video': newVideo.value});
  };

  // const handleRainbowFadeChange = speed => {
  //   updatePattern('rainbowFade', {'speed': speed.value});
  // };

  const updatePattern = (pattern, patternData) => {

    let data = {
      pattern: pattern,
      patternData: patternData,
    };
    const address =`${API_ADDRESS}/pattern`;
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


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Color Patterns" component={SolidColorPatterns} />
        <Stack.Screen name="Video Patterns" component={VideoPatterns} />
      </Stack.Navigator>
    </NavigationContainer>
  );

};

export default Bitsy;

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
