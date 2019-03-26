import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import {RkButton, RkCard} from 'react-native-ui-kitten';
import ProgressCircle from 'react-native-progress-circle';
import { Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App  extends React.Component {
  render() {

    var timeCounterArray = [];
    for(let i = 0; i < 240; i++){
      timeCounterArray.push({i})
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Pomodoro</Text>
        
     <View style={{flex: 0, flexDirection:'column', alignItems: 'flex-end', right: '2%', top: '1%'}}>
      <Icon name="gear" size={32}  color="#3f51b5"/>
     </View>
        
        
        <RkButton rkType='small' style={[styles.custombutton]} onPress={this._showDateTimePicker}>Custom </RkButton>
        <RkCard rkType='shadowed' style={[styles.progressbar, {padding:'3%',margin:"2%", backgroundColor: 'white',}]}>
        
        <ProgressCircle
            percent={30}
            radius={100}
            borderWidth={8}
            color="#f44b42"
            shadowColor="white"
            bgColor="#fff"
        >
            <Text style={{ fontSize: 18, color: 'red', fontWeight:'bold' }}>{'30%'}</Text>
        </ProgressCircle>

        </RkCard>
        
       <View style={[styles.belowbuttonview]}>
       <RkButton rkType='small' style={{margin: 11,borderRadius: 20,backgroundColor: "#3f51b5"}}>20 min</RkButton>
       <RkButton rkType='small' style={{margin: 11,borderRadius: 20,backgroundColor: "#3f51b5"}}>30 min</RkButton>
       <RkButton rkType='small' style={{margin: 11,borderRadius: 20,backgroundColor: "#3f51b5"}}>45 min</RkButton>
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
    fontWeight: 'bold',
  },

  custombutton: {
    top: '25%',
    left: '40%',
    backgroundColor: '#ff3333',
  },

  progressbar: {
    top: '45%',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  belowbuttonview: {
    flexDirection: 'row',
    top: '70%',
    justifyContent: 'center',
  },
});
