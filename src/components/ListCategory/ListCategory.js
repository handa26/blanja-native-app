import React from 'react';
import {View} from 'react-native';
import {List, ListItem, Text} from 'native-base';
import {Button} from 'react-native-elements';

import styles from './styles';

const ListCategory = ({navigation}) => {
  return (
    <View>
      <View style={styles.wrapper}>
        <Button
          onPress={() => {
            navigation.navigate('NewProducts', {title: 'All Products'});
          }}
          title="View All Items"
          buttonStyle={styles.button}
        />
        <List>
          <ListItem itemHeader first>
            <Text>Choose category</Text>
          </ListItem>
          <View style={styles.list}>
            <ListItem
              onPress={() =>
                navigation.navigate('Catalog', {
                  categoryName: 'baju',
                  title: 'Shirts',
                })
              }>
              <Text>Shirts</Text>
            </ListItem>
            <ListItem>
              <Text>T-shirts</Text>
            </ListItem>
            <ListItem>
              <Text>Jacket</Text>
            </ListItem>
            <ListItem
              onPress={() =>
                navigation.navigate('Catalog', {
                  categoryName: 'celana',
                  title: 'Pants',
                })
              }>
              <Text>Pants</Text>
            </ListItem>
            <ListItem
              last
              onPress={() =>
                navigation.navigate('Catalog', {
                  categoryName: 'sepatu',
                  title: 'Shoes',
                })
              }>
              <Text>Shoes</Text>
            </ListItem>
          </View>
        </List>
      </View>
    </View>
  );
};

export default ListCategory;
