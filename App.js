import React from 'react';
import {View, StatusBar} from 'react-native';
import Routes from './app/navigation/Routes';
import {colorCode} from './app/style/colors';
import styles from './app/style/style';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colorCode.brand} />
      <Routes />
    </View>
  );
};

export default App;
