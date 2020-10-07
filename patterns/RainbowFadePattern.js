import {Text, View} from "react-native";
import {Card, Slider} from "react-native-elements";
import React from "react";

const RainbowFadePattern = ({handleRainbowFadeChange}) => {


  return (
    <Card>
      <Card.Title>Rainbow Fade</Card.Title>
      <View>
        <Text>Speed Value: {speed}</Text>
        <Slider
          maximumValue={10}
          value={color.red}
          onValueChange={value => handleRainbowFadeChange({speed: parseInt(value)})}
        />
      </View>
    </Card>
  )
};

export default RainbowFadePattern;