import {Button, StyleSheet, View} from "react-native";
import React from "react";

import PatternButton from "./PatternButton";

export default class SolidColorPattern extends PatternButton {
  constructor(props) {
    super(props);
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
      <PatternButton
        title="Red Pattern"
        color="#FF0000"
        pattern="solidColor"
        onSelect={this.handlePatternSelect}
      />
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
