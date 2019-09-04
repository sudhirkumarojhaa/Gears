import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from '../style/style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colorCode} from '../style/colors';

export const NextButton = ({title, onPress}) => (
  <TouchableOpacity
    style={[styles.btn, styles.row, styles.center]}
    onPress={onPress}>
    <Text style={[styles.btnText]}>{title}</Text>
    <Icon name="arrow-forward" size={16} color={colorCode.brand} />
  </TouchableOpacity>
);

export const AddButton = ({title, onPress, name}) => (
  <TouchableOpacity
    style={[styles.btn, styles.row, styles.center]}
    onPress={onPress}>
    <Text style={[styles.btnText]}>{title}</Text>
    <Icon name={name} size={16} color={colorCode.brand} />
  </TouchableOpacity>
);
