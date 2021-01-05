import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
  },
  cardImage: {
    width: 148,
    height: 184,
    borderRadius: 8,
    marginBottom: 8,
  },
  badge: {
    backgroundColor: 'black',
    position: 'absolute',
    top: 10,
    left: 10,
  },
  textBrand: {
    fontSize: 11,
    color: 'gray',
  },
  textProduct: {
    fontSize: 16,
    width: 150,
    fontWeight: 'bold',
    color: 'black',
  },
  textPrice: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#DB3022',
  },
});

export default styles;
