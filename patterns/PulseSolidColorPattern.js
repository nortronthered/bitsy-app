import {Text, View} from "react-native";
import {Card, Slider} from "react-native-elements";
import React from "react";

const PulseSolidColorPattern = ({color, handlePulseSolidColorPatternUpdate}) => {
  return (
    <Card title="Pulse Solid Color">
      <View>
        <Text>Red Value: {color.red}</Text>
        <Slider
          maximumValue={255}
          value={color.red}
          onValueChange={value => handlePulseSolidColorPatternUpdate({red: parseInt(value)})}
        />
      </View>
      <View>
        <Text>Green Value: {color.green}</Text>
        <Slider
          maximumValue={255}
          value={color.green}
          onValueChange={value => handlePulseSolidColorPatternUpdate({green: parseInt(value)})}
        />
      </View>
      <View>
        <Text>Blue Value: {color.blue}</Text>
        <Slider
          maximumValue={255}
          value={color.blue}
          onValueChange={value => handlePulseSolidColorPatternUpdate({blue: parseInt(value)})}
        />
      </View>
    </Card>
  )
};

export default PulseSolidColorPattern;