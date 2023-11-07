import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { styles } from '../styles';
import Header from './Header';
import Footer from './Footer';

export default function Profile ({ route, navigation }) {
    const {username} = route.params;
    const [userData, setUserData] = useState(null);
    const [Data, setData] = useState(null);
    const [isFriend, setIsFriend] = useState(false);

    useEffect(() => {
        checkFriendStatus(username);
        fetchUserData(username);        
      }, [username]);

    const checkFriendStatus = async (username) => {
        try {
            const response = await fetch('http://192.168.0.188:5000/isfriend', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({username}),
            });

            if (response.status===200){
                const data = await response.json()
                setData(data);
                
                setIsFriend(data);
            }
        } catch(error){
            console.error('Error checking friend status:', error);
        }
    }
    const fetchUserData = async (username) => {
    try {
        // console.log(username);
        // Make an API request to the server to fetch user details
        const response = await fetch(`http://192.168.0.188:5000/get_user_data`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username})
        });

        if (response.status === 200) {
        const data = await response.json();
        setUserData(data);
        // console.log(data);
        } else {
        console.error('API request failed with status:', response.status);
        
        }
    } catch (error) {
        console.error('Error occurred while making the API request:', error);       
    }
    };

    const connectusers = async () => {
        if(isFriend){
            console.log('remove pressed');
            try {
                const response = await fetch('http://192.168.0.188:5000/removefriend', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ username }),
                });
                if (response.status === 200) {
                    const data = await response.json()
                    
                    setIsFriend(false);
                    
                } else {
                  console.error('Failed to remove friend:', response.status);
                }
              } catch (error) {
                console.error('Error removing friend:', error);
              }


        } else {
            try {
                console.log('connect Pressed');
                const response = await fetch('http://192.168.0.188:5000/connectusers',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({username}),
                })
                if (response.status === 200) {
                    const data = await response.json();
                    setIsFriend(data);
    
                    // Friend request sent successfully
                    
                } else {
                    console.error('Failed to send friend request:', response.status);
                }
            } catch (error) {
                console.error('Error sending friend request:', error);
            }
        }                
    };    
   
    return (
       <View style={styles.container}>
        <Header />
            <View style={styles.homecontent}>
                <Text style={styles.profiletitle}>Profile</Text>
                {userData && (
                    <View>
                        <Text style={styles.profileusername}>{userData[0].firstname}</Text>
                        <Text style={styles.profilefirstname}>{userData[0].lastname}</Text>
                        <Text style={styles.profilefirstname}>{userData[0].organization}</Text>
                        <TouchableOpacity
                            style={styles.signupButton}
                            onPress={connectusers}
                        >
                            <Text style={styles.signupButtonText}>{isFriend ? 'Remove' : 'Connect'}</Text>
                        </TouchableOpacity>
                    </View>
                )}
                
            </View>
        <Footer navigation={navigation} />            
       </View>
    );
   };