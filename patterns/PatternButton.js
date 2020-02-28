import {Button, StyleSheet, View} from "react-native";
import React, { Component } from "react";

export default class PatternButton extends Component {
  constructor(props) {
    super(props);
    this.state = { currentPattern: 'blackout' };
    this.handleSelect = this.handleSelect.bind(this);
    this.pattern = {
      name: "Red Pattern",
      pattern: "solidColor",
      data: {
        red: 255,
        green: 0,
        blue: 0,
      }
    }
  }

  handleSelect = (e) => {
    // pass in object containing all the data needed to switch pattern
    this.props.onSelect(this.pattern);
  };

  render() {
    return (
      <View style={styles.patternButton}>
        <Button style={styles.theButton}
          onPress={this.handleSelect}
          title={this.props.title}
          pattern={this.props.pattern}
          color={this.props.color}
        />
      </View>
  )};
}

const styles = StyleSheet.create({
  theButton: {
    backgroundColor: '#000000',
  },
  patternButton: {
    margin: 20,
    borderRadius: 12,
    backgroundColor: '#000000',
  },
});
