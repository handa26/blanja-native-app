import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  imageWrapper: {
    position: 'relative',
  },
  imageHeader: {
    width: 450,
    height: 260,
    top: -22,
    left: -5,
  },
  text: {
    position: 'absolute',
    fontSize: 34,
    fontWeight: 'bold',
    color: 'white',
    bottom: 45,
    left: 16,
  },
  notif: {
    position: 'absolute',
    top: 35,
    right: 16,
  },
});

export default styles;
