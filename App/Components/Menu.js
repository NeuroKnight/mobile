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
import { BottomNavigation } from 'react-native-material-ui';

class Menu extends Component {

        constructor(props) {
           super(props);
           console.log(this.props);
         }

    goToCalendar(){
        this.props.setActive("History");
        this.props.navigator.replace({
          id: 'Calendar',
          name:'Calendar'
        });
    }
    goHome(){
        this.props.setActive("Home")
        this.props.navigator.replace({
          id: 'Home',
          name:'Home'
        });
    }
    goStatistics(){
        this.props.setActive("Statistics")
        this.props.navigator.replace({
          id: 'Statistics',
          name:'Statistics'
        });
    }
    goSettings(){
        this.props.setActive("Settings")
        this.props.navigator.replace({
          id: 'Settings',
          name:'Settings'
        });
    }
    render() {
        return (
            <BottomNavigation active={this.props.active} hidden={false} >
                <BottomNavigation.Action
                    key="Home"
                    icon="home"
                    label="Home"
                    onPress={() => this.goHome()}
                />
                <BottomNavigation.Action
                    key="History"
                    icon="event"
                    label="History"
                    onPress={() => this.goToCalendar()}
                />
                <BottomNavigation.Action
                    key="Statistics"
                    icon="show-chart"
                    label="Statistics"
                    onPress={() => this.goStatistics()}
                />
                <BottomNavigation.Action
                    key="settings"
                    icon="settings"
                    label="Settings"
                    onPress={() => this.goSettings()}
                />
            </BottomNavigation>
            );
    }
}



const styles = {
    headerStyle:{
        color: "AAABD3"
    },
    chart:{
        width: 100,
        height:100
    }
};


export default Menu;
