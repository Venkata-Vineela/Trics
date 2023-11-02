import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import { styles } from '../styles';
import Header from './Header';
import Footer from './Footer';

export default function Connect({ navigation }) {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [defaultSuggestions, setDefaultSuggestions] = useState([]); // Define defaultSuggestions state

  // handleSearch

  const handleSearch = async (text) => {
    setSearchText(text);

    // Set isSearching to true when the user is actively searching
    setIsSearching(text.length > 0);

    try {
      if (text.length > 0) {
        // Make an API call to fetch search results based on the user's input
        const response = await fetch(`/api/search?query=${text}`);

        if (response.status === 200) {
          const data = await response.json();
          // Update the searchResults state with the data from the API response
          setSearchResults(data);
        } else {
          console.error('API request failed with status:', response.status);
        }
      } else {
        // If the user input is empty, clear the searchResults and fetch default suggestions
        const defaultResponse = await fetch('/api/defaultSuggestions');
        if (defaultResponse.status === 200) {
          const defaultData = await defaultResponse.json();
          // Update the defaultSuggestions state with the default suggestions
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
          <FlatList
            data={searchResults}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Text>{item.name}</Text>
            )}
          />
        ) : (
          <View>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Suggested Connections:</Text>
            <FlatList
              data={defaultSuggestions} // Use the defaultSuggestions state here
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <Text>{item.name}</Text>
              )}
            />
          </View>
        )}
      </View>
      <Footer navigation={navigation} />
    </View>
  );
}
