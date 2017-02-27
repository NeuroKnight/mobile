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
import Menu from './Menu.js'
class Home extends Component {

    constructor(props) {
       super(props);
       this.state={
           active:"Home"
       }
       this.setActive.bind(this)
     }

    setActive(str){
        this.setState({active:str});
    }
    render() {
        return (
            <View style={styles.centerContainer}>
                <Toolbar
                    onLeftElementPress={()=>{this.toggleMenu()}}
                    centerElement={this.props.title}

                  />
                  <View style={styles.centerContainer}>
                        {this.props.children}
                  </View>
                  <Menu setActive={this.setActive.bind(this)} active={this.props.active} navigator={this.props.navigator}/>
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
    }
};


export default Home;
