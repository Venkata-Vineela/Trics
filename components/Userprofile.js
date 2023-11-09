import React,  { useState, useEffect }  from 'react';
import { View, Text} from 'react-native';
import { styles } from '../styles';
import Header from './Header';
import Footer from './Footer';
import { SERVER_IP } from './config';


export default function HomePage({navigation}) {

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchUserData();        
  }, []);

  const fetchUserData = async () => {
    try {
        // console.log(username);
        // Make an API request to the server to fetch user details
        const response = await fetch(`${SERVER_IP}/get_userprofile_data`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        });

        if (response.status === 200) {
        const data = await response.json();
        setUserData(data);
        console.log(data);
        } else {
        console.error('API request failed with status:', response.status);
        
        }
    } catch (error) {
        console.error('Error occurred while making the API request:', error);       
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
                    </View>
                )}
                
            </View>
        <Footer navigation={navigation} />            
       </View>
    );
  }
  