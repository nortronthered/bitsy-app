import {Text, View} from "react-native";
import {Card, Slider} from "react-native-elements";
import React from "react";
import {CustomPicker} from "react-native-custom-picker";

const videos = [
  {
    label: 'My Face',
    value: 'myface'
  },
  {
    label: 'Katya',
    value: 'katya'
  },
  {
    label: 'Katya Lipss',
    value: 'katya-lips'
  },
  {
    label: 'Circles',
    value: 'circles'
  }
];

const LoopingVideoPattern = ({handleVideoChange}) => {
  return (
    <Card title="Videos">
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
        <CustomPicker
          placeholder={'Please select your favorite item...'}
          options={videos}
          getLabel={item => item.label}
          onValueChange={newVideo => {
            handleVideoChange(newVideo)
            // Alert.alert('Selected Item', value ? JSON.stringify(value) : 'No item were selected!')
          }}
        />
      </View>
    </Card>
  )
};

export default LoopingVideoPattern;