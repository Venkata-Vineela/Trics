import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { styles } from '../styles';
import Header from './Header';
import Footer from './Footer';

export default function Profile ({ route, navigation }) {
    const {username} = route.params;
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetchUserData(username);
      }, [username]);

    const fetchUserData = async (username) => {
    try {
        console.log(username);
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
        console.log(data);
        console.log(data.firstname);
        } else {
        console.error('API request failed with status:', response.status);
        
        }
    } catch (error) {
        console.error('Error occurred while making the API request:', error);
       
    }
    };

    const connectusers = async () => {
        try {
            console.log('connectPressed');
            const response = await fetch('http://192.168.0.188:5000/connectusers',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({username}),
            })
            if (response.status === 200) {
                // Friend request sent successfully
                console.log('Friend request sent successfully.');
            } else {
                console.error('Failed to send friend request:', response.status);
            }
        } catch (error) {
            console.error('Error sending friend request:', error);
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
                            <Text style={styles.signupButtonText}>Connect</Text>
                        </TouchableOpacity>

                    </View>
                )}
                
            </View>
        <Footer navigation={navigation} />            
       </View>
    );
   };

