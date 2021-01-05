import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const HeadlineText = ({condition, desc}) => {
  return (
    <View style={styles.headlineText}>
      <Text style={styles.brandCondition}>{condition}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  );
};

export default HeadlineText;
