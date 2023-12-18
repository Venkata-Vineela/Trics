import DropDownPicker from 'react-native-dropdown-picker';
import React, { useState, useEffect } from 'react';
import { styles } from '../styles';
import Header from './Header';
import Footer from './Footer';
import { View, Text} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import shelterLocations from '../data/shelterLocations.json';
import healthcareLocation from '../data/healthcareLocations.json';

const healthcareLocations = healthcareLocation.records.map((record) => {
    const [, name, , , , , , longitude, latitude] = record;
    return {
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
        title: name,
    };
});

const targetLocations = {
  shelter: shelterLocations,
  healthcare: healthcareLocations,
  
};

export default function Find( {navigation} ) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [items, setItems] = useState([
    { label: 'Shelter', value: 'shelter' },
    { label: 'Healthcare', value: 'healthcare' },
  ]);    
    
  useEffect(() => {
    (async () => {
      // permissions check
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        // do something when permission is denied
        return;
      }
      const location = await Location.getCurrentPositionAsync();      
      setUserLocation(location);
    })()
  }, [])

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance;
  };

  const handleDropdownChange = (selectedValue) => {
    setValue(selectedValue);
  };

  const selectedLocations = targetLocations[value] || [];

  const nearbyLocations = selectedLocations.filter((location) => {
    if (userLocation) {
      const distance = calculateDistance(
        userLocation.coords.latitude,
        userLocation.coords.longitude,
        location.latitude,
        location.longitude
      );
      return distance <= 10; // Display locations within 5 kilometers of the user
    }
    return false;
  });
  

  const initialRegion = userLocation
  ? {
    latitude: userLocation?.coords.latitude || 0,
    longitude: userLocation?.coords.longitude || 0,
    latitudeDelta: 0.09922,
    longitudeDelta: 0.09921
    }
  : null;
  
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.searchcontainer}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={handleDropdownChange}
            setItems={setItems}
            placeholder='Search nearby location'
            style={styles.searchdropdown}
          />
          {value && (
            <Text style={{marginTop: 20}} >Showing results for: {value}</Text>
          )}        
        <MapView style={{flex: 1,marginTop: 20}} initialRegion={initialRegion}>
          {userLocation && (
             <Marker
              coordinate={userLocation.coords} 
              pinColor="blue"
              />
            )}

            {nearbyLocations.map((location, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              title={location.title}
            />
          ))}
        </MapView>
       
        
        </View>
        <Footer navigation={navigation} />
      </View>
    );
}