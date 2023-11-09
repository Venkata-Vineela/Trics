// Header.js

import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Truche App</Text>
    </View>
  );
}

export default Header;
