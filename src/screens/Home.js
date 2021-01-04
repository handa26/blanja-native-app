import React from 'react';
import {View, ScrollView, Image, StyleSheet, StatusBar} from 'react-native';
import {Badge, Footer, Button, FooterTab, Text} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/Ionicons';

import streetClothes from '../assets/street-clothes.png';
import blouse from '../assets/blouse.jpg';
import turtleneck from '../assets/turtleneck.jpg';
import rating from '../assets/icons/rating.png';

const Home = ({navigation}) => {
  return (
    <View>
      <ScrollView>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={styles.imageWrapper}>
          <Image source={streetClothes} style={styles.imageHeader} />
          <Text style={styles.text}>Street Clothes</Text>
          <Icon style={styles.notif} name="bell-o" size={25} color="white" />
        </View>
        <View style={styles.headlineText}>
          <Text style={{fontSize: 34, fontWeight: 'bold'}}>New</Text>
          <Text style={{fontSize: 11, color: 'gray'}}>
            You’ve never seen it before!
          </Text>
        </View>
        <ScrollView horizontal style={{flexDirection: 'row'}}>
          <View style={styles.card}>
            <View style={styles.imageWrapper}>
              <Image source={blouse} style={styles.cardImage} />
              <Badge style={styles.badge}>
                <Text style={{color: 'white'}}>New</Text>
              </Badge>
              <Image source={rating} />
              <Text style={styles.textBrand}>Zalora</Text>
              <Text style={styles.textProduct}>Blouse</Text>
              <Text style={styles.textPrice}>$ 30</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Image source={turtleneck} style={styles.cardImage} />
            <Badge style={styles.badge}>
              <Text style={{color: 'white'}}>New</Text>
            </Badge>
            <Image source={rating} />
            <Text style={styles.textBrand}>Stevie</Text>
            <Text style={styles.textProduct}>Turtleneck</Text>
            <Text style={styles.textPrice}>$ 50</Text>
          </View>
          <View style={styles.card}>
            <View style={styles.imageWrapper}>
              <Image source={blouse} style={styles.cardImage} />
              <Badge style={styles.badge}>
                <Text style={{color: 'white'}}>New</Text>
              </Badge>
              <Image source={rating} />
              <Text style={styles.textBrand}>Zalora</Text>
              <Text style={styles.textProduct}>Blouse</Text>
              <Text style={styles.textPrice}>$ 30</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Image source={turtleneck} style={styles.cardImage} />
            <Badge style={styles.badge}>
              <Text style={{color: 'white'}}>New</Text>
            </Badge>
            <Image source={rating} />
            <Text style={styles.textBrand}>Stevie</Text>
            <Text style={styles.textProduct}>Turtleneck</Text>
            <Text style={styles.textPrice}>$ 50</Text>
          </View>
        </ScrollView>
        <View style={styles.headlineText}>
          <Text style={{fontSize: 34, fontWeight: 'bold'}}>Popular</Text>
          <Text style={{fontSize: 11, color: 'gray'}}>
            You may missed it, but it's our popular products
          </Text>
        </View>
        <ScrollView horizontal style={{flexDirection: 'row'}}>
          <View style={styles.card}>
            <View style={styles.imageWrapper}>
              <Image source={blouse} style={styles.cardImage} />
              <Badge style={styles.badge}>
                <Text style={{color: 'white'}}>New</Text>
              </Badge>
              <Image source={rating} />
              <Text style={styles.textBrand}>Zalora</Text>
              <Text style={styles.textProduct}>Blouse</Text>
              <Text style={styles.textPrice}>$ 30</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Image source={turtleneck} style={styles.cardImage} />
            <Badge style={styles.badge}>
              <Text style={{color: 'white'}}>New</Text>
            </Badge>
            <Image source={rating} />
            <Text style={styles.textBrand}>Stevie</Text>
            <Text style={styles.textProduct}>Turtleneck</Text>
            <Text style={styles.textPrice}>$ 50</Text>
          </View>
          <View style={styles.card}>
            <View style={styles.imageWrapper}>
              <Image source={blouse} style={styles.cardImage} />
              <Badge style={styles.badge}>
                <Text style={{color: 'white'}}>New</Text>
              </Badge>
              <Image source={rating} />
              <Text style={styles.textBrand}>Zalora</Text>
              <Text style={styles.textProduct}>Blouse</Text>
              <Text style={styles.textPrice}>$ 30</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Image source={turtleneck} style={styles.cardImage} />
            <Badge style={styles.badge}>
              <Text style={{color: 'white'}}>New</Text>
            </Badge>
            <Image source={rating} />
            <Text style={styles.textBrand}>Stevie</Text>
            <Text style={styles.textProduct}>Turtleneck</Text>
            <Text style={styles.textPrice}>$ 50</Text>
          </View>
        </ScrollView>
        <FooterTab style={styles.footer}>
          <Button vertical>
            <Icon name="home" size={30} color="#DADADA" />
            <Text style={styles.textIcon}>Home</Text>
          </Button>
          <Button vertical>
            <Icon name="shopping-cart" size={30} color="#DADADA" />
            <Text style={styles.textIcon}>Shop</Text>
          </Button>
          <Button vertical>
            <Icon name="shopping-bag" size={30} color="#DADADA" />
            <Text style={styles.textIcon}>Bag</Text>
          </Button>
          <Button vertical>
            <Icon name="heart" size={30} color="#DADADA" />
            <Text style={styles.textIcon}>Favorite</Text>
          </Button>
          <Button vertical onPress={() => navigation.navigate('Profile')}>
            <Icon name="user-circle-o" size={30} color="#DADADA" />
            <Text style={styles.textIcon}>Profile</Text>
          </Button>
        </FooterTab>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  imageWrapper: {
    position: 'relative',
  },
  imageHeader: {
    width: 450,
    height: 260,
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
  headlineText: {
    marginTop: 20,
    marginLeft: 16,
    marginBottom: 20,
  },
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
    fontWeight: 'bold',
    color: 'black',
  },
  textPrice: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black',
  },
  textIcon: {
    color: '#DADADA',
  },
  footer: {
    backgroundColor: '#DB3022',
    marginTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopWidth: 0,
  },
});
