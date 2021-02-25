import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  headlineText: {
    marginTop: 20,
    marginLeft: 16,
    marginBottom: 20,
  },
  brandCondition: {fontSize: hp('3.5%'), fontWeight: 'bold'},
  desc: {fontSize: hp('1.8%'), color: 'gray'},
});

export default styles;
