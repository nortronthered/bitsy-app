import {Text, View, Button} from "react-native";
import {Card, Slider} from "react-native-elements";
import React from "react";

const RainbowShiftPattern = ({handleRainbowShiftPatternUpdate}) => {
  return (
    <Card title="Rainbow Shift">
      <Button
        onPress={handleRainbowShiftPatternUpdate}  
        title="Rainbow Shift"
      />
    </Card>
  )
};

export default RainbowShiftPattern;