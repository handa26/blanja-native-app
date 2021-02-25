import React, {useState, useEffect, createRef} from 'react';
import axios from 'axios';
import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {Header, Item, Input, Button, Text, Left} from 'native-base';
import ActionSheet from 'react-native-actions-sheet';

import Icon from 'react-native-vector-icons/FontAwesome';
import HeadlineText from '../HeadlineText/HeadlineText';
import ProductCard from '../ProductCard/ProductCard';
import {API_URL_DEVELOPMENT, IP_DEVELOPMENT} from '@env';

const actionSheetRef = createRef();

const Search = ({navigation}) => {
  const [products, setProducts] = useState({});
  const [value, setValue] = useState('');
  const [condition, setCondition] = useState('');
  const [price, setPrice] = useState('');

  // console.log('Popular clicked', popular);
  // console.log('Newest clicked', newest);
  // console.log('Lowest clicked', lowest);
  // console.log('Highest clicked', highest);

  const handleSubmit = () => {
    axios
      .get(
        `${API_URL_DEVELOPMENT}/search?name=${value}&sortby=${condition}&sort=${price}&page=1&limit=10`,
      )
      .then(({data}) => {
        console.log('Search result', data.products);
        setProducts(data);
      })
      .catch((err) => console.log(err));
  };
  console.log(value);
  useEffect(() => {
    handleSubmit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScrollView>
      <Header style={styles.header} searchBar rounded noShadow>
        <Left>
          <Button transparent>
            <Icon
              name="arrow-left"
              size={25}
              onPress={() => navigation.goBack()}
            />
          </Button>
        </Left>
        <Item style={styles.input}>
          <Icon name="search" size={15} style={{marginLeft: 10}} />
          <Input
            placeholder="Search"
            onChangeText={(val) => setValue(val)}
            onSubmitEditing={handleSubmit}
          />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>
      <View style={styles.sortIcon}>
        <Button
          iconLeft
          style={styles.sortBtn}
          onPress={() => {
            actionSheetRef.current?.setModalVisible();
          }}>
          <Icon
            style={{marginLeft: 20}}
            name="arrows-v"
            size={20}
            color="black"
          />
          <Text style={{color: 'black'}}>Sort</Text>
        </Button>
      </View>
      <HeadlineText condition="Popular search" />
      <ActionSheet ref={actionSheetRef} animated gestureEnabled>
        <View>
          <Text style={styles.sortHead}>Sort by</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.btnSheet}
            onPress={() => {
              setCondition('name');
              handleSubmit();
              actionSheetRef.current?.hide();
            }}>
            <Text style={styles.txtSheet}>Popular</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnSheet}
            onPress={() => {
              setCondition('latest');
              handleSubmit();
              actionSheetRef.current?.hide();
            }}>
            <Text style={styles.txtSheet}>Newest</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnSheet}
            onPress={() => {
              setPrice('asc');
              handleSubmit();
              actionSheetRef.current?.hide();
            }}>
            <Text style={styles.txtSheet}>Price: lowest to high</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnSheet}
            onPress={() => {
              setPrice('desc');
              handleSubmit();
              actionSheetRef.current?.hide();
            }}>
            <Text style={styles.txtSheet}>Price: highest to low</Text>
          </TouchableOpacity>
        </View>
      </ActionSheet>
      <View style={styles.productsWrapper}>
        {products.products &&
          products.products.map((product) => {
            let img = product.image.split(',');
            return (
              <ProductCard
                name={product.product_name}
                brand={product.product_brand}
                navigation={navigation}
                key={product.id}
                imgUrl={img[0].replace('localhost', IP_DEVELOPMENT)}
                price={product.product_price}
                id={product.id}
              />
            );
          })}
      </View>
    </ScrollView>
  );
};

export default Search;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    paddingBottom: 85,
    marginTop: 60,
  },
  input: {
    backgroundColor: '#f1f1f1',
    // marginRight: -25,
    borderRadius: 20,
    right: 20,
  },
  productsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
  sortHead: {
    alignSelf: 'center',
    fontSize: 20,
    marginTop: 10,
    // paddingTop: 10,
    fontWeight: 'bold',
  },
  borderLine: {
    borderWidth: 5,
    borderColor: 'gray',
    width: 55,
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 10,
  },
  btnSheet: {
    marginVertical: 5,
    backgroundColor: '#fff',
    height: 40,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  txtSheet: {
    fontSize: 16,
    color: 'black',
  },
  sortIcon: {
    alignSelf: 'flex-end',
    position: 'absolute',
    right: 35,
    top: 90,
  },
  sortBtn: {
    backgroundColor: '#F1F1F1',
    height: 30,
    width: 130,
  },
});
