import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  image: {
    width: 119,
    height: 157,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  cardWrapper: {
    flexDirection: 'row',
    width: wp('100%'),
    backgroundColor: '#f1f1f1',
    // marginHorizontal: wp('10%'),
    borderRadius: 15,
    marginVertical: 10,
  },
  headerProduct: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    width: 225,
    marginTop: 10,
  },
  midProduct: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 175,
  },
  productName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  button: {
    padding: 14.5,
    width: 40,
    height: 40,
    backgroundColor: '#f1f1f1',
  },
  counterWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginLeft: 15,
  },
  counterNum: {marginTop: 6, marginHorizontal: 10},
  price: {marginTop: 7},
  imageWrapper: {
    position: 'relative',
  },
  checkBox: {
    position: 'absolute',
    top: 0,
  },
});

export default styles;
