import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import { styles } from '../styles';
import Header from './Header';
import Modal from 'react-native-modal';
import setCookie from 'set-cookie-parser';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login( {navigation} ) {

  const [username, setUsername] = useState();
  const [pass, setPassword] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const saveCookies = async (cookies) => {
    try {
      await AsyncStorage.setItem('cookies', JSON.stringify(cookies));
      console.log('Cookies saved successfully.');
    } catch (error) {
      console.error('Error saving cookies:', error);
    }
  }
  
  // Retrieving cookies
  const retrieveCookies = async () => {
    try {
      const cookiesString = await AsyncStorage.getItem('cookies');
      const cookies = JSON.parse(cookiesString);
      return cookies;
    } catch (error) {
      console.error('Error retrieving cookies:', error);
      return null;
    }
  }

  const makeFetchParams = (data) => {
    const cookies = retrieveCookies // SecureStore or AsyncStorage
    const c_arr = cookies.map(d => { return d.name+'='+d.value; });
    const cookieStr = c_arr.join(';');
    return {
        method: 'GET',
        credentials: 'omit',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'cookie': cookieStr
        },
        body: data
    };
};

  const handleLogin = async () => {
    // Create object to send in POST request
    const userData = {
      username: username,
      password: pass
    }
    
    try {
      // Make POST request to Flask server
      const response = await fetch('http://192.168.0.188:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData),
        credentials: 'include'
      });
     
      console.log(response);  

      const data = await response.json();
      console.log(data);

      // Check if login was successful
      if(response.status==200) {
        // Navigate to Home screen
      let cookies, cookieHeader, serverData;
          cookieHeader = setCookie.splitCookiesString(response.headers.get('set-cookie'));
          cookies = setCookie.parse(cookieHeader);
          console.log(cookies); // array
          // Save cookies array to SecureStore or AsyncStorage
          saveCookies(cookies);

        const protectedResponse = await fetch('http://192.168.0.188:5000/protected', makeFetchParams);
  
        const protectedData = await protectedResponse.json();
  
        console.log('Protected Response:', protectedResponse);
        console.log('Protected Data:', protectedData);
  
        if (protectedResponse.status === 200) {
          // Navigate to Home screen or handle the protected data
          navigation.navigate('Home');
        }
      } else {
        // Show error 
        // alert('Login failed');
        setPopupMessage('Login Failed');
        setIsModalVisible(true);
      }

    } catch(error) {
      console.log(error);
      //alert('An error occurred. Please try again later.');
      setPopupMessage('An error occurred. Please try again later.');
      setIsModalVisible(true);
    }
  }

  return (
    
    <View style={styles.container}>
      <Header />
      <Text style={styles.signuptext}>Login to continue..!</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={pass}
          onChangeText={setPassword}
        />
        <View style={styles.signupcontainer}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.signupButton}
        >
          <Text style={styles.signupButtonText}>Login</Text>
        </TouchableOpacity>
        </View>
      </View>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>{popupMessage}</Text>
          <TouchableOpacity onPress={() => setIsModalVisible(false)}>
            <Text style={styles.modalCloseButton}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
    
  );
}
