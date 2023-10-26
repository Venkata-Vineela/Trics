//  vineela

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  welcomecontainer: {
    flex: 1,
    backgroundColor: '#f4584d',
    alignItems: 'center',
    padding: 30,
  },
  welcome: {
    fontSize: 45,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#fff',
    top: '30%',
  },
  startbuttonContainer: {
    position: 'absolute',
    bottom: '30%',
    alignItems: 'center', 
  },
  startbutton: {
    backgroundColor: '#fff', 
    padding: 20,
    borderRadius: 40, 
  },
  startbuttonText: {
    color: '#f4584d', 
    fontSize: 20,
    fontWeight: 'bold',
  },
  header: {
    height: '10%', 
    width: '100%',
    backgroundColor: '#f4584d', 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  }, 
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff', 
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  signuptext: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 30,
  },
  formContainer: {
    paddingHorizontal: 50, 
    marginTop: 30,
  },
  input: {
    borderColor: '#f4584d',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 7,
    marginBottom: 10, 
    paddingHorizontal: 20,
    fontSize: 20,
  },
  signupcontainer: {
    alignItems: 'center',
  },
  signupButton: {
    backgroundColor: '#f4584d',
    padding: 10,
    borderRadius: 10,
    width: 120,
    alignItems: 'center',
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  signuplogintextcontainer:{
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  signuplogintext: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
  },
  logincontainer: {
    flex: 1,    
    backgroundColor: 'white',
  },
  homecontent: {
    flex:1, 
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    paddingBottom: 15,
   
  },
  searchcontainer: {
    flex: 1,
    margin:20,
  },
  searchdropdown: {
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
  },
  orgdropdown: {
    backgroundColor: '#fff',
    borderColor: '#f4584d',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 7,
    fontSize: 20,
    
    paddingHorizontal: 20,
  },
 

  dropdownItem: {
    borderColor:'#f4584d',
    fontSize: 20,

  
  
  },
  helpcontent: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  helpbutton: {
    backgroundColor: '#f4584d',
    margin: 10,
    borderRadius: 20,
    width: 170,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reqhelpbutton: {
    backgroundColor: '#f4584d',
    margin: 10,
    borderRadius: 20,
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',

  },
  reqhelpbuttonText: {   
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    
  },
  helpbuttonText: {   
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    
  },
  reqhelpcontent: {
    margin: 20,
    flex: 1,
  },
  reqhelptext: {
  paddingBottom: 20,
  fontSize: 20,
  fontWeight: 'bold',
  },
  checkbox: {
    margin:20,
  },
 editAddress: { 
    backgroundColor: '#fcced1',
    margin: 5,
    borderRadius: 20,
    width: 200,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',


 },
 icon: {
  marginRight: 10, // Add space between the icon and text
},
 buttonText: {
  fontWeight: 'bold',
 }
,
buttonContent: {
  flexDirection: 'row', // Arrange items horizontally
  alignItems: 'center', // Vertically align items
  justifyContent: 'center', // Horizontally align items
},
addressBox: {
  marginBottom: 10,
  fontSize: 16,
  fontWeight: 'bold',
  padding: 9,
  backgroundColor: 'white', // Background color
  borderRadius: 5, // Rounded corners
  borderWidth: 1, // Border width
  borderColor: 'lightgray', // Border color
},
settingscontent: {
  margin: 20,
  flex: 1,
},


reportcontainer: {
  paddingHorizontal: 30, 
  marginTop: 25,
  flex: 1,
},

reportinput: {
  borderColor: '#000',
  borderWidth: 1,
  backgroundColor: '#fff',
  borderRadius: 7,
  marginTop: 18, 
  fontSize: 20,
  minHeight: 50,
  paddingHorizontal: 20,
},


borderColor: '#f4584d',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 7,
    marginBottom: 10, 
    paddingHorizontal: 20,
    fontSize: 20,



reportbuttoncontainer: {
  alignItems: 'center',
  marginTop: 20,
  
},
reportButton: {
  backgroundColor: '#f4584d',
  padding: 10,
  borderRadius: 10, 
  width: 120,
  alignItems: 'center',
},
modal: {
  justifyContent: 'center', // Center the modal vertically
  alignItems: 'center', // Center the modal horizontally
},
modalContainer: {
  backgroundColor: 'white', // Background color for the modal
  padding: 30,
  borderRadius: 10,
},
modalText: {
  fontSize: 18,
  marginBottom: 25,
  textAlign: 'center',
},
modalCloseButton: {
  fontSize: 16,
  color:'#f4584d',
  textAlign: 'center',
  marginTop: 10,
},


});
