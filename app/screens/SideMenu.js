/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from 'react-navigation-hooks';
import styles from '../style/style';

export const SideMenu = props => {
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <View style={[styles.bg, styles.container]}>
        <Image
          source={require('../assets/gear.gif')}
          style={{width: 100, height: 100, alignSelf: 'center'}}
        />
        <TouchableOpacity
          style={styles.sideText}
          onPress={() => navigate('Home')}>
          <Text style={styles.btnText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sideText}
          onPress={() => navigate('Tasks')}>
          <Text style={styles.btnText}>Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sideText}
          onPress={() => navigate('Track')}>
          <Text style={styles.btnText}>Track</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
