import {Text, View} from "react-native";
import {Card, Slider} from "react-native-elements";
import React from "react";
import {CustomPicker} from "react-native-custom-picker";

const LoopingVideoPattern = ({handleVideoChange, videos}) => {
  let vids = videos.map(video => ({ label: video.description, value: video.name }));
  console.log('vids', vids);
  return (
    <Card title="Videos">
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
        <CustomPicker
          placeholder={'Please select your favorite item...'}
          options={vids}
          getLabel={item => item.label}
          onValueChange={newVideo => {
            handleVideoChange(newVideo);
          }}
        />
      </View>
    </Card>
  )
};

export default LoopingVideoPattern;