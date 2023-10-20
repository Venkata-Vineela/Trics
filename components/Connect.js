import React from 'react';
import { View, Text} from 'react-native';
import { styles } from '../styles';
import Header from './Header';
import Footer from './Footer';

export default function Connect({navigation}) {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.homecontent}>
          <Text>Connections</Text>
        </View>
        <Footer navigation={navigation}/>
      </View>
    );
  }
  