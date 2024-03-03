//  vineela

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
  welcomecontainer: {
    flex: 1,
    backgroundColor: '#56717d',
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
    color: '#56717d', 
    fontSize: 20,
    fontWeight: 'bold',
  },
  header: {
    height: '10%', 
    width: '100%',
    backgroundColor: '#56717d', 
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
    borderColor: '#56717d',
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
    backgroundColor: '#56717d',
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
    margin: 18,
  },
  homefunction: { 
    backgroundColor: '#a0b1b9',
    margin: 10,
    borderRadius: 20,
    alignSelf: 'flex-start',
    height: 45,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
 },
  addpostcontent: {
    flex: 1,
    margin: 18,
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
    borderColor: '#56717d',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 7,
    fontSize: 20,    
    paddingHorizontal: 20,
  },

  dropdownItem: {
    borderColor:'#56717d',
    fontSize: 20,  
  
  },
  helpcontent: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  helpbutton: {
    backgroundColor: '#56717d',
    margin: 10,
    borderRadius: 20,
    width: 170,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reqhelpbutton: {
    backgroundColor: '#56717d',
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
    backgroundColor: '#a0b1b9',
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


borderColor: '#56717d',
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
  backgroundColor: '#56717d',
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
  color:'#56717d',
  textAlign: 'center',
  marginTop: 10,
},
searchconnections: {
  
  margin: 5,
  flexDirection: 'row'
},
cardContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  padding: 16,
  backgroundColor: '#cfd8dc',
  marginBottom: 10,

  borderRadius: 10,
},
userInfo: {
  marginLeft: 16,
},
username: {
  fontSize: 16,
  fontWeight: 'bold',
},
profilecontainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
profiletitle: {
  fontSize: 24,
  fontWeight: 'bold',
},
profileusername: {
  fontSize: 18,
  marginTop: 20,
},
requserInfo: {
  marginLeft: 16,  
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',

},
acceptButton: {
  backgroundColor: '#56717d',
    padding: 10,
    borderRadius: 10,
    width: 90,
    alignItems: 'center',
},
usernameContainer:{
  flex: 1
},
acceptbuttonContainer:{
  marginRight: 10,
},
post: {
  alignItems: 'center',
  
},
profiletitle: {
  fontSize: 20,
  fontWeight: 'bold',
  marginTop: 10,
},
profileusername: {
  fontSize: 20,
  fontWeight: 'bold',
  marginTop: 8,
  
},
profilefirstname: {
  fontSize: 16,
  marginTop: 4,
},
postCard: {
  borderWidth: 2,
  borderColor: '#ddd',
  borderRadius: 8,
  padding: 16,
  marginTop: 16,
},
postText: {
  fontSize: 16,
  marginTop: 10,
},
visibilityOption: {
  flexDirection: 'row',
  alignItems: 'center',
  marginRight: 10,
},

selectedVisibility: {
  backgroundColor: 'blue',
  borderRadius: 15, // Adjust the border radius as needed to create a circular background
  
},
unselectedVisibility: {
  borderWidth: 1,
  borderColor: 'black',
  borderRadius: 12,
  padding: 5,
  flexDirection: 'row',
  alignItems: 'center',
  marginRight: 10,
  backgroundColor: 'blue',
  borderRadius: 15, 
},








});


