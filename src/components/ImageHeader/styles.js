import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  imageWrapper: {
    position: 'relative',
  },
  imageHeader: {
    // width: 450,
    width: wp('110%'),
    // height: 260,
    height: hp('30%'),
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
