import React,{ useState,  useEffect}  from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import { styles } from '../styles';
import Header from './Header';
import DropDownPicker from 'react-native-dropdown-picker';
import Modal from 'react-native-modal';
import { SERVER_IP } from './config';

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
  const [confirmPass, setConfirmPass] = useState('');
  const [phone, setphone] = useState('');
  const [street_address, setstreet_address] = useState('');
  const [city, setcity] = useState('');
  const [state, setstate] = useState('');
  const [zip, setzip] = useState('');
  const [formIsValid, setFormIsValid] = useState(false); 
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [otherValue, setOtherValue] = useState('');
  const [otp, setOtp] = useState('');
  const [enteredOtp, setEnteredOtp] = useState('');

  const generateOtpFunc = () => {
    genotp = Math.floor(100000 + Math.random() * 900000).toString();
    setOtp(genotp);
    return genotp;
  };
  useEffect(() => {
    // Log the updated OTP after the state has been set
    console.log("Updated OTP:", otp);
  }, [otp]);

  const handleOtp = async () => {  
   if (formIsValid) {
    console.log("in otp verification")
      try {
        const generateOtp = generateOtpFunc();
        const verificationData = {
          email,
          otp: generateOtp,
        }
        console.log(verificationData);
        const verificatonResponse = await fetch(`${SERVER_IP}/sendverificationEmail`,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(verificationData),
        });
        if (verificatonResponse.status === 200) {
          setPopupMessage('Verification email sent. Please check your inbox for the OTP.');
          setIsModalVisible(true);
        }
        else {
          setPopupMessage('Error sending verification email. Please try again.');
          setIsModalVisible(true);
        }
      }
      catch(error){
        setPopupMessage('Error Sending OTP');
        setIsModalVisible(true);
        console.log(error);
      }     
    } else {
      setPopupMessage('Please fill in all the required fields');
      setIsModalVisible(true);
    }  
  };
  const handleSignup = async () => {
    try {
      console.log(enteredOtp,otp);
      if(enteredOtp === otp) {
        let organization = value;
      if(value === 'other') {
        organization = otherValue; 
      }
      const signupData = {
      username: email, 
      pass, 
      firstName,
      lastName,
      phone,
      organization,
      street_address,
      city,
      state,
      zip, 
      };
      const response = await fetch(`${SERVER_IP}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupData)  
      });
      if(response.status==200){
        const responseData = await response.json();
        if(response.status==200) {          
          setPopupMessage(responseData.message);
          setIsModalVisible(true);
        }
      }
    } else {
      setPopupMessage('Invalid OTP. Please enter the correct OTP.');
      setIsModalVisible(true);
    }
      
    } catch (error) {
    setPopupMessage('Error Signing up');
    setIsModalVisible(true);
    }
  }
  const updateFormValidity = () => {
    const isFormValid =
      email.trim() !== '' &&
      pass.trim() !== '' &&
      confirmPass.trim()!== '' &&
      pass === confirmPass &&
      true;
    setFormIsValid(isFormValid);
  };

  useEffect(() => {
    updateFormValidity();
  }, [email, pass, confirmPass, value, otherValue]);

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
          placeholder="*Email"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            updateFormValidity();
          }}
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
        placeholder="*Organization"
        style={styles.orgdropdown}
        itemStyle={styles.dropdownItem}
        textStyle={styles.dropdownItem}
        onChangeValue={value => {
          if(value === 'other') {
            setOpen(false);

          } else {
            setOpen(false);
          }
          updateFormValidity();
        }} 
        />
        {value === 'other' && (
            <TextInput
            value={otherValue}
             onChangeText={setOtherValue}
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
          placeholder="*Password"
          secureTextEntry={true}
          value={pass}
          onChangeText={(text) => {
            setPass(text);
            updateFormValidity();
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="*Confirm Password"
          secureTextEntry={true}
          value={confirmPass}
          onChangeText={(text) => {
            setConfirmPass(text);
            updateFormValidity();
          }}
        />        
        <View style={styles.signupcontainer}>
        <TouchableOpacity
          onPress={handleOtp}
          style={[styles.signupButton, !formIsValid && styles.disabledButton]}          
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
      <Modal isVisible={isModalVisible}>
  <View style={styles.modalContainer}>
    <Text style={styles.modalText}>{popupMessage}</Text>

        {popupMessage === "Verification email sent. Please check your inbox for the OTP." || 
        popupMessage === 'Invalid OTP. Please enter the correct OTP.' ? (
          <>
            <TextInput
              placeholder="Enter OTP"
              keyboardType="numeric"
              value={enteredOtp}
              onChangeText={setEnteredOtp}
            />
            <TouchableOpacity onPress={handleSignup}>
              <Text style={styles.modalCloseButton}>Verify OTP</Text>
            </TouchableOpacity>
          </>
        ) : (
          // Render other messages here
          // ...

          // Include close button for other messages
          <TouchableOpacity
            onPress={() => {
              setIsModalVisible(false);
              if (popupMessage === "Signup successful") {
                navigation.navigate('Login');
              }
            }}
          >
            <Text style={styles.modalCloseButton}>Close</Text>
          </TouchableOpacity>
        )}
      </View>
    </Modal>

    </View>
   
  );
}

