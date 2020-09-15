import React from 'react';
import { Text, View, Button } from 'react-native'

function
 HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Video Patterns"
        onPress={() => navigation.navigate("Video Patterns")}
      />
      <Button
        title="Solid Color Patterns"
        onPress={() => navigation.navigate("Color Patterns")}
      />
      <Button
        title="Settings Page"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
}

module.exports = HomeScreen;