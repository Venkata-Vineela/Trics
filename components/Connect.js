import React, { useState, useEffect} from 'react';
import { View, Text, TextInput, FlatList, Pressable } from 'react-native';
import { styles } from '../styles';
import Header from './Header';
import Footer from './Footer';

export default function Connect({ navigation }) {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [defaultSuggestions, setDefaultSuggestions] = useState([]); // Define defaultSuggestions state

  const renderItem = ({item})=> (
    <Pressable onPress={()=> handlePress(item)}>
      <View style={styles.cardContainer}>
        <View style={styles.userInfo}>
          <Text style={styles.username}>{item.firstname}</Text>
        </View>
      </View>
    </Pressable>
  );

  const handlePress = (item)=> {
    // console.log(item);
    // console.log(item.username);

    navigation.navigate('Profile', { username: item.username});
  };
  const handleSearch = async (text) => {
    setSearchText(text);

    // Set isSearching to true when the user is actively searching
    setIsSearching(text.length > 0);

    try {
      if (text.length > 0) {
        // Make an API call to fetch search results based on the user's input
        const response = await fetch(`http://192.168.0.188:5000/search_unames`,{
          method: 'POST',
          headers: {
            'content-Type': 'application/json'
          },
          body: JSON.stringify({searchText: text}),
        });
    
       

        if (response.status === 200) {
          const data = await response.json();
          // Update the searchResults state with the data from the API response
          
          setSearchResults(data);
          console.log(data);
        } else {
          console.error('API request failed with status:', response.status);
        }
      } 
      else {
        const defaultResponse = await fetch('http://192.168.0.188:5000/suggest_unames',{
          method: 'POST',
        });
        

        if (defaultResponse.status === 200) {
          const defaultData = await defaultResponse.json();
          // Update the defaultSuggestions state with the default suggestions
          console.log(defaultData);
          setDefaultSuggestions(defaultData);
        } else {
          console.error('API request for default suggestions failed with status:', defaultResponse.status);
        }
      }
    } catch (error) {
      console.error('Error occurred while making the API request:', error);
    }
  };

  useEffect(() => {
    handleSearch(''); // Call with an empty input to fetch default suggestions
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.homecontent}>
        <TextInput
          style={styles.input}
          placeholder="Search users..."
          onChangeText={text => handleSearch(text)}
        />

        {isSearching ? (
          <View>
            <Text style={{ fontWeight: 'bold', fontSize: 18 , marginBottom: 10}}>Results:</Text>
            <FlatList
              data={searchResults}
              renderItem={renderItem}
              keyExtractor={(item) => item.firstname} 
            />
          </View>
        ) : (
          <View>
            <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10}}>Suggested Connections:</Text>
            <FlatList
              data={defaultSuggestions}
              keyExtractor={(item) => item.firstname} 
              renderItem={renderItem}
            />
            
          </View>
        )}
      </View>
      <Footer navigation={navigation} />
    </View>
  );
}
