/*
* this is an animate tennisBall that moves to random directions
*/
import React, { Component } from 'react';
import { View, StyleSheet, Text, Animated, TouchableWithoutFeedback
} from 'react-native';

export default class App extends Component{

  constructor(props){
      super(props)
      this.moveAnimation = new Animated.ValueXY({ x:10, y:450})
  }

  _moveBall = () => {
    const randX = Math.floor(Math.random()*350);
    const randY = Math.floor(Math.random()*500);

    Animated.spring(this.moveAnimation, {
      toValue : {x : randX, y:randY}
    }).start()
  }

  render(){
    return(
      <View style={styles.container}>
        <Animated.View style={[styles.tennisBall, this.moveAnimation.getLayout()]}>
          <TouchableWithoutFeedback style={styles.button} onPress={this._moveBall}>
            <Text style={styles.buttonText}>click</Text>
          </TouchableWithoutFeedback>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor: '#ecf0f1',
  },
  tennisBall : {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'greenyellow',
    borderRadius: 100,
    width:100,
    height:100,
  },
  button : {
    paddingTop: 24,
    paddingBottom: 24,
  },
  buttonText : {
    fontSize: 24,
    color:'#333',
  },
});
