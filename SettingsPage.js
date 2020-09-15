import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Alert, Text, View, ScrollView } from 'react-native';
import { BitsyContext } from './BitsyContext';

const SettingsPage = () => {
  const context = useContext(BitsyContext);
  return (
    <ScrollView style={context.styles.container}>
      <Text>API Adress: {context.config.API_ADDRESS}</Text>
    </ScrollView>
  );
}

module.exports = SettingsPage;