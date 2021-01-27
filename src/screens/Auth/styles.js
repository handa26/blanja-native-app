import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  formWrapper: {
    marginTop: 50,
  },
  head: {
    marginLeft: 35,
    fontSize: 34,
    fontWeight: 'bold',
  },
  formBox: {
    position: 'relative',
    marginVertical: 20,
    marginHorizontal: 20,
    // marginLeft: 20,
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
    width: 343,
    marginLeft: 60,
    position: 'relative',
    marginVertical: 20,
    justifyContent: 'flex-end',
  },
  longText: {fontSize: 14, marginRight: 10},
  textIcon: {
    color: '#DADADA',
  },
  inputBox: {
    width: 390,
    height: 64,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'black',
    padding: 10,
  },
  button: {
    position: 'relative',
    width: 390,
    height: 48,
    marginLeft: 20,
    backgroundColor: '#DB3022',
    borderRadius: 50,
    marginBottom: 20,
  },
  buttonText: {
    position: 'absolute',
    left: 153,
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
