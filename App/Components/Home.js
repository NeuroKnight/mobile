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
import { Toolbar, Button, Divider} from 'react-native-material-ui';
import TopAndBottom from './TopAndBottom.js'
import { StockLine } from 'react-native-pathjs-charts'
import BackgroundTimer from 'react-native-background-timer';


let options = {
    width:180,
        height:200,
        color:'#2980B9',
        margin: {top: 40, left: 60, bottom: 50, right: 20},

        axisX: {
            showAxis: true,
            showLines: true,
            showTicks: true,
            zeroAxis: true,
            orient: 'bottom',
            label:{
                fontFamily:'Arial',
                fontSize:14,
                fontWeight:true,
                fill:'#34495E'
            }
        },
        axisY: {
            showAxis: true,
            showLines: true,
            showLabels: true,
            showTicks: true,
            zeroAxis: true,
            orient: 'left',
            label:{
                fontFamily:'Arial',
                fontSize:14,
                fontWeight:true,
                fill:'#34495E'
            }
        }
    }

class Home extends Component {

    constructor(props) {
       super(props);
       console.log(this.props);
       this.state = {
           muscleData:[[{record_time:0,value:0}]],
           heartData:[[{x:0,y:0}]],
           breathingData:[[{x:0,y:0}]],
       }
     }
     componentDidMount(){


         var _this = this;
         _this.getMuscleData();
         _this.getHeartData();
         _this.getBreathingData();


     }
     getMuscleData(){
         fetch('https://07bec859.ngrok.io/api/user/get_measurements', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                token: "1",
                instrument: "muscle"
              })
            }).then((response) => response.json())
              .then((responseJson) => {
                  console.log(responseJson);
                  if(responseJson.status==200){
                      if(responseJson.data.results.length>0){
                          this.setState({muscleData:[responseJson.data.results]});
                      }
                    }else{


                    }
              })
              .catch((error) => {
                console.error(error);
              });
     }
     getHeartData(){
         for (var i = 0; i < 20; i++) {
                 var arr = this.state.heartData[0];
                 arr.push({x:i,y: (70 + (Math.random() * 12))});
                 this.setState({heartData: [arr]})
                 console.log(arr);
         }
     }
     getBreathingData(){
         for (var i = 0; i < 20; i++) {
                 var arr = this.state.breathingData[0];
                 arr.push({x:i,y: (100 + (Math.random()*10 * Math.pow(-1, i)))});
                 this.setState({breathingData: [arr]})
                 console.log(arr);
         }
     }
    render() {
        return (
            <ScrollView contentContainerStyle={styles.scrollerStyle}>
                <Text style={styles.textStyle}>Live muscle monitor</Text>
                <View style={styles.chartContainerStyle}><Text>Tension</Text><StockLine max={1000} data={this.state.muscleData} options={options} xKey ="record_time" yKey="value"/></View>
                <Text>Time</Text>
                <Divider/>
                <Text style={styles.textStyle}>Live Heart monitor</Text>
                <View style={styles.chartContainerStyle}><Text>BPM</Text><StockLine max={110} data={this.state.heartData} options={options} xKey ="x" yKey="y"/></View>
                <Text>Time</Text>
                <Divider/>
                <Text style={styles.textStyle}>Live breathing monitor</Text>
                <View style={styles.chartContainerStyle}><Text style={styles.yLabelStyle}>Degrees</Text><StockLine max={120} data={this.state.breathingData} options={options} xKey ="x" yKey="y"/></View>
                <Text>Time</Text>

            </ScrollView>
        );
    }
}



const styles = {
    headerStyle:{
        color: "AAABD3"
    },
    textStyle:{
        fontSize:24
    },
    scrollerStyle:{
        alignItems: 'center'
    },
    centerContainer:{
        flex: 100,
        flexDirection: 'column'
    },
    yLabelStyle:{
            left:0
    },
    chartContainerStyle:{
        flexDirection: 'row',
        alignItems: 'center'
    }
};


export default Home;
