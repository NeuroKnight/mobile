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
import { Toolbar, Button, Divider } from 'react-native-material-ui';
class SingleDay extends Component {

    constructor(props) {
       super(props);
       console.log(this.props);
     }
    render() {
        return (
            <ScrollView>
                <View><Text>{this.props.date.substring(0,10)}</Text></View>
                <Divider/>
                <View><Text>9PM</Text><Text>What happened</Text></View>
                <Divider/>
                <View><Text>10PM</Text><Text>What happened</Text></View>
                <Divider/>
                <View><Text>11PM</Text><Text>What happened</Text></View>
                <Divider/>
                <View><Text>12AM</Text><Text>What happened</Text></View>
                <Divider/>
                <View><Text>1AM</Text><Text>What happened</Text></View>
                <Divider/>
                <View><Text>2AM</Text><Text>What happened</Text></View>
                <Divider/>
                <View><Text>3AM</Text><Text>What happened</Text></View>
                <Divider/>
                <View><Text>4AM</Text><Text>What happened</Text></View>
                <Divider/>
                <View><Text>5AM</Text><Text>What happened</Text></View>
                <Divider/>
                <View><Text>6AM</Text><Text>What happened</Text></View>
                <Divider/>
                <View><Text>7AM</Text><Text>What happened</Text></View>
                <Divider/>
                <View><Text>8AM</Text><Text>What happened</Text></View>
                <Divider/>
                <View><Text>9PM</Text><Text>What happened</Text></View>
                <Divider/>
                <View><Text>10PM</Text><Text>What happened</Text></View>
                <Divider/>
                <View><Text>11PM</Text><Text>What happened</Text></View>
                <Divider/>
            </ScrollView>
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


export default SingleDay;
