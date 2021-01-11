import React from 'react';
import {View} from 'react-native';
import {List, ListItem, Text, Button} from 'native-base';

import styles from './styles';

const ListCategory = ({navigation}) => {
  return (
    <View>
      <View>
        <Button
          style={styles.button}
          onPress={() => navigation.navigate('NewProducts')}>
          <Text style={{marginLeft: 130}}>View All Items</Text>
        </Button>
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
