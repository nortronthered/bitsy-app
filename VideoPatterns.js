import React, { Fragment, useEffect, useState, useContext } from 'react';
import { StyleSheet, Alert, Picker, Text, View, ScrollView } from 'react-native';
import { BitsyContext } from './BitsyContext';
import LoopingVideoPattern from './patterns/LoopingVideo';


const VideoPatterns = () => {
  const context = useContext(BitsyContext);

  const [videos, setVideos] = useState([]);

  const handleVideoChange = newVideo => {
    context.updatePattern('jsonVideo', {'video': newVideo.value});
  };

  useEffect(() => {
    console.log('fetching more videos');
    const address =`${context.config.apiAddress.apiAddress}/videos`;
    fetch(address, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((json) => {
      console.log('videos object', json);
      setVideos(json.videos)
    })
    .catch((error) => {
      alert("There's been an error");
      console.log(error);
    });
  }, []);

  return (
    <ScrollView style={context.styles.container}>
      <LoopingVideoPattern
        videos={videos}
        handleVideoChange={handleVideoChange}
      />
    </ScrollView>
  );
}

module.exports = VideoPatterns;