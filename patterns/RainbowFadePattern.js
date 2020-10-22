import {Button, Text, View} from "react-native";
import {Card, Slider} from "react-native-elements";
import React from "react";

const RainbowFadePattern = ({handleRainbowFadePatternUpdate, rainbowFadeSpeed}) => {

  return (
    <Card>
      <Card.Title>Rainbow Fade</Card.Title>
      <View>
      {/* <Button
        title="Rainbow Fade"
        onPress={handleRainbowFadePatternUpdate}
      /> */}
        <Text>Speed Value: {rainbowFadeSpeed}</Text>
        <Slider
          maximumValue={10}
          value={rainbowFadeSpeed}
          onValueChange={value => handleRainbowFadePatternUpdate(parseInt(value))}
        />
      </View>
    </Card>
  )
};

export default RainbowFadePattern;