import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {RkButton, RkCard} from 'react-native-ui-kitten';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import ProgressCircle from 'react-native-progress-circle'

export default class App  extends React.Component {
  render() {

    var timeCounterArray = [];
    for(let i = 0; i < 240; i++){
      timeCounterArray.push({i})
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Pomodoro</Text>
        <RkButton rkType='small' style={[styles.custombutton]} onPress={this._showDateTimePicker}>Custom </RkButton>
        <RkCard rkType='shadowed' style={[styles.progressbar, {padding: 12, margin: 15, backgroundColor: '#f1f1f1',}]}>
        <ProgressCircle
            percent={30}
            radius={100}
            borderWidth={8}
            color="#000000"
            shadowColor="#999"
            bgColor="#b30000"
        >
            <Text style={{ fontSize: 18 }}>{'30%'}</Text>
        </ProgressCircle>
        </RkCard>
        
       <View style={[styles.belowbuttonview]}>
       <RkButton rkType='small' style={{margin: 15,borderRadius: 20,}}>20 min</RkButton>
       <RkButton rkType='small' style={{margin: 15,borderRadius: 20}}>30 min</RkButton>
       <RkButton rkType='small' style={{margin: 15,borderRadius: 20}}>45 min</RkButton>
       </View>
       {/* <ProgressCircle
            percent={30}
            radius={50}
            borderWidth={8}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
        >
            <Text style={{ fontSize: 18 }}>{'30%'}</Text>
        </ProgressCircle> */}

            
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
    backgroundColor: '#ff3333',
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
