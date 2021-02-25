import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  formWrapper: {
    marginTop: 50,
    marginHorizontal: 10,
  },
  head: {
    marginLeft: 35,
    fontSize: 34,
    fontWeight: 'bold',
  },
  text: {
    position: 'absolute',
    fontSize: 11,
    color: 'gray',
    top: 8,
    left: 10,
  },
  textBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 20,
    justifyContent: 'flex-end',
  },
  longText: {fontSize: 14, marginRight: 10},
  textIcon: {
    color: '#DADADA',
  },
  inputBox: {
    height: 64,
    borderWidth: 1,
    borderBottomColor: 'gray',
    borderRadius: 4,
    borderColor: 'gray',
    padding: 10,
  },
  button: {
    height: 48,
    marginVertical: 15,
    backgroundColor: '#DB3022',
    borderRadius: 50,
  },
  errorMsg: {
    marginBottom: 10,
    color: 'red',
    paddingRight: 10,
    fontSize: 15,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default styles;
