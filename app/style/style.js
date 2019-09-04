import {StyleSheet, Platform} from 'react-native';
import {colorCode} from './colors';

const font = Platform.OS === 'ios' ? 'Copperplate-Bold' : 'Roboto';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    backgroundColor: colorCode.brand,
  },
  ph: {
    paddingHorizontal: 10,
  },
  pv: {
    paddingVertical: 10,
  },
  row: {
    flexDirection: 'row',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  between: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  end: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  width80: {
    width: '80%',
  },
  width10: {
    width: '10%',
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#e3e3e3',
  },
  logo: {
    alignSelf: 'center',
    width: 50,
    height: 50,
  },
  title: {
    color: colorCode.brand,
    fontSize: 16,
    fontFamily: font,
    textAlign: 'center',
  },
  text: {
    color: colorCode.brand,
    fontSize: 18,
    fontWeight: '500',
  },
  sideText: {
    color: colorCode.white,
    backgroundColor: colorCode.white,
    marginVertical: 20,
    padding: 10,
  },
  btn: {
    color: colorCode.white,
    alignSelf: 'flex-end',
    marginVertical: 10,
    padding: 5,
  },
  btnText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colorCode.brand,
    textTransform: 'uppercase',
  },
  input: {
    borderBottomColor: '#e3e3e3',
    borderBottomWidth: 1,
  },
  email: {
    fontSize: 14,
    textTransform: 'lowercase',
    color: '#999',
  },
});

export default styles;
