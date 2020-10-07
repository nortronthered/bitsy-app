import React, { Fragment, useEffect, useState, useContext } from 'react';
import { StyleSheet, Alert, Picker, Text, View, ScrollView } from 'react-native';
import { BitsyContext } from './BitsyContext';
import SolidColorPattern from './patterns/SolidColorPattern';
import PulseSolidColorPattern from './patterns/PulseSolidColorPattern';
import RainbowShiftPattern from './patterns/RainbowShiftPattern';
import SolidColor from './patterns/SolidColor';

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
    console.log("handling pulse color change event");
    setPulseColor({...pulseColor, ...colorChange});
  };

  const handleRainbowShiftPatternUpdate = () => {
    console.log("trying to switch to rainbow cross fade")
    context.updatePattern('rainbowCrossFade', {});
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
    <ScrollView style={context.config.styles.container}>
      <PulseSolidColorPattern
        color={pulseColor}
        handlePulseSolidColorPatternUpdate={handlePulseSolidColorPatternUpdate}
      />

      <SolidColorPattern
        color={color}
        handleSolidColorPatternUpdate={handleSolidColorPatternUpdate}
      />
      
      <RainbowShiftPattern
        handleRainbowShiftPatternUpdate={handleRainbowShiftPatternUpdate}
      />
    </ScrollView>
  );
}

module.exports = SolidColorPatterns;