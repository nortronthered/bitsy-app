import {Dimensions, Text, View} from "react-native";
import {Card, Slider} from "react-native-elements";
import React from "react";

const SolidColorPattern = ({handleSolidColorPatternUpdate, color}) => {
  return (
    <Card>
      <Card.Title>Solid Color</Card.Title>
      {/* <View>
        <Text>(Placeholder)</Text>
        <Slider
          maximumValue={255}
          value={255}
        />
      </View> */}
      <View>
        <Text>Red Value: {color.red}</Text>
        <Slider
          maximumValue={255}
          value={color.red}
          onValueChange={value => handleSolidColorPatternUpdate({red: parseInt(value)})}
        />
      </View>
      <View>
        <Text>Green Value: {color.green}</Text>
        <Slider
          maximumValue={255}
          value={color.green}
          onValueChange={value => handleSolidColorPatternUpdate({green: parseInt(value)})}
        />
      </View>
      <View>
        <Text>Blue Value: {color.blue}</Text>
        <Slider
          maximumValue={255}
          value={color.blue}
          onValueChange={value => handleSolidColorPatternUpdate({blue: parseInt(value)})}
        />
      </View>
    </Card>
  )
};

export default SolidColorPattern;