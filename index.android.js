/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react'
import{
     AppRegistry,
     StyleSheet,
     Image,
     Text,
     TouchableHighlight,
     Navigator,
     View
} from 'react-native';
import Home from './App/Components/Home.js';
import TrackingCalendar from './App/Components/Calendar.js'
import { COLOR, ThemeProvider } from 'react-native-material-ui';
import TopAndBottom from './App/Components/TopAndBottom.js'
import Statistics from './App/Components/Statistics.js'
import Settings from './App/Components/Settings.js'
import SingleDay from './App/Components/SingleDay.js'
import IntroPage from './App/Components/IntroPage.js'

// you can set your style right here, it'll be propagated to application
const uiTheme = {
   palette: {
       primaryColor: "#682995",
       accentColor: "#FFFFFF"
   },
   toolbar: {
       container: {
           height: 50,
       },
   },
};


export default class NeuroKnight extends Component {
    constructor(props) {
       super(props);
     }

  render() {
    return (

            <Navigator initialRoute={{id: 'Settings', name: 'Settings'}} renderScene={this.renderScene}
                configureScene={(route) => {
                    if (route.sceneConfig) {
                        return route.sceneConfig;
                    }
                    return Navigator.SceneConfigs.SwipeFromLeft;
                }}
                />

    );
  }
  renderScene (route, navigator){
    switch (route.id) {
      case 'Home':
        return (<ThemeProvider uiTheme={uiTheme}><TopAndBottom title="Home" navigator={navigator}><Home navigator={navigator} /></TopAndBottom></ThemeProvider>);
      case 'Calendar':
        return (<ThemeProvider uiTheme={uiTheme}><TopAndBottom title="History" navigator={navigator}><TrackingCalendar navigator={navigator} /></TopAndBottom></ThemeProvider>);
      case 'Statistics':
        return (<ThemeProvider uiTheme={uiTheme}><TopAndBottom title="Statistics" navigator={navigator}><Statistics navigator={navigator} /></TopAndBottom></ThemeProvider>);
      case 'Settings':
        return (<ThemeProvider uiTheme={uiTheme}><TopAndBottom title="Settings" navigator={navigator}><Settings navigator={navigator} /></TopAndBottom></ThemeProvider>);
      case 'SingleDay':
        return (<ThemeProvider uiTheme={uiTheme}><TopAndBottom title="On This Day" navigator={navigator}><SingleDay navigator={navigator} {...route.passProps} /></TopAndBottom></ThemeProvider>);
      case 'IntroPage':
        return (<ThemeProvider uiTheme={uiTheme}><IntroPage navigator={navigator}/></ThemeProvider>)
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('NeuroKnight', () => NeuroKnight);
