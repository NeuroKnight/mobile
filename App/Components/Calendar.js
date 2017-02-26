import Calendar from 'react-native-calendar';
import React, {Component} from 'react'
import {
  Alert,
  AsyncStorage,
  StyleSheet,
  Image,
  Text,
  Navigator,
  TouchableHighlight,
  View
} from 'react-native';
import { Toolbar, Button } from 'react-native-material-ui';




class TrackingCalendar extends Component {
    onDateSelect(date){
        this.props.navigator.replace({
          id: 'SingleDay',
          name:'SingleDay',
          passProps: {
              date: date
            }
        });
    }
    render() {
        return (

              <Calendar
                onDateSelect={(date) => this.onDateSelect(date)}
                customStyle={{day: {fontSize: 15, textAlign: 'center'}}} // Customize any pre-defined styles
                nextButtonText={'>>'}           // Text for next button. Default: 'Next'
                prevButtonText={'<<'}           // Text for previous button. Default: 'Prev'
                scrollEnabled={true}              // False disables swiping. Default: False
                showControls={true}               // False hides prev/next buttons. Default: False
                showEventIndicators={true}        // False hides event indicators. Default:False
                titleFormat={'MMMM YYYY'}         // Format for displaying current month. Default: 'MMMM YYYY'
                weekStart={0} // Day on which week starts 0 - Sunday, 1 - Monday, 2 - Tuesday, etc, Default: 1
              />

        );
    }
}

export default TrackingCalendar;
