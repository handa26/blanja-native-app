import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  cardWrapper: {
    width: wp('95%'),
    height: 140,
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderRadius: 15,
    marginVertical: 10,
  },
  cardSelected: {
    width: wp('95%'),
    height: 140,
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderRadius: 15,
    marginVertical: 10,
    borderColor: '#DB3022',
    borderWidth: 1,
  },
});

export default styles;
