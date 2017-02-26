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
import { Toolbar } from 'react-native-material-ui';
import { StockLine } from 'react-native-pathjs-charts'


let data =
      [[{
        "x": 0,
        "y": 47782
      }, {
        "x": 1,
        "y": 48497
      }, {
        "x": 2,
        "y": 77128
      }, {
        "x": 3,
        "y": 73413
      }, {
        "x": 4,
        "y": 58257
      }, {
        "x": 5,
        "y": 40579
      }, {
        "x": 6,
        "y": 72893
      }, {
        "x": 7,
        "y": 60663
      }, {
        "x": 8,
        "y": 15715
      }, {
        "x": 9,
        "y": 40305
      }, {
        "x": 10,
        "y": 68592
      }, {
        "x": 11,
        "y": 95664
      }, {
        "x": 12,
        "y": 17908
      }, {
        "x": 13,
        "y": 22838
      }, {
        "x": 14,
        "y": 32153
      }, {
        "x": 15,
        "y": 56594
      }, {
        "x": 16,
        "y": 76348
      }, {
        "x": 17,
        "y": 46222
      }, {
        "x": 18,
        "y": 59304
      }
  ]]
    let options = {
        width:200,
            height:200,
            color:'#2980B9',
            margin: {top: 40, left: 60, bottom: 50, right: 20},
            animate:{
                type:'delayed',
                duration:200
            },
            axisX: {
                showAxis: true,
                showLines: true,
                showLabels: true,
                showTicks: true,
                zeroAxis: false,
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
                zeroAxis: false,
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
    render() {
        return(
              <StockLine  data={data} options={options} xKey ="x" yKey="y"/>
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


export default Home;
