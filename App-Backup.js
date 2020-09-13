import React, { Component, Fragment } from 'react';
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import { Card, ListItem, Icon, Slider } from 'react-native-elements'
import PatternButton from "./patterns/PatternButton";
import SolidColorPattern from "./patterns/SolidColorPattern";

const API_ADDRESS = 'http://192.168.0.2:3000';
// const API_ADDRESS = 'http://192.168.87.49:3000';


const Bitsy = () => {

};

export default Bitsy;

export default class Bitsy extends Component {
  constructor(props) {
    super(props);
    this.state = { currentPattern: 'blackout' };
  }
  
  patterns = {
    solidColor: {
      pattern: "solidColor",
      patternData: {
        red: 255,
        green: 0,
        blue: 0,
      }
    },
    videoPattern: {
      pattern: "loopingVideo",
      patternData: {

      }
    }
  };

  //TODO: do not allow pressing of another pattern until fetch has finished
  //TODO: remove alerts and opt for current status/toaster

  handlePatternSelect = (pattern) => {
    let data = {
      pattern: pattern.pattern,
      patternData: pattern.data,
    };
    fetch(`${API_ADDRESS}/pattern`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((response) => {
      console.log('switching to new pattern');
      this.setState({currentPattern: pattern.name});
    })
    .catch((error) => {
      alert("There's been an error");
      console.log(error);
    });
  };

  state = {
    currentPattern: "blackout"
  };

  render() {
    return (
      <Fragment>
        <ScrollView style={styles.container}>
          <Card title="Pattern">
              <View>
                <Text>Some Text</Text>
              </View>
          </Card>

          <Card title="Other Pattern">
              <View>
                <Slider
                  maximumValue={10}
                  value={1}
                  onValueChange={value => this.setState({ value })}
                />
                <Text>Some Text</Text>
              </View>
          </Card>

          <Text style={styles.headerButton}>Bitsy Controller!</Text>
          <Text style={styles.headerButton}>Current Pattern: {this.state.currentPattern}</Text>
          <SolidColorPattern
            title="Red Pattern"
            color="#FF0000"
            pattern="solidColor"
            onSelect={this.handlePatternSelect}
          />
          <PatternButton
            onSelect={this.handlePatternSelect}
            pattern="flicker"
            title="Flicker Pattern"
            color="#FFFFFF"
          />
          <PatternButton
            onSelect={this.handlePatternSelect}
            pattern="rainbowFade"
            title="Rainbow Pattern"
            color="#aa00aa"
          />
          <PatternButton
            onSelect={this.handlePatternSelect}
            pattern="rainbowWarp"
            title="Rainbow Warp Pattern"
            color="#aa00aa"
          />
          <PatternButton
            onSelect={this.handlePatternSelect}
            pattern="loopingVideo"
            title="Video Pattern"
            color="#aaaaaa"
          />
          <PatternButton
            onSelect={this.handlePatternSelect}
            pattern="chaseTester"
            title="Chase Tester Pattern"
            color="#aaaaaa"
          />
          <PatternButton
            onSelect={this.handlePatternSelect}
            pattern="loopingVideo"
            title="XY Tester Pattern"
            color="#aaaaaa"
          />
        </ScrollView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   // justifyContent: 'center',
  },
  headerButton: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
