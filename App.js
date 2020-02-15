import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const API_ADDRESSS = 'http://192.168.0.2:3000';

export default class ButtonBasics extends Component {
  constructor(props) {
    super(props);
    this.state = { currentPattern: 'blackout' };
  }


  //TODO: allow these to be set over websocket???
  //TODO: do not allow pressing of another pattern until fetch has finished
  //TODO: Make these more generic
  //TODO: remove alerts and opt for current status/toaster

  _onPressRed = (e) => {
    fetch(`${API_ADDRESSS}/red`, { method: 'GET'})
    .then((response) => {
      // this.state.currentPattern = "red"
      this.setState({currentPattern: "red"});
    })
    .catch((error) => {
      alert("there's been an error");
      console.log(error);
    });
  };

  _onPressBlackout = (e) => {
    fetch(`${API_ADDRESSS}/black`, { method: 'GET'})
    .then((response) => {
      this.state.currentPattern = "blackout"
    })
    .catch((error) => {
      alert("there's been an error");
      console.log(error);
    });
  };

  _onPressGreen = (e) => {
    fetch(`${API_ADDRESSS}/green`, { method: 'GET'})
    .then((response) => {
      this.setState({currentPattern: "green"});
    })
    .catch((error) => {
      alert("there's been an error");
      console.log(error);
    });
  };

  _onPressBlue = () => {
    fetch(`${API_ADDRESSS}/blue`, { method: 'GET'})
    .then((response) => {
      this.setState({currentPattern: "blue"});
    })
    .catch((error) => {
      alert("there's been an error");
      console.log(error);
    });
  };

  _onPressPurple = () => {
    fetch(`${API_ADDRESSS}/purple`, { method: 'GET'})
    .then((response) => {
      this.setState({currentPattern: "purple"});
    })
    .catch((error) => {
      alert("there's been an error");
      console.log(error);
    });
  };

  _onPressFlicker = () => {
    fetch(`${API_ADDRESSS}/flicker`, { method: 'GET'})
    .then((response) => {
      this.setState({currentPattern: "flicker"});
    })
    .catch((error) => {
      alert("there's been an error");
      console.log(error);
    });
  };

  _onPressRainbow = () => {
    fetch(`${API_ADDRESSS}/rainbowFade`, { method: 'GET'})
    .then((response) => {
      this.setState({currentPattern: "rainbow"});
    })
    .catch((error) => {
      alert("there's been an error");
      console.log(error);
    });
  };

  _onPressVideo = () => {
    fetch(`${API_ADDRESSS}/video`, { method: 'GET'})
    .then((response) => {
      console.log(this)
      this.setState({currentPattern: "video"});
    })
    .catch((error) => {
      alert("there's been an error");
      console.log(error);
    });
  };

  state = {
    currentPattern: "blackout"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerButton}>Mitsy Controller!</Text>
        <Text style={styles.headerButton}>Current Pattern: {this.state.currentPattern}</Text>
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
