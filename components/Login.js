import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import { styles } from '../styles';
import Header from './Header';

export default function Login( {navigation} ) {

  const [username, setUsername] = useState();
  const [pass, setPassword] = useState();

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
        body: JSON.stringify(userData)  
      });
     

      const data = await response.json();
      console.log(data);
      // Check if login was successful
      if(response.status==200) {
        // Navigate to Home screen
        navigation.navigate('Home'); 
      } else {
        // Show error 
        alert('Login failed');
      }

    } catch(error) {
      console.log(error);
      alert('An error occurred. Please try again later.');
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
    </View>
    
  );
}
