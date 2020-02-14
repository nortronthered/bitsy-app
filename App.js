import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const API_ADDRESSS = 'http://192.168.0.2:3000';

export default class ButtonBasics extends Component {
  _onPressButton() {
    alert('You tapped the button!')
  }

  //TODO: Make these more generic
  //TODO: remove alerts and opt for current status/toaster

  _onPressRed() {
    fetch(`${API_ADDRESSS}/red`, { method: 'GET'})
    .then((response) => {
      alert("red!")
    })
    .catch((error) => {
      alert("there's been an error")
    });
  }

  _onPressBlackout() {
    fetch(`${API_ADDRESSS}/black`, { method: 'GET'})
    .then((response) => {
      alert("blackout!")
    })
    .catch((error) => {
      alert("there's been an error")
    });
  }

  _onPressGreen() {
    fetch(`${API_ADDRESSS}/green`, { method: 'GET'})
    .then((response) => {
      alert("green!")
    })
    .catch((error) => {
      alert("there's been an error")
    });
  }

  _onPressBlue() {
    fetch(`${API_ADDRESSS}/blue`, { method: 'GET'})
    .then((response) => {
      alert("blue!")
    })
    .catch((error) => {
      alert("there's been an error")
    });
  }

  _onPressPurple() {
    fetch(`${API_ADDRESSS}/purple`, { method: 'GET'})
    .then((response) => {
      alert("purple!")
    })
    .catch((error) => {
      alert("there's been an error")
    });
  }

  _onPressFlicker() {
    fetch(`${API_ADDRESSS}/flicker`, { method: 'GET'})
    .then((response) => {
      alert("flicker!")
    })
    .catch((error) => {
      alert("there's been an error")
    });
  }

  _onPressRainbow() {
    fetch(`${API_ADDRESSS}/rainbowFade`, { method: 'GET'})
    .then((response) => {
      alert("rainbow!")
    })
    .catch((error) => {
      alert("there's been an error")
    });
  }

  _onPressVideo() {
    fetch(`${API_ADDRESSS}/video`, { method: 'GET'})
    .then((response) => {
      alert("video!")
    })
    .catch((error) => {
      alert("there's been an error")
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerButton}>Mitsy Controller!</Text>
        <View style={styles.blackoutButton}>
          <Button
            onPress={this._onPressBlackout}
            title="Blackout Pattern"
            color="#666666"
          />
        </View>
        <View style={styles.redButton}>
          <Button
            onPress={this._onPressRed}
            title="Red Pattern"
            color="#FF0000"
          />
        </View>
        <View style={styles.greenButton}>
          <Button
            onPress={this._onPressGreen}
            title="Green Pattern"
            color="#00FF00"
          />
        </View>
        <View style={styles.blueButton}>
          <Button
            onPress={this._onPressBlue}
            title="Blue Pattern"
            color="#0000FF"
          />
        </View>
        <View style={styles.purpleButton}>
          <Button
            onPress={this._onPressPurple}
            title="Purple Pattern"
            color="#FF00FF"
          />
        </View>
        <View style={styles.flickerButton}>
          <Button
            onPress={this._onPressFlicker}
            title="Flicker Pattern"
            color="#FFFFFF"
          />
        </View>
        <View style={styles.rainbowButton}>
          <Button
            onPress={this._onPressRainbow}
            title="Rainbow Pattern"
            color="#aa00aa"
          />
        </View>
        <View style={styles.videoButton}>
          <Button
            onPress={this._onPressVideo}
            title="Video Pattern"
            color="#aaaaaa"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  headerButton: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  redButton: {
    fontWeight: 'bold',
    margin: 20,
    borderRadius: 12,
    backgroundColor: '#000000',
  },
  blackoutButton: {
    fontWeight: 'bold',
    margin: 20,
    borderRadius: 12,
    backgroundColor: '#000000',
  },
  greenButton: {
    margin: 20,
    borderRadius: 12,
    backgroundColor: '#000000',
  },
  blueButton: {
    margin: 20,
    borderRadius: 12,
    backgroundColor: '#000000',
    color: '#0000FF',
  },
  purpleButton: {
    margin: 20,
    borderRadius: 12,
    backgroundColor: '#000000',
    color: '#841584',
  },
  flickerButton: {
    margin: 20,
    borderRadius: 12,
    backgroundColor: '#000000',
    color: '#FFFFFF',
  },
  rainbowButton: {
    margin: 20,
    borderRadius: 12,
    backgroundColor: '#000000',
    color: '#aa00aa',
  },
  videoButton: {
    margin: 20,
    borderRadius: 12,
    backgroundColor: '#000000',
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
