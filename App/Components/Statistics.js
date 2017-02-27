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
import Chart from './Chart.js';

class Home extends Component {

    constructor(props) {
       super(props);
       console.log(this.props);
     }
    render() {
        return (
            <View>
                <Text>February 26, 2017</Text>
                <Text>Number of projected seizures next week: 1</Text>
                <Text>Average duration of seizures: 0:23</Text>
                <Chart style={styles.chart}/>
                <Text>Number of seizures per month</Text>
            </View>
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
    },
    chart:{
        width: 100,
        height:100
    }
};


export default Home;
