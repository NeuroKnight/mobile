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
        "x": 1,
        "y": 2
    },
    {
      "x": 2,
      "y": 1
  },
  {
    "x": 3,
    "y": 3
},
{
  "x": 4,
  "y": 0
},
{
  "x": 5,
  "y": 2
},
{
  "x": 6,
  "y": 1
},
{
  "x": 7,
  "y": 4
},
{
  "x": 8,
  "y": 2
},
{
  "x": 9,
  "y": 1
},
{
  "x": 10,
  "y": 3
},
{
  "x": 11,
  "y": 0
},
{
  "x": 12,
  "y": 1
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
