import React from 'react';
import { View, Text} from 'react-native';
import { styles } from '../styles';
import Header from './Header';
import Footer from './Footer';

export default function HomePage({navigation}) {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.homecontent}>
          <Text>home page content.</Text>
        </View>
        <Footer navigation={navigation}/>
      </View>
    );
  }
  