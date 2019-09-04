import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from '../screens/Home';
import {colorCode} from '../style/colors';
import {SideMenu} from '../screens/SideMenu';
import styles from '../style/style';
import Track from '../screens/Track';
import Tasks from '../screens/Tasks';

const AppStack = createStackNavigator(
  {
    Home: Home,
    Track: Track,
    Tasks: Tasks,
  },
  {
    initialRouteName: 'Tasks',
    defaultNavigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: colorCode.brand,
      },
      headerTintColor: colorCode.white,
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
      },
      headerRight: (
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}
          style={styles.ph}>
          <Icon name="menu" color="white" size={24} />
        </TouchableOpacity>
      ),
    }),
  },
);

const DrawerNav = createDrawerNavigator(
  {
    AppStack: {
      screen: AppStack,
      useNativeAnimations: true,
    },
  },
  {
    contentComponent: props => <SideMenu {...props} />,
    drawerPosition: 'right',
  },
);

const RootStack = createSwitchNavigator({
  DrawerNav,
});

const AppContainer = createAppContainer(RootStack);

class Routes extends React.Component {
  render() {
    return <AppContainer />;
  }
}

export default Routes;
