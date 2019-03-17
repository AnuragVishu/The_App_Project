import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {RkButton, RkCard} from 'react-native-ui-kitten';
import { AnimatedCircularProgress } from 'react-native-circular-progress';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Pomodoro Timer</Text>
        <RkButton rkType='small' style={[styles.custombutton]}>Custom</RkButton>
        <RkCard rkType='shadowed' style={styles.progressbar}>
          <AnimatedCircularProgress 
  size={200}
  width={9}
  fill={100}
  tintColor="#00e0ff"
  onAnimationComplete={() => console.log('onAnimationComplete')}
  backgroundColor="#3d5875" />
        </RkCard>
       <View style={[styles.belowbuttonview]}>
       <RkButton rkType='small' style={{margin: 15,borderRadius: 20,}}>20 min</RkButton>
       <RkButton rkType='small' style={{margin: 15,borderRadius: 20}}>30 min</RkButton>
       <RkButton rkType='small' style={{margin: 15,borderRadius: 20}}>45 min</RkButton>
       </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    flexWrap: 'wrap',
    backgroundColor: 'white'
  },
  text: {
    textAlign: 'center',
    justifyContent: 'center',
    top: '5%',
    fontSize: 25,
  },
  // clock: {
  //   fontSize: 10,
  //   top: '45%',
  //   flexWrap: 'nowrap',
  // },
  custombutton: {
    top: '40%',
    left: '40%',
    backgroundColor: 'red',
  },
  progressbar: {
    top: '55%',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'row',
    //backgroundColor: 'red',
  },
  belowbuttonview: {
    flexDirection: 'row',
    top: '80%',
    justifyContent: 'center',
  },


});
