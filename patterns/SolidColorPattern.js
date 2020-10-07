import {Dimensions, Text, View} from "react-native";
import {Card, Slider} from "react-native-elements";
import React from "react";

const SolidColorPattern = ({handleSolidColorPatternUpdate, color}) => {
  return (
    <Card title="Solid Color">
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

      <View style={{flex: 1}}>
        <Text>Color wheeel</Text>
        <ColorWheel
          // initialColor="#ee0000"
          onColorChange={color => console.log({color})}
          onColorChangeComplete={color => onChange(color)}
          // style={{width: Dimensions.get('window').width}}
          // thumbStyle={{ height: 30, width: 30, borderRadius: 30}}
        />
      </View>
      

    </Card>
  )
};

export default SolidColorPattern;