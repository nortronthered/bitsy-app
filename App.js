import React, { Fragment, useEffect, useState } from 'react';
import { StyleSheet, Alert, Picker, Text, View, ScrollView } from 'react-native';
import { Button, Card, ListItem, Icon, Slider } from 'react-native-elements';
import { CustomPicker } from 'react-native-custom-picker';

import LoopingVideoPattern from './patterns/LoopingVideo';
import SolidColorPattern from './patterns/SolidColorPattern';
import PulseSolidColorPattern from './patterns/PulseSolidColorPattern';
// import RainbowFadePattern from './patterns/RainbowFadePattern';

import SolidColor from './patterns/SolidColor';

const API_ADDRESS = 'http://192.168.0.2:3000';
// const API_ADDRESS = 'http://192.168.0.128:3000';
// const API_ADDRESS = 'http://192.168.87.49:3000';

//TODO: should Pattern be an object complete and serializable with its own JSON props? yes
//TODO: give people the ability to create their own set of params
//TODO: Highlight selected component
//TODO: Expo without internet
const Bitsy = () => {

  const [solidColor, setSolidColor] = useState(new SolidColor(255,0,0));

  const [color, setColor] = useState({'red': 255, 'green': 0, 'blue': 0});

  const [currentPattern, setCurrentPattern] = useState(solidColor);

  const [videos, setVideos] = useState([]);

  const handlePatternSelect = (pattern) => {
    console.log('pattern selected');
    return;
  };

  // TODO: play around with updating value vs stepping
  // TODO: add color representation
  const handleSolidColorPatternUpdate = colorChange => {
    setColor({...color, ...colorChange});
  };

  const handlePulseSolidColorPatternUpdate = colorChange => {
    setColor({...color, ...colorChange});
  };

  // TODO: prevent this from rendering every time
  useEffect(() => {
    updatePattern('solidColor', solidColor.serialize());
  }, [solidColor]);

  useEffect(() => {
    // TODO: if pattern is active, update it
    setSolidColor(new SolidColor(color.red, color.green, color.blue));
  }, [color]);


  const handleVideoChange = newVideo => {
    updatePattern('loopingVideo', {'video': newVideo.value});
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
      console.log('videos obje', json);
      setVideos(json)
    })
    .catch((error) => {
      alert("There's been an error");
      console.log(error);
    });
  }, []);

  return (
    <Fragment>
      <ScrollView style={styles.container}>
        <SolidColorPattern
          color={color}
          handleSolidColorPatternUpdate={handleSolidColorPatternUpdate}
        />

        <PulseSolidColorPattern
          color={color}
          handlePulseSolidColorPatternUpdate={handlePulseSolidColorPatternUpdate}
        />

        <LoopingVideoPattern
          videos={videos}
          handleVideoChange={handleVideoChange}
        />

        {/*<RainbowFadePattern*/}
          {/*handleRainbowFadeChange={handleRainbowFadeChange}*/}
        {/*/>*/}

        <Button
          title="GO"
          onPress={handlePatternSelect}
        />
      </ScrollView>
    </Fragment>
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
