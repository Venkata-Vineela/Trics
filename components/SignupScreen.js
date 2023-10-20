import React,{ useState }  from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import { styles } from '../styles';
import Header from './Header';
import DropDownPicker from 'react-native-dropdown-picker';

export default function SignupScreen( {navigation} ) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Transportation', value: 'Transportation' },
    { label: 'Communication', value: 'Communication' },
    { label: 'Public Works and Engineering', value: 'Public Works and Engineering'},
    { label: 'Firefighting', value: 'Firefighting'},
    { label: 'MassCare, Emergency Assistance, Temporary Housing and Human Service', value: 'MassCare, Emergency Assistance, Temporary Housing and Human Service'},
    { label: 'Logistics', value: 'Logistics'},
    { label: 'Public Health and Medical Services', value: 'Public Health and Medical Service'},
    { label: 'Search and Rescue', value: 'Search and Rescue'},
    { label: 'Oil and Hazardous Materials Response', value: 'Oil and Hazardous Materials Response'},
    { label: 'Agriculture and Natural Resources Annex', value:'Agriculture and Natural Resources Annex' },
    { label: 'Energy', value: 'Energy' },
    { label: 'Public Safety and Security', value: 'Public Safety and Security'},
    { label: 'Cross-Sector Business and Infrastructure', value: 'Cross-Sector Business and Infrastructure'},
    { label: 'External Affairs' , value: 'External Affairs'},
    { label: 'other', value: 'other'}
  ]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [phone, setphone] = useState('');
  const [street_address, setstreet_address] = useState('');
  const [city, setcity] = useState('');
  const [state, setstate] = useState('');
  const [zip, setzip] = useState('');

  const handleSignup = async () => {
    console.log("in signup")
  try {
  const signupData = {
    username: email, 
    pass, 
    firstName,
    lastName,
    phone,
    organization: value,
    street_address,
    city,
    state,
    zip, 
  };

  const response = await fetch('http://192.168.0.188:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupData)  
      });

      if(response.status==200){
        const responseData = await response.json();
        if(response.status==200) {
          navigation.navigate('Login'); 
          alert(responseData.message);
        }
        
      }
  } catch (error) {
     alert("error signing up")
   }

  };

  return (
    
    <View style={styles.container}>
      <Header /> 
      <Text style={styles.signuptext}>Signup to continue..!</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="FirstName"
          value={firstName}
          onChangeText={setFirstName}


        />
        <TextInput
          style={styles.input}
          placeholder="LastName"
          value={lastName}
          onChangeText={ text => setLastName(text)}


        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}


        />
        <TextInput
          style={styles.input}
          placeholder="Phone"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setphone}

        />
        <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="Organization"
        style={styles.orgdropdown}
        itemStyle={styles.dropdownItem}
        textStyle={styles.dropdownItem}
        />
        {value === 'other' && (
            <TextInput
             style={styles.input} 
             placeholder="Please mention the other"/>
          )} 
        <TextInput
          style={styles.input}
          placeholder="Street Address"
          value={street_address}
          onChangeText={setstreet_address}
        />
        <TextInput
          style={styles.input}
          placeholder="City"
          value={city}
          onChangeText={setcity}
        />
        <TextInput
          style={styles.input}
          placeholder="State"
          value={state}
          onChangeText={setstate}
        />            
        <TextInput
          style={styles.input}
          placeholder="Zipcode"
          keyboardType="phone-pad"
          value={zip}
          onChangeText={setzip}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={pass}
          onChangeText={setPass}

        />
        <View style={styles.signupcontainer}>
        <TouchableOpacity
          onPress={handleSignup}
          style={styles.signupButton}
        >
          <Text style={styles.signupButtonText}>SignUp</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.signuplogintextcontainer}><Text style={styles.signuplogintext}>Already an user? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');                
          }}          
        >
          <Text style={[styles.signuplogintext, {textDecorationLine: 'underline'}]} >Login </Text>
        </TouchableOpacity>
        <Text style={styles.signuplogintext}>Here.</Text></View>
      </View>
    </View>
   
  );
}