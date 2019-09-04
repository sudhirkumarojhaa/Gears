import React from 'react';
import {View, Text} from 'react-native';
import styles from '../style/style';
import {NextButton} from '../components/Button';
import {useNavigation} from 'react-navigation-hooks';

const Track = props => {
  const {navigate} = useNavigation();
  return (
    <View style={[styles.container, styles.ph, styles.pv]}>
      <Text>
        Lorem What follows within the Fundamentals section of this documentation
        is a tour of the most important aspects of React Navigation. It should
        cover enough for you to know how to build your typical small mobile
        application, and give you the background that you need to dive deeper
        into the more advanced parts of React Navigation.
      </Text>
      <NextButton title="Tasks" onPress={() => navigate('Tasks')} />
    </View>
  );
};

Track.navigationOptions = navigation => ({
  title: 'Track',
});

export default Track;
