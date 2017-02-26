import React, {Component} from 'react'
import {
  Alert,
  AsyncStorage,
  StyleSheet,
  Image,
  Text,
  Navigator,
  ScrollView,
  TouchableHighlight,
  View
} from 'react-native';
import { Toolbar, Button } from 'react-native-material-ui';
import TopAndBottom from './TopAndBottom.js'
class Home extends Component {

    constructor(props) {
       super(props);
       console.log(this.props);
     }
    render() {
        return (
                        <Text> Here are your statistics for the day!</Text>

        );
    }
}



const styles = {
    headerStyle:{
        color: "AAABD3"
    },
    centerContainer:{
        flex: 100,
        flexDirection: 'column'
    }
};


export default Home;
