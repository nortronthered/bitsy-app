import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Alert, Button, Text, TextInput, View, ScrollView } from 'react-native';
import { BitsyContext } from './BitsyContext';
import config from './config';

const SettingsPage = () => {
  const context = useContext(BitsyContext);

  const [tmpApiAddress, setTmpApiAddress] = useState(context.api)

  const onPressSaveApiAddress = () => {
    context.config.apiAddress.setApiAddress(tmpApiAddress);    
  }

  const onPressTestApiAddress = () => {
    //TODO: add spinny thing and blank out all other actions
    context.config.apiIsAvailable()
    .then((response) => {
      // if we receive back any positive response, this is good
      alert("API available")
      console.log("API is available")
    })
    .catch((error) => {
      alert("Cannot reach API. Please update address");
      console.log(error);
    });
  }

  const onPressResetApiAddress = () => {
    context.config.apiAddress.setApiAddress(config.defaultApiAddress);
  }

  return (
    <ScrollView style={context.styles.container}>
      <Text
        style={context.config.styles.title}
      >
        Current API Adress: {context.config.apiAddress.apiAddress}
      </Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        value={tmpApiAddress}
        onChangeText={value => setTmpApiAddress(value)}
      />
      <Button
        onPress={onPressSaveApiAddress}  
        style={context.config.styles.button}
        color="#f194ff"
        title="Save"
      />
      <Button
        onPress={onPressTestApiAddress}  
        title="Test"
      />
      <Button
        onPress={onPressResetApiAddress}  
        title="Reset to Default"
      />

    </ScrollView>
  );
}

module.exports = SettingsPage;